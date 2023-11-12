<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    //
    function addProduct(Request $req) 
    {
        $product = new Product;
        $product->name=$req->input('name');
        $product->date=$req->input('date');
        $product->price=$req->input('price');
        $product->seats=$req->input('seats');
        $product->file_path=$req->file('file')->store('products');
        $product->save();

        return $product;
    }

    function list()
    {
        return Product::all();
    }
}
