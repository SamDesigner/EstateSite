import { SiInstagram } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  const phoneNumber = +2348033064524;
  const message = encodeURIComponent(
    `Hello I am texting you from the Asset Allocators website`
  );
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    //Default bg-primary
    // <footer className="px-[20px] lg:px-[80px] bg-secondary py-[100px]">
    <footer className="px-[20px] lg:px-[80px] bg-maroon py-[100px]">
      <div className="max-w-[1440px] mx-auto ">
        <div className="flex flex-col gap-[30px]  lg:flex-row md:justify-between ">
          <div className="flex flex-col gap-[20px] lg:w-[400px]">
            <h1 className="text-white text-[30px] font-[500] ">
              Asset Allocators  
            </h1>
            <p className="text-white text-justify">
              We are a trusted real estate firm driven by a team of skilled
              professionals with deep expertise in the property market.
              Committed to excellence, we deliver tailored solutions that align
              with our clients’ needs and budgets. With unwavering integrity and
              professionalism, we strive to exceed expectations and remain a
              leading service provider in the industry.
            </p>
          </div>
          <div className="flex flex-row gap-[40px] ">
            <div className="flex flex-col gap-[20px]">
              {/* <h1 className="text-white text-[30px] font-[400]">Quick Link</h1> */}
              <ul className="text-white  flex flex-col gap-[10px]">
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/location">Properties</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>

              </ul>


            </div>
            <div className="flex flex-col gap-[20px]">
              {/* <h1 className="text-white text-[30px] font-[400]">
                Keep In Touch
              </h1> */}
              <ul className="text-white flex flex-col gap-[10px]">
                <li>
                  <Link to="#">Contact Us</Link>
                </li>
                <li>
                  <Link to="/appointment">Book an Appointment</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse gap-[20px] md:gap-0  md:flex-row justify-between items-center mt-[40px]">
          <p className="text-white text-[14px] ">
            Copyright Asset Allocators &copy; All Rights Reserved{" "}
            {new Date().getFullYear()}
          </p>
          <div className="text-white font-[100] flex items-center gap-[20px] text-[20px]">
            {/* <CiFacebook /> */}
            <a href="https://www.instagram.com/assetallocatorsltd/">
              <SiInstagram />
            </a>
            {/*  */}
            <a href={whatsappLink} target='_blank'>
              <FaWhatsapp />
            </a>
            {/* <GrLinkedin /> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
