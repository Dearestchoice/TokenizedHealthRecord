import { EyeOff, Eye } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { LockIcon, MailIcon } from "./Icons";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <main className="flex-1 flex items-center justify-center">
      <div className="bg-[#15192B] p-8 md:p-12 md:min-w-[450px] rounded-lg shadow-lg text-white">
        <h2 className="text-xl font-semibold mb-2 font-sora">
          Log in to your Account
        </h2>
        <p className="mb-6 font-medium">
          Welcome back! Select method to log in
        </p>

        <button className="w-full py-3 bg-transparent border border-thrGreen text-thrGreen rounded-lg font-semibold hover:bg-thrGreen hover:text-white transition">
          Connect with Wallet
        </button>

        <div className="flex items-center my-8">
          <hr className="flex-grow border-gray-600" />
          <span className="mx-2 text-gray-500">or continue with email</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        <form>
          <div className="mb-4 relative">
            <label className="sr-only">Email</label>
            <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
              <MailIcon />
            </span>
            <input
              type="email"
              placeholder="Email"
              className="w-full py-3 pl-10 pr-4 bg-[#0F121E] border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3EE0AC]"
            />
          </div>
          <div className="mb-2 relative">
            <label className="sr-only">Password</label>
            <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
              <LockIcon />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full py-3 pl-10 pr-10 bg-[#0F121E] border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3EE0AC]"
            />
            <span
              className="absolute inset-y-0 right-4 flex items-center text-gray-400 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>

          <div className="text-right mb-6">
            <a href="#" className="text-thrGreen text-sm hover:underline">
              Forgot Password
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-thrGreen rounded-lg font-semibold text-black hover:bg-[#2BB98F] transition"
          >
            Log In
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6">
          Don’t have an account?&nbsp;
          <Link to={"/signup"} className="text-thrGreen hover:underline">
            Create an Account
          </Link>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
