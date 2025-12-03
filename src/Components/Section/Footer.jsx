import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" text-white bg-neutral-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 py-10">
          <div>
            <Link to="/">
              <img
                src="https://scionassetbd.com/uploads/brands/logo-2.png"
                alt=""
              />
            </Link>
            <p className="mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, vitae.
            </p>
          </div>

          <div>
            <h5 className="sub-title mb-6">Quick Links</h5>
            <ul className="space-y-3">
              <li>
                <Link to="/">My Account </Link>
              </li>
              <li>
                <Link to="/">Order History</Link>
              </li>
              <li>
                <Link to="/">Stores </Link>
              </li>
              <li>
                <Link to="/">Discount </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="sub-title mb-6">Quick Links</h5>
            <ul className="space-y-3">
              <li>
                <Link to="/">My Account </Link>
              </li>
              <li>
                <Link to="/">Order History</Link>
              </li>
              <li>
                <Link to="/">Stores </Link>
              </li>
              <li>
                <Link to="/">Discount </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="sub-title mb-6">Newsletter Signup</h5>
            <p className="pb-4 text-lg">
              Register now to get updates on promotions.
            </p>
            <div className="flex">
              <input className="bg-white" placeholder="Enter your Email" />
              <button className="text-white bg-blue-500 px-5 cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* foooter bottom part  */}
        <div className="border-t py-6 text-center">
          <p>&copy; copyright 2025. Developed by webpoka</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
