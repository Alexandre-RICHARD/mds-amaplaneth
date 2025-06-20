<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
    public function token(): array
    {
        $token = Str::random(40);
        session(['admin_login_token' => $token]);

        return ['token' => $token];
    }

    public function loginPage(Request $request): Response
    {
        if ($request->session()->get('admin_login_token') !== $request->query('token')) {
            abort(403);
        }

        return Inertia::render('Admin/Login', [
            'token' => $request->query('token'),
        ]);
    }

    public function login(Request $request)
    {
        if ($request->session()->get('admin_login_token') !== $request->input('token')) {
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
        $request->session()->put('is_admin', true);

        return redirect()->route('home');
    }
}
