import { useState } from "react";
// We define the navLinks here to ensure they point to the sections on this page.
const navLinks = [
  { id: "about", href: "#about", name: "Projects" },
  { id: "contact", href: "#contact", name: "Contact" },
];

const NavItems = ({ onClick }) => {
  return (
    <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20">
      {navLinks.map(({ id, href, name }) => (
        <li
          key={id}
          className="text-neutral-400 hover:text-white font-generalsans max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5"
        >
          <a
            href={href}
            className="text-lg md:text-base hover:text-white transition-colors"
            onClick={onClick} // Close mobile menu on link click
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto sm:px-10 px-5">
          <a
            href="/"
            className="text-neutral-500 font-bold text-xl hover:text-white transition-colors"
          >
            Deep sagar
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="toggleMenu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>
      <div
        className={`absolute left-0 right-0 bg-black-200 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
