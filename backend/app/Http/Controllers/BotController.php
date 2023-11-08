<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BotController extends Controller
{
    public function checkPhone(Request $request)
    {
        $phone = $request->input('phone_number'); // Отримання номеру телефону від телеграм-бота

        $user = User::where('phone_number', $phone)->first(); // Пошук користувача за номером телефону

        if ($user) {
            // Номер телефону знайдено в базі даних
            return response()->json(['message' => 'Номер телефону знайдено.'], 200);
        } else {
            // Номер телефону не знайдено в базі даних
            return response()->json(['message' => 'Номер телефону не знайдено.'], 404);
        }
    }
    public function  checkTours(Request $request)
    {
        $name = $request->input('name'); // Отримання нвзв туру від телеграм-бота
        $tour = Tours::where('name', $name)->first(); 

        if($tour)
        {
            return response()->json(['message' => 'Ваш тур знайдено.'], 200);
        }
        else{
            return response()->json(['message' => 'Вашого туру не існує.'], 404);
        }
    }
}