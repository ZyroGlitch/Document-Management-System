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

    public function documents()
    {
        $pendings = Document::where('status', 'Pending')->get();
        $approved = Document::where('status', 'Approved')->get();

        return inertia('Client/Documents', [
            'pendings' => $pendings,
            'approved' => $approved,
        ]);
    }

    public function store_document(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $isApprovedDocument = Document::where('name', $validated['name'])
            ->where('status', 'Approved')
            ->exists();

        if (!$isApprovedDocument) {
            return redirect()->back()->withErrors([
                'name' => 'Please select an approved document.',
            ]);
        }

        $data = Document::create([
            'name' => $validated['name'],
        ]);

        if (!$data) {
            return redirect()->back()->withErrors('This document failed to store.');
        }

        return redirect()->back()->with('success', 'This document was submitted to admin for approval.');
    }
}
