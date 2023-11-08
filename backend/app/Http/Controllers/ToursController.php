<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ToursController extends Controller
{
    public function create(Request $request) //додавання туру
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'country' => 'required|string',
            'date' => 'required|date',
            'price' => 'required|string',
            'place' => 'required|integer',
            'services' => 'string',
        ]);

        $tour = new Tour();
        $tour->name = $request->input('name');
        $tour->country = $request->input('country');
        $tour->date = $request->input('date');
        $tour->price = $request->input('price');
        $tour->place = $request->input('place');
        $tour->services = $request->input('services');
        $tour->save();

        if ($request->hasFile('photos')) { //додавання фото туру
            foreach ($request->file('photos') as $photo) {
                $path = $photo->store('photos');
                $tour->photos()->create(['path' => $path]);
            }
        }

        return response()->json($tour, 201);
    }

    public function update(Request $request, $id)  //редагування туру
    {
        $tour = Tour::find($id);

        if (!$tour) {
            return response()->json(['message' => 'Tour not found'], 404);
        }

        $validatedData = $request->validate([
            'name' => 'required|string',
            'country' => 'required|string',
            'date' => 'required|date',
            'price' => 'required|string',
            'place' => 'required|integer',
            'services' => 'string',
        ]);

        $tour->name = $request->input('name');
        $tour->country = $request->input('country');
        $tour->date = $request->input('date');
        $tour->place = $request->input('place');
        $tour->services = $request->input('services');
        $tour->save();

 // Логіка оновлення фотографій туру
 if ($request->hasFile('photos')) {
    $tour->photos()->delete(); // Видаляємо всі попередні фотографії туру
    foreach ($request->file('photos') as $photo) {
        $path = $photo->store('photos');
        $tour->photos()->create(['path' => $path]);
    }
}


        return response()->json($tour, 200);
    }

    public function delete($id)
    {
        $tour = Tour::find($id);

        if (!$tour) {
            return response()->json(['message' => 'Tour not found'], 404);
        }

        $tour->delete();

       
         $tour->photos()->delete(); // Видаляємо всі фотографії туру перед видаленням самого туру

        return response()->json(null, 204);
    }
}
