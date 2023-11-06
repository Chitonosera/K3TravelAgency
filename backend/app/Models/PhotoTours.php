<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PhotoTours extends Model
{
    use HasFactory;

    protected $fillable = ['tour_id', 'path'];

    public function tour()
    {
        return $this->belongsTo(Tours::class);
    }
}
