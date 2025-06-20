import { router } from '@inertiajs/react';
import { FormEvent, useState } from 'react';

export default function AdminLogin({ token }: { token: string }) {
    const [password, setPassword] = useState('');

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        router.post('/admin/login', { password, token });
    }

    function handleForgot() {
        router.post('/admin/forgot-password');
    }

    return (
        <div className="flex h-screen items-center justify-center flex-col gap-4">
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
            <button type="button" onClick={handleForgot} className="text-sm underline">
                Mot de passe oubli\u00E9 ?
            </button>
        </div>
    );
}
