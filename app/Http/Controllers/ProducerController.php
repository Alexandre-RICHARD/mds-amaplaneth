<?php

namespace App\Http\Controllers;

use App\Models\Producer;
use Illuminate\Support\Arr;
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
            'pictures' => ['array'],
            'pictures.*' => ['integer'],
        ]);

        $pictures = $data['pictures'] ?? [];
        unset($data['pictures']);

        $producer = Producer::create($data);

        if (!empty($pictures)) {
            $producer->images()->attach($pictures);
        }

        return 'success';
    }

    public function allProducers()
    {
        return Producer::with('images')->get();
    }

    public function getProducer(int $id)
    {
        return Producer::with('images')->find($id);
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
            'pictures' => ['array'],
            'pictures.*' => ['integer'],
        ]);

        $pictures = $data['pictures'] ?? [];
        unset($data['pictures']);

        $producer = Producer::findOrFail($id);
        $producer->update($data);
        $producer->images()->sync($pictures);

        return ['success' => 'Producer mis à jour'];
    }

    public function destroyProducer(int $id)
    {
        Producer::destroy($id);
    }
}
