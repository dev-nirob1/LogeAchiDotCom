import { FaCartArrowDown, FaHeadset, FaUser, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        {/* top navbar  */}
        <div className="top-bar py-2 flex justify-between border-b border-gray-200">
          {/* icon with phone number  */}
          <div className="flex items-center gap-3">
            <span>
              <FaHeadset className="text-lg" />
            </span>{" "}
            <span>24/7</span>
            <span>+8801234567890</span>
          </div>

          {/* cart, profile icons  */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
                <FaCartArrowDown /> Cart
            </div>
            <div className="flex items-center gap-2">
                <FaUser /> My Account
            </div>
            
          </div>
        </div>

        {/* bottom navbar  */}

        <div className="py-4 flex justify-between items-center">
          {/* logo  */}
          <Link to="/">
            <img
              className="max-h-12"
              src="https://scionassetbd.com/uploads/brands/logo.png"
              alt=""
            />
          </Link>

          {/* search bar  */}

          {/* nav links  */}
          <nav>
            <ul className="font-medium flex items-center gap-3">
              <li>
                <Link className="px-5 py-2 hover:bg-blue-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link className="px-5 py-2 hover:bg-blue-400 hover:text-white transition">
                  Products
                </Link>
              </li>
              <li>
                <Link className="px-5 py-2 hover:bg-blue-400 hover:text-white transition">
                  About us
                </Link>
              </li>
              <li>
                <Link className="px-5 py-2 hover:bg-blue-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
              <div>
                <input
                  className="border border-gray-300 rounded-lg"
                  type="search"
                  placeholder="Search Product"
                />
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
