<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $isAdmin = false;
        if ($request->session()->get('is_admin')) {
            $expires = $request->session()->get('is_admin_expires', 0);
            if ($expires >= time()) {
                $isAdmin = true;
                $duration = env('ADMIN_TOKEN_LIFETIME', 30);
                $request->session()->put('is_admin_expires', Carbon::now()->addMinutes($duration)->timestamp);
            } else {
                $request->session()->forget('is_admin');
                $request->session()->forget('is_admin_expires');
            }
        }

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'isAdmin' => $isAdmin,
            'adminSequence' => explode(',', env('ADMIN_SEQUENCE')),
        ];
    }
}
