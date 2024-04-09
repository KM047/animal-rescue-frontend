import { Container, Logo } from "../../index";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import LogoutBtn from "./LogoutBtn";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const authStatus = useSelector((state) => state.orgAuth.status);
    const navItems = [
        {
            name: "Home",
            slug: "/org",
            active: true,
        },
        {
            name: "Saved Animals",
            slug: "/org/rescued-animals",
            active: authStatus,
        },
        {
            name: "Signup",
            slug: "/org/signup",
            active: !authStatus,
        },
        {
            name: "Login",
            slug: "/org/login",
            active: !authStatus,
        },
        {
            name: "Add Rescuer",
            slug: "/org/add-rescuer",
            active: authStatus,
        },
        {
            name: "Organization Profile",
            slug: "/org/profile",
            active: authStatus,
        },
    ];

    return (
        <header className="py-2 text-white">
            <Container>
                <nav className="flex items-center justify-between relative">
                    <div className="mr-4">
                        <Link to="/org">
                            <Logo width="70px" />
                        </Link>
                    </div>

                    {/* Hamburger icon for small screens */}
                    <div className="sm:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white focus:outline-none"
                        >
                            {isMenuOpen ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    ></path>
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Menu for small screens */}
                    <ul
                        className={`flex flex-col sm:flex-row ml-auto ${
                            isMenuOpen
                                ? "absolute inset-x-6 top-0 origin-top-right transform p-2 transition bg-[#131516] border border-gray-500 rounded-md z-50"
                                : "hidden"
                        } sm:flex`}
                    >
                        {navItems.map(
                            (item) =>
                                item.active && (
                                    <li key={item.name}>
                                        <NavLink
                                            to={item.slug}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={({ isActive }) =>
                                                `block px-6 py-2 duration-200 text-[#a49d91] hover:text-white text-lg font-semibold ${
                                                    isActive && "text-cyan-300"
                                                }`
                                            }
                                        >
                                            {item.name}
                                        </NavLink>
                                    </li>
                                )
                        )}

                        {authStatus && (
                            <li className="text-lg font-semibold">
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

export default Header;
