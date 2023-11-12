<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TourController;
use App\Http\Controllers\ProductController;


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

Route::post('register',[UserController::class,'register']);
Route::post('login',[UserController::class,'login']);
Route::post('checkPhone',[UserController::class,'checkPhone']);


Route::post('addproduct',[ProductController::class,'addProduct']);
Route::get('list',[ProductController::class,'list']);



// Route::post('addTour', [TourController::class, 'addTour']);
// Route::get('getTour', [TourController::class, 'getTour']);
// Route::delete('destroy', [TourController::class, 'destroy']);



// Route::get('checkPhone/{number}', [UserController::class, 'checkPhone']);

