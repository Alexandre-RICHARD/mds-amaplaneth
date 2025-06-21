<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Illuminate\Support\Carbon;
use App\Models\AdminPassword;
use App\Mail\AdminForgotPasswordMail;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
    public function keyStep(Request $request)
    {
        $sequence = $request->input('sequence', []);
        if ($sequence !== explode(',', (string) env('ADMIN_SEQUENCE'))) {
            abort(403);
        }

        $token = Str::random(40);
        $duration = (int) env('ADMIN_TOKEN_LIFETIME', 30);
        $expires = Carbon::now()->addMinutes($duration)->timestamp;
        $request->session()->put('admin_login_token', $token);
        $request->session()->put('admin_login_token_expires', $expires);

        return redirect()->route('admin.login');
    }

    public function loginPage(Request $request): Response
    {
        $token = $request->session()->get('admin_login_token');
        $expires = $request->session()->get('admin_login_token_expires');
        if (!$token || $expires < time()) {
            abort(403);
        }

        return Inertia::render('Admin/Login');
    }

    public function login(Request $request)
    {
        $token = $request->session()->get('admin_login_token');
        $expires = $request->session()->get('admin_login_token_expires');
        if (!$token || $expires < time()) {
            abort(403);
        }

        $request->validate([
            'password' => ['required'],
        ]);

        $admin = AdminPassword::find(1);
        $hash = $admin?->password;
        if (!$hash || !Hash::check($request->input('password'), $hash)) {
            return back()->withErrors(['password' => 'Mot de passe invalide']);
        }

        $request->session()->forget('admin_login_token');
        $request->session()->forget('admin_login_token_expires');
        $duration = (int) env('ADMIN_TOKEN_LIFETIME', 30);
        $request->session()->put('is_admin', true);
        $request->session()->put('is_admin_expires', Carbon::now()->addMinutes($duration)->timestamp);

        return redirect()->route('home');
    }

    public function logout(Request $request)
    {
        $request->session()->forget('is_admin');
        $request->session()->forget('is_admin_expires');

        return redirect()->route('home');
    }

    public function forgotPassword(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email'],
        ]);

        $inputEmail = $request->input('email');
        $email = env('ADMIN_BACKUP_EMAIL');

        if ($email && $inputEmail === $email) {
            $admin = AdminPassword::firstOrCreate(['id' => 1]);

            $token = Str::random(40);
            $duration = (int) env('ADMIN_TOKEN_LIFETIME', 30);
            $expires = Carbon::now()->addMinutes($duration)->timestamp;
            $admin->reset_token = $token;
            $admin->reset_token_expires = $expires;
            $admin->save();

            $url = route('admin.setPassword', ['token' => $token]);
            Mail::to($email)->send(new AdminForgotPasswordMail($url));
        } else {
            return back()->withErrors(['email' => 'Adresse email incorrecte']);
        }

        return back();
    }

    public function setPasswordPage(Request $request): Response
    {
        $admin = AdminPassword::find(1);
        $token = $request->query('token');
        if (!$admin || !$admin->reset_token || $admin->reset_token !== $token || $admin->reset_token_expires < time()) {
            abort(403);
        }

        return Inertia::render('Admin/SetPassword', [
            'token' => $token,
        ]);
    }

    public function setPassword(Request $request)
    {
        $admin = AdminPassword::find(1);
        $token = $request->input('token');
        if (!$admin || !$admin->reset_token || $admin->reset_token !== $token || $admin->reset_token_expires < time()) {
            abort(403);
        }

        $request->validate([
            'password' => ['required'],
        ]);

        $admin->password = Hash::make($request->input('password'));
        $admin->reset_token = null;
        $admin->reset_token_expires = null;
        $admin->save();

        $token = Str::random(40);
        $duration = (int) env('ADMIN_TOKEN_LIFETIME', 30);
        $expires = Carbon::now()->addMinutes($duration)->timestamp;
        $request->session()->put('admin_login_token', $token);
        $request->session()->put('admin_login_token_expires', $expires);

        return redirect()->route('admin.login');
    }
}
