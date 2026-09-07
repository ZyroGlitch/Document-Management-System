<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        // dd($request->all());
        $validated = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:8|string',
        ]);

        $user = User::firstOrCreate(
            [
                'email' => $validated['email'],
            ],
            [
                'name' => $validated['name'],
                'password' => Hash::make($validated['password']),
            ]
        );

        // If the user already existed
        if (!$user->wasRecentlyCreated) {
            return redirect()->back()->withErrors([
                'email' => 'This email is already registered.',
            ]);
        }

        // Create Passport access token
        $token = $user->createToken($validated['name'])->accessToken;

        return redirect()->route('web.dashboard');
    }

    public function login(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:8|string',
        ]);

        if (!Auth::attempt($validated)) {
            return redirect()->back()->withErrors([
                'message' => 'Incorrect credentials!',
            ]);
        }

        $request->session()->regenerate();

        // Redirect based on the user's role
        $user = Auth::user();

        if ($user->role === 'Client') {
            return redirect()->route('client.dashboard');
        } elseif ($user->role === 'Admin') {
            return redirect()->route('admin.dashboard');
        } elseif ($user->role === 'Lease Admin') {
            return redirect()->route('lease_admin.dashboard');
        } elseif ($user->role === 'Operation') {
            return redirect()->route('operation.dashboard');
        }
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('web.login');
    }
}
