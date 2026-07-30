import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LuMenu, LuX, LuBuilding2 } from "react-icons/lu";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-8 rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-xl border border-gray-200"
            : "bg-white/75 backdrop-blur-lg border border-white/40"
        }`}
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 py-4 text-2xl font-bold"
        >
          <LuBuilding2 className="text-blue-700 text-3xl" />
          <span className="text-gray-900">Civic Reporter</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-700 hover:text-blue-700 transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex gap-3">
          <Link to="/login">
            <button className="px-5 py-2 rounded-xl border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-300">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="px-5 py-2 rounded-xl bg-blue-700 text-white hover:bg-blue-800 shadow-md hover:shadow-lg transition-all duration-300">
              Register
            </button>
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <LuX /> : <LuMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden max-w-7xl mx-auto mt-3 px-4">
          <div className="rounded-2xl bg-white shadow-xl p-6 space-y-5">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-700 hover:text-blue-700"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="block"
            >
              <button className="w-full border border-blue-700 text-blue-700 rounded-xl py-3 hover:bg-blue-700 hover:text-white transition">
                Login
              </button>
            </Link>

            <Link
              to="/register"
              onClick={() => setMenuOpen(false)}
              className="block"
            >
              <button className="w-full bg-blue-700 text-white rounded-xl py-3 hover:bg-blue-800 transition">
                Register
              </button>
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;