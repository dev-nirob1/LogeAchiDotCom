import { useState } from "react";
import { FaCartShopping, FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "My Account", href: "/login" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-b-accent shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Left: Logo */}
        <div className="text-2xl font-bold tracking-tight cursor-pointer">
          FASHION<span className="font-light">SHOP</span>
        </div>

        {/* Center: Navlinks (one block — hidden on small screens) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link to={link.href}
              key={link.name}
              className="hover:text-gray-600 transition cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right side icons + search */}
        <div className="flex items-center gap-6">

          {/* Search Desktop */}
          <div className="hidden md:block relative">
            <input
              type="text"
              placeholder="Search products..."
              className="border rounded-full py-2 pl-4 pr-10 text-sm w-48
                         focus:outline-none focus:ring-1 focus:ring-black"
            />
            <span className="absolute right-3 top-3 text-gray-600 text-sm"><FaMagnifyingGlass/></span>
          </div>

          {/* Cart Icon */}
          <Link to="/cart" className="text-xl p-3 relative">
            <FaCartShopping/>
            <span className="absolute -top-1 right-0 bg-black text-white text-xs rounded-full px-1.5">
              2
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white px-6 py-4 space-y-4">

          {/* Mobile Search - always visible */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border rounded-full py-2 pl-4 pr-10 text-sm
                         focus:outline-none focus:ring-1 focus:ring-black"
            />
            <span className="absolute right-3 top-2.5 text-gray-600 text-sm">🔍</span>
          </div>

          {/* Navlinks (same block — reused) */}
          <nav className="space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-1 border-b text-sm font-medium hover:text-gray-600 transition"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
