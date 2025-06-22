import FrontOfficeLayout from '@/Layouts/FrontOfficeLayout';

export default function PasswordChanged() {
    return (
        <FrontOfficeLayout>
            <div className="flex h-screen flex-col items-center justify-center gap-4 p-4 text-center">
                <h1 className="text-2xl font-bold">Mot de passe mis à jour</h1>
                <p>Vous pouvez maintenant fermer cet onglet et retourner vous connecter sur l'espace administrateur.</p>
            </div>
        </FrontOfficeLayout>
    );
}
