import { Link } from "react-router-dom";

const BreadCrumb = ({ routeName }) => {
  return (
    <div className="bg-accent">
      <ul className="my-container flex items-center space-x-2 py-4">
        <li className="after:content-['>'] after:mx-2 last:after:content-none">
          <Link to="/">Home</Link>
        </li>
        <li className="after:content-['>'] after:mx-2 last:after:content-none">
          {routeName}
        </li>
      </ul>
    </div>
  );
};

export default BreadCrumb;
