import React, { useState } from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import '../App.css'
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-[1440px] mx-auto fixed bg-white w-full z-[100] border-b border-gray-200">
      <nav className="px-[20px] py-[10px] flex bg-white justify-between items-center">
        <div>
          <h1 className="text-[24px] font-bold">Logo</h1>
        </div>
        <div className="hidden md:flex justify-center items-center text-[14px] font-[100] text-gray-800 gap-[40px]">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About us</NavLink>
          <NavLink to="/location">Locations</NavLink>
          <NavLink to="/services">Services</NavLink>
       
        </div>
        <div className="flex items-center gap-[20px] text-[16px]">
          <div className="hidden md:flex">
            <NavLink className="font-[200]" to="/contact">
              Contact us
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
          <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
          <Link to="/location">Locations</Link>
          <Link to="/services">Services</Link>
          <Link to="/properties">Properties</Link>
          <Link to="/contact">Contact us</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
