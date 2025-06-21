<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producer extends Model
{
    use HasFactory;

    protected $table = "producers";

    public $timestamps = false;

    protected $fillable = [
        'profile_picture',
        'first_name',
        'last_name',
        'address_road',
        'zipcode',
        'city',
        'description'
    ];
}
