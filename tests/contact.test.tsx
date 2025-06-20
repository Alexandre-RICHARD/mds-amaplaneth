// tests/UserForm.test.jsx
import { Inertia } from '@inertiajs/inertia';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Contact from '../resources/js/Pages/Contact';

vi.mock('@inertiajs/inertia'); // Mock Inertia for POST requests

describe('Contact form', () => {
    it('submits form data via Inertia.post', async () => {
        const mockPost = vi.fn();
        Inertia.post = mockPost;

        render(<Contact />);

        fireEvent.change(screen.getByLabelText(/Prénom/i), {
            target: { value: 'John Doe' },
        });

        fireEvent.change(screen.getByLabelText(/Email/i), {
            target: { value: 'john@example.com' },
        });

        fireEvent.change(screen.getByLabelText(/Message/i), {
            target: { value: 'Hello' },
        });

        fireEvent.click(screen.getByRole('button', { name: /Envoyer/i }));

        expect(mockPost).toHaveBeenCalledWith('/send-mail', {
            name: 'John Doe',
            email: 'john@example.com',
            subject: 'Un curieux',
            body: 'Hello',
        });
    });
});
