import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Loader from "../../components/Loader/Loader";
import { login } from "@/api/Auth";
import { FiEye, FiEyeOff } from "react-icons/fi";
const Auth = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [inputError, setInputError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setInputError(false);
  };

  const loginAction = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setInputError(true);
      return;
    }

    setIsLoading(true);

    try {
      const user = await login(form.email, form.password);

      if (user) {
        navigate("/admin/Dashboard");
      }
    } catch (error) {
      console.log("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-8 transition-all duration-300">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-800">
            ASSET ALLOCATORS
          </h1>
          <p className="text-gray-500 text-sm">Welcome back 👋</p>
        </div>

        {/* Form */}
        <form onSubmit={loginAction} className="space-y-6">
          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              placeholder="johndoe@mail.com"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-companyGreen focus:border-companyGreen transition duration-200"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">
              Password
            </label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-companyGreen focus:border-companyGreen transition duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-companyGreen transition duration-200"
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {inputError && (
            <p className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">
              Please fill in all fields before proceeding.
            </p>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-maroon text-white py-3 rounded-lg font-semibold hover:opacity-90 active:scale-[0.98] transition-all duration-200 flex items-center justify-center"
          >
            {isLoading ? <Loader /> : "Log In"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <Link
            to="/admin/signup"
            className="text-maroon font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Auth;
