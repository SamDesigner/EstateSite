// import serviceGuy from "../../assets/images/serviceGuy.jpg";
import { MdOutlineSell } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { GiBrickWall } from "react-icons/gi";
import SectionHeader from "../SectionHeader";
import { Link } from "react-router-dom";
const HomeServices = () => {
  const services = [
    { label: "Sales", icon: "01", delay: 300 },
    { label: "Property Management", icon: "02", delay: 400 },
    { label: "Lettings", icon: "03", delay: 500 },
    { label: "Advisory Services", icon: "04", delay: 600 },
    { label: "Renovation and Redesign", icon: "05", delay: 700 },
  ];
  return (
    <div className=" h-[100vh]  homeservice_bg px-[20px]">
      <div className="max-w-[1440px] mx-auto   h-[100vh]">
        <div className=" h-full  ">
          <div className="py-[30px]  flex  justify-center items-center h-full gap-[20px]  ">
            {/* <SectionHeader subtitle='what we offer' title='Our Services include:' /> */}
            <div className="text-white flex-1">
              <h1 className="text-[60px]">Our Services</h1>
              <div>
                <Link className="underline" to="/services">
                  <button className="border p-2 w-[150px] hover:bg-white hover:text-black">Learn more</button>
                </Link>
              </div>
            </div>
            <ul className="grid grid-cols-2 gap-[20px] flex-1 h-full">
              {services.map((service, index) => (
                <li
                  key={index}
                  data-aos="fade-left"
                  data-aos-delay={service.delay}
                  className={` flex items-center   bg-white/30 backdrop-blur-md border border-white/20  p-6  ${
                    index === services.length - 1 ? "col-span-2" : ""
                  } `}
                >
                  {/* <span className="bg-companyGreen text-white h-[40px] w-[40px] rounded-[30px] flex items-center justify-center">
                    {service.icon}
                  </span> */}
                  <p className="text-[20px] text-white">{service.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
