import NavIcon from "../../assets/images/Icons/AAL_MAIN.png";
import { IoCreateSharp } from "react-icons/io5";
import { TbPencilExclamation } from "react-icons/tb";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link, Outlet, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { FaEye } from "react-icons/fa";
const Dashboard = () => {
  const location = useLocation();
  const navLinks = [
    {
      label: "Dashboard",
      to: "/admin/Dashboard",
      icon: <MdDashboard />,
      path:'/admin/Dashboard'
    },
    {
      label: "View Properties",
      to: "properties",
      icon: <GiFamilyHouse />,
      path:'/admin/Dashboard/properties'
    },
    {
      label: "View Site",
      to: "/",
      icon: <FaEye />,
    },
  ];

  const isActive = (path) => location.pathname === path;
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-[200px] bg-white shadow hidden md:block">
        <div className="p-4 text-xl font-bold border-b">
          <img className="h-[60px]" src={NavIcon} />
        </div>
        <nav className="p-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block p-2 rounded flex items-center gap-[5px] ${
                isActive(link.path)
                  ? "bg-gray-200 text-companyGreen"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              <div className="w-[20px] text-[20px]">{link.icon}</div>
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold">Welcome Back</h1>
         
        </header>

        <main className="flex-1 overflow-auto p-6">
          {location.pathname === "/admin/Dashboard" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="createProperty">
                <div className="bg-white h-[30vh] cursor-pointer hover:bg-gray-50  p-4 rounded shadow flex flex-col gap-[10px]">
                  <div className="bg-companyGreen text-white p-2 w-fit rounded-full">
                    <IoCreateSharp />
                  </div>
                  <h1 className="text-[24px] text-companyGreen">
                    Create Property
                  </h1>
                  <p className="text-gray-500 text-[13px]">
                    Here you create a property you'd like to show on the
                    Properties page
                  </p>
                </div>
              </Link>
              <Link to="/admin/Dashboard/properties">
                <div className="bg-white h-[30vh] p-4 rounded shadow flex flex-col gap-[10px]">
                  <div className="bg-companyGreen text-white p-2 w-fit rounded-full">
                    <TbPencilExclamation />
                  </div>
                  <h1 className="text-[24px] text-companyGreen">
                    Edit Property
                  </h1>
                  <p className="text-gray-500 text-[13px]">
                    Here you can make corrections to properties
                  </p>
                </div>
              </Link>
              <div className="bg-white h-[30vh] p-4 rounded shadow flex flex-col gap-[10px]">
                <div className="bg-companyGreen text-white p-2 w-fit rounded-full">
                  <RiDeleteBin6Fill />
                </div>
                <h1 className="text-[24px] text-companyGreen">
                  Delete Property
                </h1>
                <p className="text-gray-500 text-[13px]">
                  Allows you to delete a property you're no longer interested
                  in.
                </p>
              </div>
            </div>
          )}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
