<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
// Route::post('register', 'API\Auth\RegisterController@register');
// Route::post('login', 'API\Auth\AuthController@login');

// Route::prefix('admin')->group(function () {
//     Route::post('tours', 'API\Auth\TourController@create');
//     Route::put('tours/{id}', 'API\Auth\TourController@update');
//     Route::delete('tours/{id}', 'API\Auth\TourController@delete');
// });

// Route::post('tours/{id}/photos', 'API\Auth\TourController@uploadPhotos'); // Завантаження фотографій для туру
// Route::get('tours/{id}/photos', 'API\Auth\TourController@getPhotos'); // Отримання фотографій туру

// Route::get('tours', 'API\Auth\MainPageInfo@getTours'); // Отримання всіх даних турів


// Route::get('user/profile', 'UserController@getUserProfile'); // Отримання інформації про користувача

// Route::post('check-phone', 'API\Auth\BotController@checkPhone');
// Route::post('check-tours', 'API\Auth\BotController@checkTours');
