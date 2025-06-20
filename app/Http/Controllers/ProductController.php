<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function createProduct(Request $request)
    {
        $data = $request->validate([
            'label' => ['required', 'string'],
            'season_start' => ['required', 'string'],
            'season_end' => ['required', 'string'],
        ]);

        Product::create($data);

        return 'success';
    }

    public function allProducts()
    {
        return Product::all();
    }

    public function getProduct(int $id)
    {
        return Product::find($id);
    }

    public function editProduct(int $id, Request $request)
    {
        $data = $request->validate([
            'label' => ['required', 'string'],
            'season_start' => ['required', 'string'],
            'season_end' => ['required', 'string'],
        ]);

        Product::findOrFail($id)->update($data);

        return ['success' => 'Product mis à jour'];
    }

    public function destroyProduct(int $id)
    {
        Product::destroy($id);
    }
}
