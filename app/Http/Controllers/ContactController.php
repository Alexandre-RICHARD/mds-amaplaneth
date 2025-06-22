<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function sendMail(Request $request)
    {
        $data = $request->validate([
            'name' => ['required'],
            'email' => ['required', 'email'],
            'subject' => ['required'],
            'body' => ['required'],
            'phone' => ['nullable'],
        ]);

        $recipient = env('ADMIN_CONTACT_MAIL');

        if ($recipient) {
            Mail::to($recipient)->send(new ContactMail((object) $data));
        }

        return back();
    }
}
