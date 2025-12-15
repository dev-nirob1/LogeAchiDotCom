import { useState } from "react";
import { FaBars, FaSearch, FaUser } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cart = useSelector((state) => state.cartSlice);

  console.log(cart);
  return (
    <header className="bg-white z-50 sticky top-0 border-b border-b-accent py-5">
      <div className="my-container">
        <nav className="flex justify-between items-center">
          <div className="text-3xl font-bold tracking-tight cursor-pointer">
            FASHION<span className="font-light">SHOP</span>
          </div>

          {/* navlinks  */}
          <ul className="hidden md:flex items-center text-base font-medium gap-3">
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
            <button>
              <FaSearch className="text-xl" />
            </button>
            <div className="p-1 relative">
              <Link to="/cart">
                <FaCartPlus className="text-2xl" />{" "}
                <span className="text-sm text-white absolute -top-3 -right-4 bg-primary rounded-full px-2 py-1">
                  {cart.cart.length > 0 ? cart.cart.length : 0}
                </span>
              </Link>
            </div>
            <Link to="/login">
              <FaUser className="text-xl" />
            </Link>
          </div>

          {/* hamburger Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars className="fa-2xl" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
