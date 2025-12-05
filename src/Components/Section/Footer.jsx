import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" text-white bg-neutral-900">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 py-10 px-2">
          <div>
            <Link to="/">
              <h2 className="text-4xl font-bold italic">লগেআছি.COM</h2>
              {/* <img
              className="max-h-12"
              src="https://scionassetbd.com/uploads/brands/logo.png"
              alt=""
            /> */}
            </Link>
            <p className="my-6">
              Your trusted online destination for quality fashion. Affordable
              prices, premium products, and fast delivery—everything in one
              place.
            </p>
          </div>

          {/* customer link  */}
          <div className="mb-6">
            <h5 className="sub-title mb-6">Customer Links</h5>
            <ul className="space-y-3">
              <li>
                <Link to="/login">My Account</Link>
              </li>
              <li>
                <Link to="/orders">Order History</Link>
              </li>
              <li>
                <Link to="/cart">My Cart</Link>
              </li>
              <li>
                <Link to="/checkout">Checkout</Link>
              </li>
            </ul>
          </div>

          {/* useful links */}
          <div>
            <h5 className="sub-title mb-6">Useful Links</h5>
            <ul className="space-y-3">
              <li>
                <Link to="/products">All Products</Link>
              </li>
              <li>
                <Link to="/category/tshirt">Shop by Category</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/offers">Latest Discount</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter  */}
          <div className="my-6">
            <h5 className="sub-title mb-6">Newsletter Signup</h5>
            <p className="pb-4 text-lg">
              Register now to get updates on promotions.
            </p>
            <div className="flex">
              <input
                className="bg-white max-w-10/12 rounded-l"
                placeholder="Enter your Email"
              />
              <button className="text-white bg-blue-500 px-4 rounded-r cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* foooter bottom part  */}
        <div className="border-t py-6 text-center">
          <p>
            &copy; copyright 2025. Developed by{" "}
            <a
              className="text-amber-400"
              href="https://webpoka.com/"
              target="_blank"
            >
              Webpoka
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
