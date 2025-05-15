
import { CiFacebook } from "react-icons/ci";
import { SiInstagram } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import {Link} from 'react-router-dom'
import './Footer.css'
const Footer = () => {
  return (
    <footer className="px-[20px] lg:px-[80px] bg-primary py-[100px]" >
      <div className="max-w-[1440px] mx-auto ">
        <div className="flex flex-col gap-[20px]  md:flex-row md:justify-between">
          <div className="flex flex-col gap-[20px] w-[400px]">
            <h1 className="text-white text-[30px] font-[500]">ASSET ALLOCATORS</h1>
            <p className="text-white text-justify">We are a trusted real estate firm driven by a team of skilled professionals with deep expertise in the property market. Committed to excellence, we deliver tailored solutions that align with our clients’ needs and budgets. With unwavering integrity and professionalism, we strive to exceed expectations and remain a leading service provider in the industry.</p>
          </div>
 
          <div className="flex flex-col gap-[20px]">
            <h1 className="text-white text-[30px] font-[400]">Quick Link</h1>
            <ul className="text-white font-[100] flex flex-col gap-[10px]">
              <li>
                <Link to='#'>About Us</Link>
              </li>
              <li>
                <Link to='#'>Properties</Link>
              </li>
              <li>
                <Link to='#'>Services</Link>
              </li>
         
            </ul>
          </div>
          <div className="flex flex-col gap-[20px]">
            <h1 className="text-white text-[30px] font-[400]">Keep In Touch</h1>
            <ul className="text-white font-[100] flex flex-col gap-[10px]">
              <li>
                <Link to='#'>Contact Us</Link>
              </li>
              <li>
                  <Link to='/appointment'>Book an Appointment</Link>
              </li>
    
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center mt-[40px]" >
            <p className="text-white text-[14px] font-[100]">Copyright Asset Allocators &copy; All Rights Reserved {new Date().getFullYear()}</p>
            <div className="text-white font-[100] flex items-center gap-[20px] text-[20px]">
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
