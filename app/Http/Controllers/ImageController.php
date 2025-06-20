<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Image;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    public function createImage(Request $request)
    {
        $data = $request->validate([
            'title' => ['required', 'string'],
            'alt_text' => ['required', 'string'],
            'url' => ['required', 'string'],
        ]);

        Image::create($data);

        return 'success';
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
        $data = $request->validate([
            'title' => ['required', 'string'],
            'alt_text' => ['required', 'string'],
            'url' => ['required', 'string'],
        ]);

        Image::findOrFail($id)->update($data);

        return ['success' => 'image mis à jour'];
    }

    public function destroyImage(int $id)
    {
        Image::destroy($id);
    }
}
