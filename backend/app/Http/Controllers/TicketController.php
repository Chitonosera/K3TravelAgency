<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TicketController extends Controller
{
    public function storeTicket(Request $req)
    {
        $ticket = new Product;
        $ticket->name=$req->input('name_tour');
        $ticket->date=$req->input('date');
        $ticket->price=$req->input('price');
        $ticket->seats=$req->input('seats');
        $ticket->seats=$req->input('name');
        $ticket->seats=$req->input('lastname');
        $ticket->seats=$req->input('phone');
        $ticket->seats=$req->input('email');

        $ticket->save();

        return $ticket;
    }

    function getTicket($id)
    {
        return Ticket::find($id);
    }

    
}
