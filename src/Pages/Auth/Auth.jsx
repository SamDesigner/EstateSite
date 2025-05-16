import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { userLogin } from "../../api/logIn";
import Loader from "../../components/Loader/Loader";
import { showSuccessToast, showErrorToast } from "../../utils/toast";

const Auth = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [inputError, setInputError] = useState(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const loginAction = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setInputError(true);
      return;
    }
    setIsLoading(true);
    try {
      const response = await userLogin(form.email, form.password);
      console.log("This was the error while trying to login", response);
      if (
        response?.response?.status === 400 ||
        response?.response?.status === 401
      ) {
        showErrorToast(response?.response?.data?.message);
      } else {
        showSuccessToast(response.message);
        navigate("/admin/Dashboard");
      }
    } catch (error) {
      console.log("This is the error response from login", error);
      showErrorToast(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="h-full">
      <div className="flex flex-col items-center w-full gap-[30px] justify-center h-full">
        <div className="flex flex-col items-center">
          <h1 className="text-black text-companyGreen text-[30px] font-[800]">
            ASSET ALOCATORS
          </h1>
          <h4 className="text-[20px]">Log In</h4>
        </div>

        <form
          onSubmit={loginAction}
          className="w-[80%] mx-auto flex flex-col gap-[40px]"
        >
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[10px] w-full">
              <label className="text-gray-400 text-[14px]">Email</label>
              <input
                name="email"
                className="p-[10px] border border-gray-400 border-1 rounded-[5px]"
                type="text"
                onChange={handleChange}
                placeholder="johndoe@mail.com"
              />
            </div>
            <div className="flex flex-col gap-[10px] w-full">
              <label className="text-gray-400 text-[14px]">Password</label>
              <input
                name="password"
                className="p-[10px] border border-gray-400 border-1 rounded-[5px]"
                type="text"
                placeholder="******"
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            {inputError && (
              <p className="text-red-600 py-[10px]">
                Kindly Fill all fields. Before proceeding
              </p>
            )}
            <button className="bg-companyGreen  text-white w-full p-[10px] rounded-[5px] hover:opacity-[0.9]">
              {isLoading ? <Loader /> : <span>Log In</span>}
            </button>
          </div>
          <div>
            {/* <p className="text-center text-companyGreen font-[500]">
                  Forgot Password?
                </p> */}
            {/* <Link to="/admin/signup">Or Sign Up</Link> */}
            <p className="text-center font-[500]">
              <span>Don't have an account?</span>{" "}
              <span className="text-companyGreen">
                <Link to={"/admin/signup"}>Sign Up</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
