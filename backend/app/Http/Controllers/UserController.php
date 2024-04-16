<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //
    function register(Request $req)
    {
        $user = new User;
        $user->name= $req->input('name');
        $user->email= $req->input('email');
        $user->password= Hash::make($req->input('password'));
        $user->number= $req->input('number');
        $user->save();


        return $user;
    }

    function login(Request $req)
    {
        $user= User::where('email',$req->email)->first();
        if(!$user || !Hash::check($req->password,$user->password))
        {
            return ["error"=>"Email or password is not matched"];
        }
        return $user;
    }

    function checkPhone(Request $req)
    {
        $user = User::where('number', $req->number)->first();

        if (!$user || !Hash::check($req->number, $user->number))
        {
            return ["error" => "error"];
        }
        return $number;
        
        
    }

    function getUserDataMyProfile(Request $req)
    {
        return User::find($id);
    }


}
