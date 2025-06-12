import backgroundVector from '@images/background.svg';
import { PropsWithChildren, ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

export default function FrontOffice({
    header,
    image,
    children,
}: PropsWithChildren<{ header?: ReactNode; image?: string }>) {
    return (
        <div
            className="absolute -z-10 bg-center bg-top bg-repeat-y"
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
