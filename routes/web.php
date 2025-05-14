<?php

use App\Http\Controllers\ProfileController;
use App\Mail\ContactMail;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

require __DIR__ . '/api.php';

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/mentions-legales', function () {
    return Inertia::render('Legal');
})->name('legal');

Route::get('/contrat', function () {
    return Inertia::render('Contract');
})->name('contract');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::post('/send-mail', function (Request $request) {
    Mail::to('amaplaneth@riseup.net')->send(new ContactMail($request));
})->name('send');
