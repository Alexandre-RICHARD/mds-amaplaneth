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

    public function __construct(private string $url)
    {
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Demande de réinitialisation du mot de passe admin',
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'mail',
            with: [
                'content' => "Cliquez sur le lien suivant pour d\xC3\xA9finir le mot de passe administrateur : {$this->url}",
            ],
        );
    }

    public function attachments(): array
    {
        return [];
    }
}
