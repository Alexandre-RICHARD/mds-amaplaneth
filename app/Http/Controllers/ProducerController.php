<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Producer;
use Illuminate\Http\Request;

class ProducerController extends Controller
{
    public function createProducer(Request $request)
    {
        Producer::insert([
            'profile_picture' => $request->get('profile_picture'),
            'first_name' => $request->get('first_name'),
            'last_name' => $request->get('last_name'),
            'address_road' => $request->get('address_road'),
            'zipcode' => $request->get('zipcode'),
            'city' => $request->get('city'),
            'description' => $request->get('description')
        ]);
        return "success";
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
        Producer::find($id)
            ->update([
                'profile_picture' => $request->get('profile_picture'),
                'first_name' => $request->get('first_name'),
                'last_name' => $request->get('last_name'),
                'address_road' => $request->get('address_road'),
                'zipcode' => $request->get('zipcode'),
                'city' => $request->get('city'),
                'description' => $request->get('description')
            ]);
        return ['success' => 'Producer mis à jour'];
    }

    public function destroyProducer(int $id)
    {
        Producer::destroy($id);
    }
}
