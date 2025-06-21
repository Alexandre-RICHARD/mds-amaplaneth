import { router } from '@inertiajs/react';
import { FormEvent, useState } from 'react';

export default function AdminLogin() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showForgot, setShowForgot] = useState(false);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        router.post('/admin/login', { password });
    }

    function handleForgot() {
        setShowForgot(!showForgot);
    }

    function handleForgotSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        router.post('/admin/forgot-password', { email });
    }

    return (
        <div className="flex h-screen flex-col items-center justify-center gap-4">
            {!showForgot ? (
                <>
                    <form
                        onSubmit={handleSubmit}
                        className="flex items-center gap-2"
                    >
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="rounded border p-2"
                            placeholder="Mot de passe"
                        />
                        <button
                            type="submit"
                            className="rounded bg-blue-600 px-4 py-2 text-white"
                        >
                            Valider
                        </button>
                    </form>
                    <button
                        type="button"
                        onClick={handleForgot}
                        className="text-sm underline"
                    >
                        Mot de passe oublié ?
                    </button>
                </>
            ) : (
                <>
                    <form
                        onSubmit={handleForgotSubmit}
                        className="flex gap-2 text-sm"
                    >
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="rounded border p-2"
                            placeholder="Email de récupération"
                        />
                        <button
                            type="submit"
                            className="rounded bg-blue-600 px-2 py-1 text-white"
                        >
                            Confirmer
                        </button>
                    </form>
                    <button
                        type="button"
                        onClick={handleForgot}
                        className="text-sm underline"
                    >
                        Je me souviens du mot de passe
                    </button>
                </>
            )}
        </div>
    );
}
