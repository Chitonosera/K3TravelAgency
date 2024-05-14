<?php

namespace App\Http\Controllers;

use App\Models\OrderCar;
use Illuminate\Http\Request;

class OrderCarController extends Controller
{
    function addOrder(Request $req) 
    {
        $addorder = new OrderCar;

        $addorder->name=$req->input('name');
        $addorder->number_phone=$req->input('number_phone');
        $addorder->email_owner=$req->input('email_owner');
        $addorder->id_car=$req->input('id_car');
        
        $addorder->save();

        return $addorder;
    }   
}
