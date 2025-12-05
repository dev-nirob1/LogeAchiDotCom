import { Link } from "react-router-dom";

const Login = () => {
  return <div className="max-w-xl border border-gray-200 p-6 rounded-lg">
      <h3 className="text-4xl text-center font-medium mb-6">Login</h3>
      <form>
        <label className="text-sm">
          Email Address
          <input
            className="w-full border border-gray-100 rounded-sm py-1.5 mt-1 mb-4"
            type="email"
            placeholder="Enter your e-mail"
          />
        </label>
        <label className="text-sm">
          Your Password
          <input
            className="w-full border border-gray-100 rounded-sm py-1.5 mt-1 mb-4"
            type="password"
            placeholder="*******"
          />
        </label>
        {/* login button  */}
        <button className="cursor-pointer mt-2 w-full py-2 bg-neutral-900 text-white font-medium rounded-sm">
          Login
        </button>

        <div className="text-center mt-6">
          Don't Have an account?{" "}
          <Link to="/registration" className="text-amber-500 font-semibold">
            {" "}
            Registration Here.
          </Link>
          <Link to="" className="text-amber-500 font-semibold block">Forgot Password!</Link>
        </div>
      </form>
    </div>
};

export default Login;
