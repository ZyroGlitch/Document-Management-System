<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Document;
use Illuminate\Http\Request;

class DocumentController extends Controller
{
    public function dashboard()
    {

    }

    public function store_document(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $data = Document::create([
            'name' => $validated['name'],
        ]);

        if (!$data) {
            return redirect()->back()->withErrors('This document failed to store.');
        }

        return redirect()->back()->with('success', 'This document was submitted to admin for approval.');
    }
}
