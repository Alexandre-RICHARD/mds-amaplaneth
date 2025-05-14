// tests/UserForm.test.jsx
import { Inertia } from '@inertiajs/inertia';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Contact from '../resources/js/Pages/Contact';

vi.mock('@inertiajs/inertia'); // Mock Inertia for POST requests

describe('UserForm', () => {
    it('submits form data via Inertia.post', async () => {
        const mockPost = vi.fn();
        Inertia.post = mockPost;

        render(<Contact />);

        fireEvent.change(screen.getByRole('textbox', { name: /name/i }), {
            target: { value: 'John Doe' },
        });

        fireEvent.change(screen.getByRole('textbox', { name: /email/i }), {
            target: { value: 'john@example.com' },
        });

        fireEvent.click(screen.getByRole('button', { name: /submit/i }));

        expect(mockPost).toHaveBeenCalledWith('/users', {
            name: 'John Doe',
            email: 'john@example.com',
        });
    });
});
