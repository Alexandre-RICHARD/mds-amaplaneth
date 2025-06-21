<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    public function createImage(Request $request)
    {
        $data = $request->validate([
            'title' => ['required', 'string'],
            'alt_text' => ['required', 'string'],
            'file' => ['required', 'file', 'image'],
        ]);

        $file = $data['file'];
        unset($data['file']);

        $binary = file_get_contents($file->getRealPath());

        Image::create([
            'title' => $data['title'],
            'alt_text' => $data['alt_text'],
            'url' => 'data:' . $file->getMimeType() . ';base64,' . base64_encode($binary),
            'data' => $binary,
        ]);

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
            'file' => ['file', 'image'],
        ]);

        $image = Image::findOrFail($id);
        $image->title = $data['title'];
        $image->alt_text = $data['alt_text'];

        if ($request->file('file')) {
            $binary = file_get_contents($request->file('file')->getRealPath());
            $image->data = $binary;
            $image->url = 'data:' . $request->file('file')->getMimeType() . ';base64,' . base64_encode($binary);
        }

        $image->save();

        return ['success' => 'image mis à jour'];
    }

    public function destroyImage(int $id)
    {
        Image::destroy($id);
    }
}
