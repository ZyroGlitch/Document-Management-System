<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Client\DocumentController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Home')->name('web.login');
Route::inertia('/register', 'Register')->name('web.register');

Route::post('/register', [AuthController::class, 'register'])->name('auth.register');
Route::post('/login', [AuthController::class, 'login'])->name('auth.login');

Route::middleware('auth')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout'])->name('auth.logout');
});

Route::prefix('client')
    ->name('client.')
    ->middleware(['auth', 'client'])
    ->group(function () {
        Route::inertia('/dashboard', 'Client/Dashboard')->name('dashboard');
        Route::inertia('/documents', 'Client/Documents')->name('documents');
        Route::post('/documents/store', [DocumentController::class, 'store_document'])->name('documents.store');
    });

Route::prefix('admin')
    ->name('admin.')
    ->middleware(['auth', 'admin'])
    ->group(function () {
        Route::inertia('/dashboard', 'Admin/Dashboard')->name('dashboard');
    });

Route::prefix('lease-admin')
    ->name('lease_admin.')
    ->middleware(['auth', 'lease_admin'])->group(function () {
        Route::inertia('/dashboard', 'Lease Admin/Dashboard')->name('dashboard');
    });

Route::prefix('operation')
    ->name('operation.')
    ->middleware(['auth', 'operation'])->group(function () {
        Route::inertia('/dashboard', 'Operation/Dashboard')->name('dashboard');
    });
