import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function Header() {
    const { props } = usePage<{ isAdmin: boolean }>();
    const isAdmin = props.isAdmin;
    const [isMenuBurgerOpen, setIsMenuBurgerOpen] = useState(false);

    function toggleMenuBurger() {
        setIsMenuBurgerOpen(!isMenuBurgerOpen);
    }
    return (
        <div>
            <header className="sticky top-0 z-20 flex justify-between rounded-b-xl bg-white p-5 uppercase">
                <Link href="/">
                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                </Link>
                {isAdmin && (
                    <span className="ml-4 rounded bg-red-600 px-2 py-1 text-xs font-bold text-white">
                        ADMIN MODE
                    </span>
                )}
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                    onClick={toggleMenuBurger}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <nav
                    id="navbar-default"
                    className="flex justify-around max-sm:hidden"
                >
                    <NavLink
                        href={route('contract')}
                        active={route().current('contract')}
                    >
                        Nos Contrats
                    </NavLink>
                    <NavLink
                        href={route('home')}
                        active={route().current('farmers')}
                    >
                        Nos Producteurs
                    </NavLink>
                    <NavLink
                        href={route('home')}
                        active={route().current('calendar')}
                    >
                        Calendrier des saisons
                    </NavLink>
                    <NavLink
                        href={route('contact')}
                        active={route().current('contact')}
                    >
                        Contact
                    </NavLink>
                </nav>
            </header>

            <nav
                id="mobilemenu"
                className="flex flex-col"
                style={{ display: isMenuBurgerOpen ? 'block' : 'none' }}
            >
                <NavLink
                    href={route('home')}
                    active={route().current('contract')}
                >
                    Nos Contrats
                </NavLink>
                <NavLink
                    href={route('home')}
                    active={route().current('farmers')}
                >
                    Nos Producteurs
                </NavLink>
                <NavLink
                    href={route('home')}
                    active={route().current('calendar')}
                >
                    Calendrier des saisons
                </NavLink>
                <NavLink
                    href={route('contact')}
                    active={route().current('contact')}
                >
                    Contact
                </NavLink>
            </nav>
        </div>
    );
}
