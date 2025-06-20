import { router } from '@inertiajs/react';
import { FormEvent, useState } from 'react';

export default function AdminLogin({ token }: { token: string }) {
    const [password, setPassword] = useState('');

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        router.post('/admin/login', { password, token });
    }

    return (
        <div className="flex h-screen items-center justify-center">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="rounded border p-2"
                />
                <button
                    type="submit"
                    className="rounded bg-blue-600 px-4 py-2 text-white"
                >
                    Valider
                </button>
            </form>
        </div>
    );
}
