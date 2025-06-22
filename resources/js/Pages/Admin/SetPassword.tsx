import { useToast } from '@/Components/ToastProvider';
import { router } from '@inertiajs/react';
import { FormEvent, useState } from 'react';

export default function SetPassword({ token }: { token: string }) {
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const { addToast } = useToast();

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        router.post(
            '/admin/set-password',
            { password, password_confirmation: confirm, token },
            {
                onSuccess: () => {
                    addToast({
                        title: 'Mot de passe changé',
                        variant: 'success',
                    });
                    router.visit('/admin/password-changed');
                },
            },
        );
    }

    return (
        <div className="flex h-screen flex-col items-center justify-center gap-4">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center gap-2"
            >
                <div className="relative">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="rounded border p-2 pr-6"
                        placeholder="Nouveau mot de passe"
                    />
                    <button
                        type="button"
                        className="absolute right-1 top-1/2 -translate-y-1/2"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? '🙈' : '👁'}
                    </button>
                </div>
                <div className="relative">
                    <input
                        type={showConfirm ? 'text' : 'password'}
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                        className="rounded border p-2 pr-6"
                        placeholder="Confirmer le mot de passe"
                    />
                    <button
                        type="button"
                        className="absolute right-1 top-1/2 -translate-y-1/2"
                        onClick={() => setShowConfirm(!showConfirm)}
                    >
                        {showConfirm ? '🙈' : '👁'}
                    </button>
                </div>
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
