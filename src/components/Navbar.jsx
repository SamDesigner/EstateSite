import { useState } from "react";
// import { FaPhoneVolume } from "react-icons/fa6";
// import { FaWhatsapp } from "react-icons/fa";
// import { FiMail } from "react-icons/fi";
// import { FaInstagram } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
// import { FaFacebook } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import NavIcon from "../assets/images/Icons/AAL_MAIN.png";
import "../App.css";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed top-0 bg-white w-full z-[100] border-b border-gray-200">
      <nav className="px-[20px] max-w-[1440px] mx-auto   flex bg-white justify-between items-center">
        <div className="h-[60px] ">
          <NavLink to="/">
            <img className="h-full" src={NavIcon} />
          </NavLink>
        </div>
        <div className="hidden md:flex justify-center items-center text-[15px]  text-gray-800 gap-[40px]">
          <NavLink to="/">Home</NavLink>
          <HashLink className="cursor-pointer" smooth to="/#about">About us</HashLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/location">Listings</NavLink>
          {/* <NavLink to="/admin/properties">All Properties</NavLink> */}
          {/* <NavLink to="/admin/login">Admin Auth</NavLink> */}
        </div>
        <div className="flex items-center gap-[20px] text-[16px]">
          <div className="hidden md:flex">
            <NavLink to="/contact">
              <button className="bg-maroon text-white py-[10px] px-[20px] rounded-full hover:bg-red-800">Contact us</button>
            </NavLink>
          </div>

          <div className="md:hidden">
            {!isOpen ? (
              <div onClick={() => setIsOpen(true)}>
                {" "}
                <FaBarsStaggered />{" "}
              </div>
            ) : (
              <div onClick={() => setIsOpen(false)}>
                {" "}
                <FaXmark />{" "}
              </div>
            )}
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="top-0 h-[70vh]  w-full flex flex-col justify-center items-center gap-[30px] text-[20px]">
          <NavLink to="/">Home</NavLink>
          <a href="#about">About us</a>
          <NavLink to="/services" onClick={() => setIsOpen(false)}>Services</NavLink>
          <NavLink to="/location">Listings</NavLink>
          {/* <NavLink to="/admin/properties">All Properties</NavLink> */}
          <NavLink to="/contact">Contact us</NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
