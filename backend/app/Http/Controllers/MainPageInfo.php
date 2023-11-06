<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MainPageInfo extends Controller
{
    public function getTours()
    {
        $tours = Tour::with('photos')->get(); // Отримання всіх турів та їх фотографій

        return response()->json($tours, 200);
    }
    
}
