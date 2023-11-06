<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tours extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'country', 'date', 'place', 'services'];

    public function photos()
    {
        return $this->hasMany(Photo::class);
    }
}
