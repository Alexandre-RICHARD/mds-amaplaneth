<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producer extends Model
{
    use HasFactory;

    protected $table = 'producers';

    protected $fillable = [
        'profile_picture',
        'first_name',
        'last_name',
        'address_road',
        'zipcode',
        'city',
        'description',
    ];

    public function images()
    {
        return $this->belongsToMany(Image::class, 'producer_images', 'producer_id', 'image_id');
    }
}
