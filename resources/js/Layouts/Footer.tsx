import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <div>
            <footer className="mt-24 w-full rounded-t-xl bg-[#446D49] p-5 font-bold text-white md:flex md:justify-between">
                <div className="grid w-full grid-cols-[1fr_2fr] items-center md:w-1/3 md:mb-0 mb-4">
                    <Link href="/" className="flex justify-center">
                        <ApplicationLogo className="block h-auto w-[80%] fill-current text-gray-800 dark:text-gray-200" />
                    </Link>
                    <div>
                        <address>
                            Rue du Chanoine Jean Brac, 49100 Angers
                        </address>
                        <a
                            className="hover:underline"
                            href="mailto:amaplaneth@riseup.net"
                        >
                            amaplaneth@riseup.net
                        </a>
                        <br />
                        <a className="hover:underline" href="tel:0123456789">
                            01 23 45 67 89
                        </a>
                    </div>
                </div>
                <nav className="flex flex-col max-md:mt-8 md:items-end">
                    <Link className="hover:underline" href={route('home')}>
                        Nos Contrats
                    </Link>
                    <Link className="hover:underline" href={route('home')}>
                        Nos Producteurs
                    </Link>
                    <Link className="hover:underline" href={route('home')}>
                        Calendrier des saisons
                    </Link>
                    <Link className="hover:underline" href={route('contact')}>
                        Contact
                    </Link>
                    <hr className="my-2 w-[50%] bg-red-800" />
                    <Link className="hover:underline" href={route('legal')}>
                        Mentions Légales
                    </Link>
                    <Link className="hover:underline" href={route('home')}>
                        Confidentialité
                    </Link>
                </nav>
            </footer>
        </div>
    );
}
