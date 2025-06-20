import backgroundVector from '@images/background.svg';
import { PropsWithChildren, ReactNode, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';

export default function FrontOffice({
    header,
    image,
    children,
}: PropsWithChildren<{ header?: ReactNode; image?: string }>) {
    useEffect(() => {
        function onKeyDown(e: KeyboardEvent) {
            fetch(route('admin.keyStep', { key: e.key }))
                .then((r) => r.json())
                .then((data) => {
                    if (data.token) {
                        window.location.href = route('admin.login', {
                            token: data.token,
                        });
                    }
                });
        }

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, []);
    return (
        <div
            className="absolute -z-10 bg-top bg-repeat-y"
            style={{
                backgroundImage: `url(${backgroundVector})`,
                backgroundSize: '100% auto',
            }}
        >
            <Header />
            <div
                className="flex h-[340px] items-end bg-stone-900 bg-cover bg-center p-4"
                style={{ backgroundImage: `url(${image})` }}
            >
                {header}
            </div>
            <main className="mx-auto w-full max-w-[950px] flex-grow px-4 py-8">
                {children}
            </main>
            <Footer />
        </div>
    );
}
