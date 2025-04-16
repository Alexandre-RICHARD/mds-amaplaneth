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

require __DIR__ . '/auth.php';
