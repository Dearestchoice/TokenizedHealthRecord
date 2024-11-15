import { EyeOff, Eye } from "lucide-react";
import { useState } from "react";

import { LockIcon } from "../Login/Icons";

const ResetPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <main className="flex-1 flex items-center justify-center">
      <div className="bg-[#15192B] p-8 md:p-12 md:min-w-[450px] rounded-lg shadow-lg text-white">
        <h2 className="text-xl font-semibold mb-2 font-sora">
          Change Password
        </h2>
        <p className="mb-6 font-medium">Please enter your new password.</p>

        <form>
          <div className="mb-2 relative">
            <label className="sr-only">Password</label>
            <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
              <LockIcon />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter new password"
              className="w-full py-3 pl-10 pr-10 bg-[#0F121E] border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3EE0AC]"
            />
            <span
              className="absolute inset-y-0 right-4 flex items-center text-gray-400 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>
          <div className="mb-2 relative">
            <label className="sr-only">Password</label>
            <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
              <LockIcon />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm password"
              className="w-full py-3 pl-10 pr-10 bg-[#0F121E] border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3EE0AC]"
            />
            <span
              className="absolute inset-y-0 right-4 flex items-center text-gray-400 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>

          <button
            type="submit"
            className="w-full mt-6 py-3 bg-thrGreen rounded-lg font-semibold text-black hover:bg-[#2BB98F] transition"
          >
            Continue
          </button>
        </form>
      </div>
    </main>
  );
};

export default ResetPage;
