<?php

use App\Http\Controllers\AccountingIntegrationController;
use App\Http\Controllers\Admin\DocumentController as AdminDocumentController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Client\DocumentController as ClientDocumentController;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Home')->name('web.login');
Route::inertia('/register', 'Register')->name('web.register');

Route::post('/register', [AuthController::class, 'register'])->name('auth.register');
Route::post('/login', [AuthController::class, 'login'])->name('auth.login');

Route::middleware('auth')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout'])->name('auth.logout');
});

Route::middleware('auth')->group(function () {
    Route::prefix('client')
        ->name('client.')
        ->middleware('client')
        ->group(function () {
            Route::inertia('/dashboard', 'Client/Dashboard')->name('dashboard');
            Route::get('/documents', [ClientDocumentController::class, 'documents'])->name('documents');
            Route::post('/documents/store', [ClientDocumentController::class, 'store_document'])->name('documents.store');
        });

    Route::prefix('admin')
        ->name('admin.')
        ->middleware('admin')
        ->group(function () {
            Route::get('/dashboard', [AdminDocumentController::class, 'list_document_approval'])->name('dashboard');
            Route::put('/dashboard/document/approve/{id}', [AdminDocumentController::class, 'document_approve'])->name('document_approve');
        });

    Route::prefix('lease-admin')
        ->name('lease_admin.')
        ->middleware('lease_admin')->group(function () {
            Route::inertia('/dashboard', 'Lease Admin/Dashboard')->name('dashboard');
        });

    Route::prefix('operation')
        ->name('operation.')
        ->middleware('operation')->group(function () {
            Route::inertia('/dashboard', 'Operation/Dashboard')->name('dashboard');
        });
});


if (app()->environment('local')) {
    Route::get('/test-accounting-api', [AccountingIntegrationController::class, 'testConnection']);
}

if (app()->environment('local')) {
    Route::get('/fetch-ams-users', function () {

        $url = rtrim(config('services.ams.url'), '/');

        // STEP 1: Get access token from AMS
        $token = Http::asForm()
            ->post($url . '/oauth/token', [
                'grant_type' => 'client_credentials',
                'client_id' => config('services.ams.client_id'),
                'client_secret' => config('services.ams.client_secret'),
                'scope' => 'accounting:read',
            ])
            ->throw()
            ->json('access_token');

        // STEP 2: Fetch users from AMS
        $response = Http::withToken($token)
            ->get($url . '/api/users')
            ->throw();

        // STEP 3: Return the users
        return response()->json($response->json());
    });
}
