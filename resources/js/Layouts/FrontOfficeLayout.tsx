import backgroundVector from '@images/background.svg';
import { router, usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';

export default function FrontOffice({
    header,
    image,
    children,
}: PropsWithChildren<{ header?: ReactNode; image?: string }>) {
    const { props } = usePage<{ adminSequence: string[] }>();

    useEffect(() => {
        const sequence = props.adminSequence ?? [];
        let position = 0;

        function onKeyDown(e: KeyboardEvent) {
            if (e.key === sequence[position]) {
                position++;
                if (position === sequence.length) {
                    position = 0;
                    router.post(route('admin.keyStep'), { sequence });
                }
            } else {
                position = 0;
            }
        }

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [props.adminSequence]);
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
                className="flex h-[200px] md:h-[340px] items-end bg-stone-900 bg-cover bg-center p-4"
                style={{ backgroundImage: `url(${image})` }}
            >
                {header}
            </div>
            <main className="mx-auto w-full max-w-[1100px] flex-grow px-5 py-8">
                {children}
            </main>
            <Footer />
        </div>
    );
}
