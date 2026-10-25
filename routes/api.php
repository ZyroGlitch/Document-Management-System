<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Laravel\Passport\Http\Middleware\EnsureClientIsResourceOwner;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

Route::get('/users', function () {

    $users = DB::table('users')
        ->select('id', 'name', 'email')
        ->get();

    return response()->json([
        'system' => 'Document Management System',
        'users' => $users,
    ]);
})->middleware(
    EnsureClientIsResourceOwner::using('documents:read')
);
