<?php

use App\Http\Controllers\ContractController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\ProducerController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::middleware('admin')->group(function () {

Route::group(['prefix' => 'contracts'], function () {
    Route::post('', [ContractController::class, 'createContract'])->name('contracts.store');
    Route::get('{id}', [ContractController::class, 'getContract'])->name('contracts.read');
    Route::get('', [ContractController::class, 'allContracts'])->name('contracts.show');
    Route::put('{id}', [ContractController::class, 'editContract'])->name('contracts.update');
    Route::delete('{id}', [ContractController::class, 'destroyContract'])->name('contracts.destroy');
});

Route::group(['prefix' => 'images'], function () {
    Route::post('', [ImageController::class, 'createImage'])->name('images.store');
    Route::get('{id}', [ImageController::class, 'getImage'])->name('images.read');
    Route::get('', [ImageController::class, 'allImages'])->name('images.show');
    Route::put('{id}', [ImageController::class, 'editImage'])->name('images.update');
    Route::delete('{id}', [ImageController::class, 'destroyImage'])->name('images.destroy');
});

Route::group(['prefix' => 'producers'], function () {
    Route::post('', [ProducerController::class, 'createProducer'])->name('producers.store');
    Route::get('{id}', [ProducerController::class, 'getProducer'])->name('producers.read');
    Route::get('', [ProducerController::class, 'allProducers'])->name('producers.show');
    Route::put('{id}', [ProducerController::class, 'editProducer'])->name('producers.update');
    Route::delete('{id}', [ProducerController::class, 'destroyProducer'])->name('producers.destroy');
});

Route::group(['prefix' => 'products'], function () {
    Route::post('', [ProductController::class, 'createProduct'])->name('products.store');
    Route::get('{id}', [ProductController::class, 'getProduct'])->name('products.read');
    Route::get('', [ProductController::class, 'allProducts'])->name('products.show');
    Route::put('{id}', [ProductController::class, 'editProduct'])->name('products.update');
    Route::delete('{id}', [ProductController::class, 'destroyProduct'])->name('products.destroy');
});

});
