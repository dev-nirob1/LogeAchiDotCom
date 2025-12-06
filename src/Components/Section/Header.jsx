import { useState } from "react";
import { FaBars, FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburger = ()=> {
    setIsOpen(!isOpen)
    // console.log(isOpen);
    // console.log('btn clciked');
  }

  return (
    <header className="shadow font-medium relative">
      <div className="my-container">
        <nav className="py-4 flex justify-between items-center">
          {/* logo  */}
          <Link to="/">
            <img
              className="max-h-16"
              src="https://softstitch.netlify.app/logo.png"
              alt=""
            />
          </Link>

          {/* hamburger menu for mobile  */}
          <div onClick={handleHamburger} className="hamburger md:hidden text-4xl">
            <FaBars />
          </div>

          {/* nav links  */}
          <ul className={`bg-primary md:bg-transparent text-white md:text-black absolute md:static md:flex-row z-50 left-0 top-0 flex-col space-y-3 md:space-y-0 h-screen md:h-auto py-8 md:py-0 w-[50vw] md:w-auto items-center md:gap-4 ${isOpen ? 'block' : 'hidden'} md:flex`}>
            <li>
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="nav-links">
                Products
              </Link>
            </li>
            <li className="relative">
              <Link to="/cart" className="flex items-center nav-links">
                <IoCartOutline className="text-xl" />
                Cart
              </Link>
              <div className="absolute top-0 right-0">0</div>
            </li>
            {/* dropdown menu  */}
            <li>
              <Link to="/login" className="flex gap-1 items-center nav-links">
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
