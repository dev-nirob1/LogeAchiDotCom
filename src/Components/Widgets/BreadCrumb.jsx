import { Link, useLocation } from "react-router-dom";

const BreadCrumb = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="bg-accent">
      <ul className="my-container flex items-center space-x-2 py-4">
        <li className="after:content-['>'] after:mx-2 last:after:content-none">
          <Link to="/">Home</Link>
        </li>
        <li className="after:content-['>'] after:mx-2 last:after:content-none">
          <Link to="/products">Products</Link>
        </li>
        <li className="after:content-['>'] after:mx-2 last:after:content-none">
          <Link to="/products/shirt">Shirts</Link>
        </li>
      </ul>
    </div>
  );
};

export default BreadCrumb;
