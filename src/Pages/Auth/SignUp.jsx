import { Link, useNavigate } from "react-router-dom";
import { userSignUp } from "../../api/signUp";
import { useState } from "react";
import Loader from "../../components/Loader/Loader";
import Swal from "sweetalert2";
import {signup} from '@/api/Auth'
// import { showSuccessToast, showErrorToast } from "../../utils/toast";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
    // Call Firebase signup
    const user = await signup(email, password);

    if (user) {
      // Optionally, update display name
      await user.updateProfile({ displayName: username });

      // Navigate to login page
      navigate("/admin/login");
    }
  } catch (error) {
    console.log("Signup error:", error);
   
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div>
      <div className="max-w-[1440px] mx-auto flex h-[100vh]">
        <div className="flex flex-col items-center w-full gap-[30px] justify-center h-full">
          <div className="flex flex-col items-center">
            <h1 className="text-black  text-[30px] font-[800]">
              ASSET ALOCATORS
            </h1>
            <h4 className="text-[20px]">Sign Up</h4>
          </div>

          <form
            onSubmit={signUpAction}
            className="w-[80%] mx-auto flex flex-col gap-[40px]"
          >
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-col gap-[10px] w-full">
                <label className="text-gray-400 text-[14px]">Username</label>
                <input
                  className="p-[10px] border border-gray-400 border-1 rounded-[5px]"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-[10px] w-full">
                <label className="text-gray-400 text-[14px]">Email</label>
                <input
                  className="p-[10px] border border-gray-400 border-1 rounded-[5px]"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-[10px] w-full">
                <label className="text-gray-400 text-[14px]">Password</label>
                <input
                  className="p-[10px] border border-gray-400 border-1 rounded-[5px]"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="h-[30px] flex items-center ">
                {inputError && (
                  <p className="text-red-600 ">
                    Kindly Fill all fields. Before proceeding
                  </p>
                )}
              </div>
              <button className="bg-companyGreen rounded-full text-white w-full p-[10px] rounded-[5px] hover:opacity-[0.9] flex gap-[5px] items-center justify-center">
                {isLoading ? <Loader /> : <span>Sign Up</span>}
              </button>
            </div>
            <div>
              <p className="text-center font-[500]">
                <span>Already have an account?</span>{" "}
                <span className="text-companyGreen">
                  <Link to={"/admin/login"}>Log In</Link>
                </span>
              </p>
              {/* <Link to='/admin/signup'>Or Sign Up</Link> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
