<?php

namespace App\Http\Controllers;

use App\Models\Producer;
use App\Models\Image;
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
            'pictures.*' => ['file', 'image'],
        ]);

        $files = $request->file('pictures', []);
        unset($data['pictures']);

        $producer = Producer::create($data);

        $ids = [];
        foreach ($files as $file) {
            $binary = file_get_contents($file->getRealPath());
            $image = Image::create([
                'title' => $file->getClientOriginalName(),
                'alt_text' => $file->getClientOriginalName(),
                'url' => 'data:' . $file->getMimeType() . ';base64,' . base64_encode($binary),
                'data' => $binary,
            ]);
            $ids[] = $image->id;
        }

        if (!empty($ids)) {
            $producer->images()->attach($ids);
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
            'pictures.*' => ['file', 'image'],
        ]);

        $files = $request->file('pictures', []);
        unset($data['pictures']);

        $producer = Producer::findOrFail($id);
        $producer->update($data);

        $ids = [];
        foreach ($files as $file) {
            $binary = file_get_contents($file->getRealPath());
            $image = Image::create([
                'title' => $file->getClientOriginalName(),
                'alt_text' => $file->getClientOriginalName(),
                'url' => 'data:' . $file->getMimeType() . ';base64,' . base64_encode($binary),
                'data' => $binary,
            ]);
            $ids[] = $image->id;
        }

        if (!empty($ids)) {
            $producer->images()->syncWithoutDetaching($ids);
        }

        return ['success' => 'Producer mis à jour'];
    }

    public function destroyProducer(int $id)
    {
        Producer::destroy($id);
    }
}
