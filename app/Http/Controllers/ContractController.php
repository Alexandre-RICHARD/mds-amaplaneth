<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Contract;
use Illuminate\Http\Request;

class ContractController extends Controller
{

    public function createContract(Request $request)
    {
        Contract::insert([
            'title' => $request->get('title'),
            'description' => $request->get('descritpion'),
            'price' => $request->get('price'),
            'quantity' => $request->get('quantity')
        ]);
        return "<p>Hello</p>";
    }

    public function allContracts()
    {
        return Contract::all();
    }

    public function getContract(int $id)
    {
        return Contract::find($id);
    }

    public function editContract(int $id, Request $request)
    {
        Contract::find($id)
            ->update([
                'title' => $request->get('title'),
                'description' => $request->get('descritpion'),
                'price' => $request->get('price'),
                'quantity' => $request->get('quantity')
            ]);
        return ['success' => 'contrat mis à jour'];
    }

    public function destroyContract(int $id)
    {
        Contract::destroy($id);
    }
}
