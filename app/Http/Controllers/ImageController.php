<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Image;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    public function createImage(Request $request)
    {
        Image::insert([
            'title' => $request->get('title'),
            'alt_text' => $request->get('alt_text'),
            'url' => $request->get('url'),
        ]);
        return "success";
    }

    public function allImages()
    {
        return Image::all();
    }

    public function getImage(int $id)
    {
        return Image::find($id);
    }

    public function editImage(int $id, Request $request)
    {
        Image::find($id)
            ->update([
                'title' => $request->get('title'),
                'alt_text' => $request->get('alt_text'),
                'url' => $request->get('url'),
            ]);
        return ['success' => 'image mis à jour'];
    }

    public function destroyImage(int $id)
    {
        Image::destroy($id);
    }
}
