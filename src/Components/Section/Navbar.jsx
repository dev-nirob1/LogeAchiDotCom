import { useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 border-b border-b-accent py-5">
      <div className="my-container">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight cursor-pointer">
            FASHION<span className="font-light">SHOP</span>
          </div>

          {/* navlinks  */}
          <ul className="flex items-center text-base font-medium gap-3">
            <li className="nav-links">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-links">
              <Link to="/products">Products</Link>
            </li>
            <li className="nav-links">
              <Link to="/flash-sale">Flash Sale</Link>
            </li>
          </ul>

          {/* searchbar cart and profile  */}

          <div className="flex items-center gap-6 fa-2xl font-medium">
            <button className="">
              <FaSearch className="text-xl" />
            </button>
            <div className="relative">
              <Link to="/cart">
                <FaCartPlus className="text-2xl" />{" "}
                <span className="text-sm text-white absolute -top-3 -right-4 bg-primary rounded-full px-2 py-1">
                  0
                </span>
              </Link>
            </div>
            <Link to="/flash-sale">
              <FaUser className="text-xl" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
