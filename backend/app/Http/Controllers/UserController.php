<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getUserProfile()
    {
        $user = Auth::user(); // Отримання авторизованого користувача

        return response()->json([
            'name' => $user->name,
            'email' => $user->email,
            'phone_number' => $user->phone,
        ], 200);
    }
}
