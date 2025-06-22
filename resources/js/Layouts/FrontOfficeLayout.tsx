import backgroundVector from '@images/background.svg';
import { router, usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';

type Props = {
    header?: ReactNode;
    image?: string;
    isOnlyContentDisplayed?: boolean;
};

export default function FrontOffice({
    header,
    image,
    isOnlyContentDisplayed = false,
    children,
}: PropsWithChildren<Props>) {
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
            className="min-h-screen bg-top bg-repeat-y"
            style={{
                backgroundImage: `url(${backgroundVector})`,
                backgroundSize: '100% auto',
            }}
        >
            {!isOnlyContentDisplayed && (
                <>
                    <Header />
                    <div
                        className="flex h-[200px] items-end bg-stone-900 bg-cover bg-center p-4 md:h-[340px]"
                        style={{ backgroundImage: `url(${image})` }}
                    >
                        {header}
                    </div>
                </>
            )}

            <main className="h-100 mx-auto w-full max-w-[1100px] flex-grow px-5 py-8">
                {children}
            </main>
            {!isOnlyContentDisplayed && <Footer />}
        </div>
    );
}
