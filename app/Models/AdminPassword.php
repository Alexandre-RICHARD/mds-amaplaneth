<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AdminPassword extends Model
{
    protected $table = 'admin_passwords';

    protected $fillable = [
        'password',
        'reset_token',
        'reset_token_expires',
    ];

    public $timestamps = false;
}
