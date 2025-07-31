import { useState } from "react";
import { navLinks } from "../constants";

const NavItems = () => {
    return (
        <ul className="nav-ul">
            {navLinks.map(({id, href, name}) => (
                <li key={id} className="nav-li">
                    <a href={href} className="nav-li_a">
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 navbar-pattern p-0">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-1.5 mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors z-100">
                        WLD
                    </a>
                    <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex z-100" aria-label="Toggle Menu">
                        <img src={isOpen ? "assets/x-solid.svg" : "assets/bars-solid.svg"} alt="toggle" className="w-6 h-6" />
                    </button>

                    <nav className="sm:flex hidden" >
                        <NavItems />
                    </nav>
                </div>
            </div>
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-screen bg-[#121212] z-50 flex flex-col items-center justify-center">
                    <nav>
                        <ul className="flex flex-col gap-8 items-center text-2xl">
                            {navLinks.map(({id, href, name}) => (
                                <li key={id}>
                                    <a href={href} className="text-neutral-200 hover:text-blue-400 transition-colors">
                                        {name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    )
}

export default Navbar;