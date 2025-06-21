<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;

    protected $table = 'images';

    protected $fillable = [
        'title',
        'alt_text',
        'url',
    ];

    public function producers()
    {
        return $this->belongsToMany(Producer::class, 'producer_images', 'image_id', 'producer_id');
    }
}
