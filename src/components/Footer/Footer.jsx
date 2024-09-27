import React from "react";
import { CiFacebook } from "react-icons/ci";
import { SiInstagram } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import './Footer.css'
const Footer = () => {
  return (
    <footer className="px-[20px] lg:px-[80px] bg-primary py-[100px]" >
      <div className="max-w-[1440px] mx-auto ">
        <div className="flex flex-col gap-[20px]  md:flex-row  md:justify-between">
          <div className="flex flex-col gap-[20px]">
            <h1 className="text-black text-[30px] font-[400]">Our Properties</h1>
            <ul className="text-black font-[100] flex flex-col gap-[10px]">
              <li>Ajah</li>
              <li>Lekki</li>
              <li>Abuja</li>
              <li>Kaduna</li>
              <li>Port Harcourt</li>
            </ul>
          </div>
          <div className="flex flex-col gap-[20px]">
            <h1 className="text-black text-[30px] font-[400]">About</h1>
            <ul className="text-black font-[100] flex flex-col gap-[10px]">
              <li>Aja</li>
              <li>Lekki</li>
              <li>Abuja</li>
              <li>Kaduna</li>
              <li>Port Harcourt</li>
            </ul>
          </div>
          <div className="flex flex-col gap-[20px]">
            <h1 className="text-black text-[30px] font-[400]">Services</h1>
            <ul className="text-black font-[100] flex flex-col gap-[10px]">
              <li>Aja</li>
              <li>Lekki</li>
              <li>Abuja</li>
              <li>Kaduna</li>
              <li>Port Harcourt</li>
            </ul>
          </div>
          <div className="flex flex-col gap-[20px]">
            <h1 className="text-black text-[30px] font-[400]">Properties</h1>
            <ul className="text-black font-[100] flex flex-col gap-[10px]">
              <li>Aja</li>
              <li>Lekki</li>
              <li>Abuja</li>
              <li>Kaduna</li>
              <li>Port Harcourt</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center mt-[40px]" >
            <p className="text-black text-[14px] font-[100]">Copyright BodeCodes &copy; All Rights Reserved {new Date().getFullYear()}</p>
            <div className="text-black font-[100] flex items-center gap-[20px] text-[20px]">
                <CiFacebook />
                <SiInstagram />
                <FaWhatsapp />
                <GrLinkedin />
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
