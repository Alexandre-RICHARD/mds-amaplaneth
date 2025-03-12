import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import { Link } from '@inertiajs/react';
import { PropsWithChildren, ReactNode } from 'react';

export default function FrontOffice({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    return (
        <div>
            <header className="sticky top-0 flex justify-between rounded-b-xl bg-white p-5 uppercase">
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
            <div className="flex h-[340px] items-end bg-stone-900 p-4">
                {header}
            </div>
            <main>{children}</main>
            <footer className="mt-24 flex justify-between rounded-t-xl bg-neutral-400 p-5 font-bold">
                <div className="flex w-[33%] items-center justify-between">
                    <Link href="/">
                        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                    </Link>
                    <div>
                        <address>
                            bis, 32 Rue de la Brisepotière, 49100 Angers
                        </address>
                        <Link href="mailto:amaplaneth@riseup.net">
                            amaplaneth@riseup.net
                        </Link>
                        <br />
                        <Link href="tel:0123456789">01 23 45 67 89</Link>
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
