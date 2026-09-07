<?php

use App\Http\Middleware\AdminMiddleware;
use App\Http\Middleware\ClientMiddleware;
use App\Http\Middleware\HandleInertiaRequests;
use App\Http\Middleware\LeaseAdminMiddleware;
use App\Http\Middleware\OperationMiddleware;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        api: __DIR__ . '/../routes/api.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->web(append: [
            HandleInertiaRequests::class,
        ]);

        $middleware->alias([
            'client' => ClientMiddleware::class,
            'admin' => AdminMiddleware::class,
            'lease_admin' => LeaseAdminMiddleware::class,
            'operation' => OperationMiddleware::class,
        ]);

        $middleware->redirectGuestsTo(fn() => route('web.login'));
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })->create();
