import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Producers from '../resources/js/Pages/Producers';

vi.mock('@inertiajs/react', () => ({
    usePage: () => ({ props: { isAdmin: true, adminSequence: [] } }),
    router: { post: vi.fn() },
    Link: (props) => <a {...props}>{props.children}</a>,
}));

global.fetch = vi.fn().mockResolvedValue({
    json: () =>
        Promise.resolve([
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
        ]),
});

describe('Delete producer confirmation', () => {
    it('shows a confirmation modal before deletion', async () => {
        render(<Producers />);
        await screen.findByText('John Doe');
        fireEvent.click(
            screen.getAllByRole('button', { name: /Supprimer/i })[0],
        );
        expect(
            screen.getByText(
                /Êtes-vous sûr de vouloir supprimer ce producteur\s*\?/i,
            ),
        ).toBeDefined();
    });
});
