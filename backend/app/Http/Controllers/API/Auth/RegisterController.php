<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'age' => 'required|string',
            'email' => 'required|email|unique:users',
            'phone_number' => 'required|string',
            'password' => 'required|string|min:6',
        ]);

        $user = new User([
            'name' => $request->name,
            'age' => $request->age,
            'email' => $request->email,
            'phone_number' => $request->phone_number,
            'password' => Hash::make($request->password),
        ]);

        $user->save();

        return response()->json(['message' => 'User registered successfully'], 201);
    }
}
