<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/mentions-legales', function () {
    return Inertia::render('Legal');
})->name('legal');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');
