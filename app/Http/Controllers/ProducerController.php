<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Producer;
use Illuminate\Http\Request;

class ProducerController extends Controller
{
    public function createProducer(Request $request)
    {
        $data = $request->validate([
            'profile_picture' => ['required', 'string'],
            'first_name' => ['required', 'string'],
            'last_name' => ['required', 'string'],
            'address_road' => ['required', 'string'],
            'zipcode' => ['required', 'string'],
            'city' => ['required', 'string'],
            'description' => ['required', 'string'],
        ]);

        Producer::create($data);

        return 'success';
    }

    public function allProducers()
    {
        return Producer::all();
    }

    public function getProducer(int $id)
    {
        return Producer::find($id);
    }

    public function editProducer(int $id, Request $request)
    {
        $data = $request->validate([
            'profile_picture' => ['required', 'string'],
            'first_name' => ['required', 'string'],
            'last_name' => ['required', 'string'],
            'address_road' => ['required', 'string'],
            'zipcode' => ['required', 'string'],
            'city' => ['required', 'string'],
            'description' => ['required', 'string'],
        ]);

        Producer::findOrFail($id)->update($data);

        return ['success' => 'Producer mis à jour'];
    }

    public function destroyProducer(int $id)
    {
        Producer::destroy($id);
    }
}
