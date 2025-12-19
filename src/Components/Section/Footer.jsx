import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-accent text-sm bg-neutral-900">
      <div className="my-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 py-10">
          <div>
            <Link to="/">
              <img
                className="w-auto max-h-16"
                src="https://softstitch.netlify.app/footer-logo.png"
                alt=""
              />
            </Link>

            <p className="my-6">
              Your trusted online destination for quality fashion. Affordable
              prices, premium products, and fast delivery—everything in one
              place.
            </p>
          </div>

          {/* customer link  */}
          <div className="mb-6">
            <h5 className="sub-title mb-6 text-accent">Customer Links</h5>
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
            <h5 className="sub-title mb-6 text-accent">Useful Links</h5>
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
          <div className="mb-6">
            <h5 className="sub-title mb-6 text-accent">Newsletter Signup</h5>
            <p className="pb-4 text-lg">
              Register now to get updates on promotions.
            </p>
            <div className="flex flex-wrap">
              <input
                className="bg-white border border-accent max-w-7/12 rounded-l"
                placeholder="Enter your Email"
              />
              <button className="border border-accent px-3 rounded-l-none rounded-r cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* foooter bottom part  */}
        <div className="border-t border-t-accent text-center">
          <p className="py-3">
            &copy; copyright 2025. Developed by{" "}
            <a
              className="text-yellow-400"
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
