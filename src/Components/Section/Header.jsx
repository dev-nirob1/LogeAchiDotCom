import { useState } from "react";
import {
  FaBars,
  FaCartArrowDown,
  FaHeadset,
  FaRegUser,
  FaUser,
  FaUserAlt,
} from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow">
      <div className="container mx-auto">
        {/* bottom navbar  */}

        <nav className="py-4 flex justify-between items-center">
          {/* logo  */}
          <Link to="/">
            <h2 className="text-4xl font-bold italic">লগেআছি.COM</h2>
            {/* <img
              className="max-h-12"
              src="https://scionassetbd.com/uploads/brands/logo.png"
              alt=""
            /> */}
          </Link>
          {/* hamburger menu for mobile  */}
          <div className="hamburger md:hidden">
            <FaBars />
          </div>
          {/* nav links  */}
          <ul className="font-medium hidden md:flex items-center gap-3">
            <li>
              <Link
                to="/"
                className="px-5 py-2 hover:text-amber-600 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="px-5 py-2 hover:text-amber-600 transition"
              >
                Products
              </Link>
            </li>
            <li className="relative">
              <Link
                to="/cart"
                className="flex items-center px-5 py-2 hover:text-amber-600 transition"
              >
                <IoCartOutline className="text-xl" />
                Cart
              </Link>
              <div className="absolute top-0 right-1">0</div>
            </li>
            {/* dropdown menu  */}
            <li>
              <Link className="flex gap-1 items-center px-5 py-2 hover:text-amber-600 transition">
                <FaRegUser />
                My Account
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
