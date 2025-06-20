<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Illuminate\Support\Carbon;
use App\Mail\AdminForgotPasswordMail;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
    public function keyStep(Request $request)
    {
        $sequence = explode(',', env('ADMIN_SEQUENCE'));
        $position = $request->session()->get('admin_key_position', 0);

        if ($request->query('key') === ($sequence[$position] ?? null)) {
            $position++;
            if ($position === count($sequence)) {
                $request->session()->forget('admin_key_position');
                $token = Str::random(40);
                $duration = env('ADMIN_TOKEN_LIFETIME', 30);
                $expires = Carbon::now()->addMinutes($duration)->timestamp;
                $request->session()->put('admin_login_token', $token);
                $request->session()->put('admin_login_token_expires', $expires);

                return ['token' => $token];
            }

            $request->session()->put('admin_key_position', $position);
        } else {
            $request->session()->put('admin_key_position', 0);
        }

        return [];
    }

    public function loginPage(Request $request): Response
    {
        $token = $request->session()->get('admin_login_token');
        $expires = $request->session()->get('admin_login_token_expires');
        if (!$token || $token !== $request->query('token') || $expires < time()) {
            abort(403);
        }

        return Inertia::render('Admin/Login', [
            'token' => $request->query('token'),
        ]);
    }

    public function login(Request $request)
    {
        $token = $request->session()->get('admin_login_token');
        $expires = $request->session()->get('admin_login_token_expires');
        if (!$token || $token !== $request->input('token') || $expires < time()) {
            abort(403);
        }

        $request->validate([
            'password' => ['required'],
        ]);

        $hash = env('ADMIN_PASSWORD_HASH');
        if (!$hash || !Hash::check($request->input('password'), $hash)) {
            return back()->withErrors(['password' => 'Mot de passe invalide']);
        }

        $request->session()->forget('admin_login_token');
        $request->session()->forget('admin_login_token_expires');
        $request->session()->put('is_admin', true);

        return redirect()->route('home');
    }

    public function logout(Request $request)
    {
        $request->session()->forget('is_admin');

        return redirect()->route('home');
    }

    public function forgotPassword()
    {
        $email = env('ADMIN_BACKUP_EMAIL');
        if ($email) {
            Mail::to($email)->send(new AdminForgotPasswordMail());
        }

        return back();
    }
}
