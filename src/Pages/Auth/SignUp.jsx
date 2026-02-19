import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Loader from "../../components/Loader/Loader";
import { signup } from "@/api/Auth";
import { FiEye, FiEyeOff } from "react-icons/fi";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputError, setInputError] = useState(false);
  const navigate = useNavigate();

  const signUpAction = async (e) => {
    e.preventDefault();
    if (!username || !password || !email) {
      setInputError(true);
      return;
    }
    setIsLoading(true);

    try {
      const user = await signup(email, password);

      if (user) {
        await user.updateProfile({ displayName: username });
        navigate("/admin/login");
      }
    } catch (error) {
      console.log("Signup error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full flex items-center justify-center px-4 ">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-800">
            ASSET ALLOCATORS
          </h1>
          <p className="text-gray-500 text-sm">Create your account</p>
        </div>

        {/* Form */}
        <form onSubmit={signUpAction} className="space-y-6">
          
          {/* Username */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => { setUsername(e.target.value); setInputError(false); }}
              placeholder="JohnDoe"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-companyGreen focus:border-companyGreen transition duration-200"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setInputError(false); }}
              placeholder="johndoe@mail.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-companyGreen focus:border-companyGreen transition duration-200"
            />
          </div>

          {/* Password with Visibility Toggle */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => { setPassword(e.target.value); setInputError(false); }}
                placeholder="••••••••"
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-companyGreen focus:border-companyGreen transition duration-200"
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

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-maroon text-white py-3 rounded-lg font-semibold hover:opacity-90 active:scale-[0.98] transition-all duration-200 flex items-center justify-center"
          >
            {isLoading ? <Loader /> : "Sign Up"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/admin/login" className="text-maroon font-semibold hover:underline">
            Log In
          </Link>
        </p>

      </div>
    </div>
  );
};

export default SignUp;
