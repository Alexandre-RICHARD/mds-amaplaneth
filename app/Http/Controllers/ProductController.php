<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function createProduct(Request $request)
    {
        Product::insert([
            'label' => $request->get('label'),
            'season_start' => $request->get('season_start'),
            'season_end' => $request->get('season_end'),
        ]);
        return "success";
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
        Product::find($id)
            ->update([
                'label' => $request->get('label'),
                'season_start' => $request->get('season_start'),
                'season_end' => $request->get('season_end'),
            ]);
        return ['success' => 'Product mis à jour'];
    }

    public function destroyProduct(int $id)
    {
        Product::destroy($id);
    }
}
