<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::post('/register', 'API\Auth\RegisterController@register');
Route::post('login', 'API\Auth\AuthController@login');

Route::prefix('admin')->group(function () {
    Route::post('tours', 'API\TourController@create');
    Route::put('tours/{id}', 'API\TourController@update');
    Route::delete('tours/{id}', 'API\TourController@delete');
});

Route::post('tours/{id}/photos', 'API\TourController@uploadPhotos'); // Завантаження фотографій для туру
Route::get('tours/{id}/photos', 'API\TourController@getPhotos'); // Отримання фотографій туру

Route::get('tours', 'API\MainPageInfo@getTours'); // Отримання всіх даних турів


Route::get('user/profile', 'UserController@getUserProfile'); // Отримання інформації про користувача

Route::post('check-phone', 'API\BotController@checkPhone');