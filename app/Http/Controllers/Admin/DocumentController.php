<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Document;
use Illuminate\Http\Request;

class DocumentController extends Controller
{
    public function list_document_approval()
    {
        $data = Document::all();
        return inertia('Admin/Dashboard', compact('data'));
    }

    public function document_approve(int $id)
    {
        $document = Document::findOrFail($id);
        $document->status = 'Approved';
        $document->save();

        return redirect()->back()->with('success', 'Document approved successfully.');
    }
}
