<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Admin
{
    public function handle(Request $request, Closure $next)
    {
        if (!$request->session()->get('is_admin')) {
            return redirect()->route('home');
        }

        return $next($request);
    }
}
