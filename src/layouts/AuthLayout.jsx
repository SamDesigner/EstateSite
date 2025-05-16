import { Outlet } from "react-router-dom";
import '../Pages/Auth/Auth.css'
const AuthLayout = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex h-[100vh]">
      <div className="hidden md:flex md:flex-1 lg:basis-2/3  h-full bg_image"></div>
      <div className="w-full md:flex-1 lg:basis-1/3 h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
