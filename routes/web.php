<?php

use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

require __DIR__.'/api.php';

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/mentions-legales', function () {
    return Inertia::render('Legal');
})->name('legal');

Route::get('/contrat', function () {
    return Inertia::render('Contract');
})->name('contract');

Route::get('/producteurs', function () {
    return Inertia::render('Producers');
})->name('farmers');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

// Route::post('/send-mail', function (Request $request) {
//     Mail::to('amaplaneth@riseup.net')->send(new ContactMail($request));
// })->name('send');

Route::post('/admin/key-step', [AdminController::class, 'keyStep'])->name('admin.keyStep');
Route::get('/admin/login', [AdminController::class, 'loginPage'])->name('admin.login');
Route::post('/admin/login', [AdminController::class, 'login'])->name('admin.login.post');
Route::post('/admin/logout', [AdminController::class, 'logout'])->name('admin.logout');
Route::post('/admin/forgot-password', [AdminController::class, 'forgotPassword'])->name('admin.forgot');
Route::get('/admin/set-password', [AdminController::class, 'setPasswordPage'])->name('admin.setPassword');
Route::post('/admin/set-password', [AdminController::class, 'setPassword'])->name('admin.setPassword.post');

Route::fallback(function () {
    return redirect()->route('home');
});
