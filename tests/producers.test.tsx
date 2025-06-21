import { render, fireEvent, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Producers from '../resources/js/Pages/Producers';

vi.mock('@inertiajs/react', () => ({
    usePage: () => ({ props: { isAdmin: true } }),
}));

// @ts-ignore
(global as any).window.axios = {
    get: vi.fn().mockResolvedValue({ data: [
        {
            id: 1,
            profile_picture: 1,
            first_name: 'John',
            last_name: 'Doe',
            address_road: '1 rue test',
            zipcode: 11111,
            city: 'Test',
            description: 'desc',
        },
    ] }),
    delete: vi.fn().mockResolvedValue({}),
    post: vi.fn().mockResolvedValue({}),
    put: vi.fn().mockResolvedValue({}),
};

describe('Delete producer confirmation', () => {
    it('shows a confirmation modal before deletion', async () => {
        render(<Producers />);
        await screen.findByText('John Doe');
        fireEvent.click(screen.getAllByRole('button', { name: /Supprimer/i })[0]);
        expect(
            screen.getByText(
                /Êtes-vous sûr de vouloir supprimer ce producteur\s*\?/i,
            ),
        ).toBeInTheDocument();
    });
});
