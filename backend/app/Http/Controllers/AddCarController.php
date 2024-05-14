<?php

namespace App\Http\Controllers;

use App\Models\AddCar;
use Illuminate\Http\Request;

class AddCarController extends Controller
{
    function addCar(Request $req) 
    {
        $addcar = new AddCar;

        $addcar->brand=$req->input('brand');
        $addcar->year=$req->input('year');
        $addcar->engine=$req->input('engine');
        $addcar->gearbox=$req->input('gearbox');
        $addcar->color=$req->input('color');
        $addcar->reasons=$req->input('reasons');
        $addcar->locations=$req->input('locations');
        $addcar->runs=$req->input('runs');
        $addcar->number_of_owners=$req->input('number_of_owners');
        $addcar->vin_code=$req->input('vin_code');
        $addcar->price=$req->input('price');
        $addcar->phone_owner=$req->input('phone_owner');


        $addcar->file_path=$req->file('file')->store('addcar');

        $addcar->save();

        return $addcar;
    }

    function list()
    {
        return AddCar::all();
    }

}
