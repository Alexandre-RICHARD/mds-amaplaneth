<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('admin_passwords', function (Blueprint $table) {
            $table->id();
            $table->string('password')->nullable();
            $table->string('reset_token')->nullable();
            $table->integer('reset_token_expires')->nullable();
        });

        DB::table('admin_passwords')->insert(['id' => 1]);
    }

    public function down(): void
    {
        Schema::dropIfExists('admin_passwords');
    }
};
