<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tour;

class TourController extends Controller
{
    function addTour(Request $req)
    {
        $tour = new Tour;
        $tour->name= $req->input('name');
        $tour->country= $req->input('country');
        $tour->date= $req->input('date');
        $tour->price= $req->input('price');
        $tour->seats= $req->input('seats');
        $tour->services= $req->input('services');

        $tour->save();

        return $tour;
    }

    public function getTour()
    {
        $tour = Tour::all();

        return $tour;
    }
}
