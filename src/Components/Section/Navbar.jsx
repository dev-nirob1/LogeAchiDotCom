import axios from "axios";
import { useEffect, useState } from "react";
import { FaBars, FaSearch, FaUser } from "react-icons/fa";
import { FaCartPlus, FaXmark } from "react-icons/fa6";
import { Link, Navigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const fetchSearch = async () => {
      const res = await axios.get(
        `https://dummyjson.com/products/search?q=${search}`
      );
      if (!search || search.length < 2) {
        setSearchData([]);
        return;
      } else {
        setSearchData(res.data.products);
      }
    };
    fetchSearch();
  }, [search]);
  const suggetion = searchData.slice(0, 5);
  // console.log(search, searchData);

  return (
    <>
      {/* NAVBAR */}
      <header className="bg-white sticky top-0 left-0 w-full z-50 border-b border-b-accent">
        <div className="my-container py-5 relative">
          <nav className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="text-3xl font-bold tracking-tight">
              FASHION
            </Link>

            {/* Nav Links */}
            {/* <ul className={`hidden md:flex items-center text-base font-medium md:gap-6 `}> */}
            <ul
              className={`fixed md:static top-0 flex flex-col md:flex-row bg-primary md:bg-white w-[70vw] md:w-auto h-screen md:h-fit text-white md:text-primary py-5 px-3 md:p-0 transition-all duration-300 font-medium ${
                isMenuOpen ? "left-0" : "-left-full"
              }`}
            >
              <li className="nav-links">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-links">
                <Link to="/products">Products</Link>
              </li>
              <li className="nav-links">
                <Link to="/flash-sale">Flash Sale</Link>
              </li>
              <li className="nav-links">
                <Link to="/login" className="block md:hidden">
                  Profile
                </Link>
              </li>
            </ul>

            {/* Icons */}
            <div className="flex items-center gap-4 md:gap-6">
              <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
                <FaSearch className="text-xl" />
              </button>

              <Link to="/cart" className="relative">
                <FaCartPlus className="text-2xl" />
                <span className="absolute -top-3 -right-4 bg-primary text-white text-xs rounded-full px-2 py-1">
                  0
                </span>
              </Link>

              <Link to="/login" className="hidden md:block">
                <FaUser className="text-xl" />
              </Link>
              {/* Hamburger */}
              <button
                className="md:hidden text-2xl"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <FaXmark className="text-xl" />
                ) : (
                  <FaBars className="text-xl" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* searchbar toggle */}
      <div
        className={`fixed left-0 w-full bg-white border-b z-40 transition-all ease-in-out duration-300 ${
          isSearchOpen ? "top-20 opacity-100" : "-top-32 opacity-0"
        }`}
      >
        <div className="my-container py-2">
          <div className="flex items-center gap-3 p-3 relative">
            <input
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              type="text"
              placeholder="Search products, categories..."
              className="border border-accent rounded-md w-full lg:max-w-xl mx-auto outline-none"
            />
            {searchData.length > 0 && (
              <ul className="absolute top-full inset-x-0 md:max-w-xl mx-auto bg-white space-y-2 p-4">
                {suggetion.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={`/product/${item.id}`}
                      onClick={() => setSearchData([])}
                      className="bg-accent p-2 flex items-center rounded"
                    >
                      <img className="w-7 h-7" src={item.thumbnail} alt="" />{" "}
                      {item.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <button className="bg-primary p-2 text-white w-full">
                    Show All result
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
