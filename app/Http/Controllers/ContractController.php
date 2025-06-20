<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Contract;
use Illuminate\Http\Request;

class ContractController extends Controller
{

    public function createContract(Request $request)
    {
        $data = $request->validate([
            'title' => ['required', 'string'],
            'description' => ['required', 'string'],
            'price' => ['required', 'numeric'],
            'quantity' => ['required', 'integer'],
        ]);

        Contract::create($data);

        return ['success' => 'contrat créé'];
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
        $data = $request->validate([
            'title' => ['required', 'string'],
            'description' => ['required', 'string'],
            'price' => ['required', 'numeric'],
            'quantity' => ['required', 'integer'],
        ]);

        Contract::findOrFail($id)->update($data);

        return ['success' => 'contrat mis à jour'];
    }

    public function destroyContract(int $id)
    {
        Contract::destroy($id);
    }
}
