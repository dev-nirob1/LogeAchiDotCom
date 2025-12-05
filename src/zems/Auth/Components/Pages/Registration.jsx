import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="max-w-xl border border-gray-200 p-6 rounded-lg">
      <h3 className="text-4xl text-center font-medium mb-6">Registration</h3>
      <form>
        <label className="text-sm">
          Your Name
          <input
            className="w-full border border-gray-100 rounded-sm py-1.5 mt-1 mb-4"
            type="text"
            placeholder="Enter your Name"
          />
        </label>
        <label className="text-sm">
          Phone Number
          <input
            className="w-full border border-gray-100 rounded-sm py-1.5 mt-1 mb-4"
            type="number"
            placeholder="Enter your number"
          />
        </label>
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
        <label className="text-sm">
          Confirm Password
          <input
            className="w-full border border-gray-100 rounded-sm py-1.5 mt-1 mb-4"
            type="password"
            placeholder="*******"
          />
        </label>
        {/* Register button  */}
        <button className="cursor-pointer mt-2 w-full py-2 bg-neutral-900 text-white font-medium rounded-sm">
          Register
        </button>

        <div className="text-center mt-6">
          Already Have an account?{" "}
          <Link to="/login" className="text-amber-500 font-semibold">
            {" "}
            Login Here.
          </Link>
          <Link to="" className="text-amber-500 font-semibold block">Forgot Password!</Link>
        </div>
      </form>
    </div>
  );
};

export default Registration;
