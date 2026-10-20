<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Admin\DocumentController as AdminDocumentController;
use App\Http\Controllers\Client\DocumentController as ClientDocumentController;
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
        Route::get('/documents', [ClientDocumentController::class, 'documents'])->name('documents');
        Route::post('/documents/store', [ClientDocumentController::class, 'store_document'])->name('documents.store');
    });

Route::prefix('admin')
    ->name('admin.')
    ->middleware(['auth', 'admin'])
    ->group(function () {
        Route::get('/dashboard', [AdminDocumentController::class, 'list_document_approval'])->name('dashboard');
        Route::put('/dashboard/document/approve/{id}', [AdminDocumentController::class, 'document_approve'])->name('document_approve');
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
