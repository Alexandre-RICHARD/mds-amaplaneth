<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Queue\SerializesModels;

class AdminForgotPasswordMail extends Mailable
{
    use Queueable, SerializesModels;

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Demande de r\xC3\xA9initialisation du mot de passe admin',
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'mail',
            with: [
                'content' => 'Une demande de r\xC3\xA9initialisation du mot de passe administrateur a \xC3\xA9t\xC3\xA9 effectu\xC3\xA9e.',
            ],
        );
    }

    public function attachments(): array
    {
        return [];
    }
}
