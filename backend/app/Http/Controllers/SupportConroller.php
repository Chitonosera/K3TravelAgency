<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SupportConroller extends Controller
{
    function addSupport(Request $req) 
    {
        $support = new Product;
        $support->name=$req->input('name');
        $support->email=$req->input('email');
        $support->comment=$req->input('comment');
        $support->save();

        return $support;
    }


}
