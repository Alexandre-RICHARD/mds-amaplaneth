import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import { Link } from '@inertiajs/react';
import { PropsWithChildren, ReactNode } from 'react';

export default function FrontOffice({
    header,
    image,
    children,
}: PropsWithChildren<{ header?: ReactNode; image?: string }>) {
    return (
        <div>
            <header className="sticky top-0 z-20 flex justify-between rounded-b-xl bg-white p-5 uppercase">
                <Link href="/">
                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                </Link>
                <nav className="flex w-[50%] justify-around">
                    <NavLink
                        href={route('dashboard')}
                        active={route().current('contract')}
                    >
                        Nos Contrats
                    </NavLink>
                    <NavLink
                        href={route('dashboard')}
                        active={route().current('farmers')}
                    >
                        Nos Producteurs
                    </NavLink>
                    <NavLink
                        href={route('dashboard')}
                        active={route().current('calendar')}
                    >
                        Calendrier des saisons
                    </NavLink>
                    <NavLink
                        href={route('dashboard')}
                        active={route().current('contact')}
                    >
                        Contact
                    </NavLink>
                </nav>
            </header>
            <div
                className="flex h-[340px] items-end bg-stone-900 bg-cover bg-center p-4"
                style={{ backgroundImage: `url(${image})` }}
            >
                {header}
            </div>
            <main>{children}</main>
            <footer className="mt-24 flex justify-between rounded-t-xl bg-neutral-400 p-5 font-bold">
                <div className="grid w-[33%] grid-cols-[1fr_2fr] items-center">
                    <Link href="/" className="flex justify-center">
                        <ApplicationLogo className="block h-auto w-[80%] fill-current text-gray-800 dark:text-gray-200" />
                    </Link>
                    <div>
                        <address>
                            Rue du Chanoine Jean Brac, 49100 Angers
                        </address>
                        <a href="mailto:amaplaneth@riseup.net">
                            amaplaneth@riseup.net
                        </a>
                        <br />
                        <a href="tel:0123456789">01 23 45 67 89</a>
                    </div>
                </div>
                <nav className="flex flex-col items-end">
                    <Link href={route('dashboard')}>Nos Contrats</Link>
                    <Link href={route('dashboard')}>Nos Producteurs</Link>
                    <Link href={route('dashboard')}>
                        Calendrier des saisons
                    </Link>
                    <Link href={route('dashboard')}>Contact</Link>
                    <hr className="my-2 w-[50%] bg-red-800" />
                    <Link href={route('dashboard')}>Mentions Légales</Link>
                    <Link href={route('dashboard')}>Confidentialité</Link>
                </nav>
            </footer>
        </div>
    );
}
