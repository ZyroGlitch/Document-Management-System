<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;

class AccountingIntegrationController extends Controller
{
    public function testConnection()
    {
        $url = rtrim(config('services.ams.url'), '/');

        // 1. Get token from AMS
        $token = Http::asForm()->post(
            $url . '/oauth/token',
            [
                'grant_type' => 'client_credentials',
                'client_id' => config('services.ams.client_id'),
                'client_secret' => config('services.ams.client_secret'),
                'scope' => 'accounting:read',
            ]
        )->throw()->json('access_token');

        // 2. Request protected API from AMS
        $response = Http::withToken($token)
            ->acceptJson()
            ->get($url . '/api/accounting/test')
            ->throw();

        // 3. Return response
        return response()->json($response->json());
    }
}
