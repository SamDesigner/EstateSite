import serviceGuy from "../../assets/images/serviceGuy.jpg";
import { MdOutlineSell } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { GiBrickWall } from "react-icons/gi";
import SectionHeader from "../SectionHeader";
import { Link } from "react-router-dom";
const HomeServices = () => {
  const services = [
    { label: "Sales", icon: '01', delay: 300 },
    { label: "Property Management", icon: '02', delay: 400 },
    { label: "Lettings", icon: '03', delay: 500 },
    { label: "Advisory Services", icon: '04', delay: 600 },
    { label: "Renovation and Redesign", icon: '05', delay: 700 },
  ];
  return (
    <div className=" h-[100vh] sectionBg">
      <div className="max-w-[1440px] mx-auto  md:rounded-3xl   h-[100vh]">
        <div className="flex  flex-col md:flex-row h-full ">
          {/* Left Image Comes Here */}
          <div data-aos="fade-right" className="flex-[2] h-full ">
            <img
              className="h-full object-cover"
              src={serviceGuy}
              alt={serviceGuy}
            />
          </div>
          <div className="flex-[1] py-[30px]  flex flex-col justify-center gap-[20px] h-full divider-y divider-gray-600">
            {/* <h1
              data-aos="fade-left"
              className="text-[25px] md:text-[50px] text-companyGreen"
            >
              Our Services include:
            </h1> */}
            <SectionHeader subtitle='what we offer' title='Our Services include:' />
            <ul className="flex flex-col ">
              {services.map((service, index) => (
                <li
                  key={index}
                  data-aos="fade-left"
                  data-aos-delay={service.delay}
                  className=" flex gap-[20px] items-center p-[10px] rounded-tr-[20px] rounded-br-[5px]"
                >
                  <span className="bg-companyGreen text-white h-[40px] w-[40px] rounded-[30px] flex items-center justify-center">
                    {service.icon}
                  </span>
                  <p className="text-[20px]">{service.label}</p>
                </li>
              ))}
              <div className="text-gray-500 text-center mt-[5vh]">
                  <Link className="underline" to='/services'>
                    Learn more
                  </Link>
              </div>
              {/* <li data-aos="fade-left" className="flex justify-end">
                <Link
                  to="/services"
                  className="flex gap-[10px] items-center text-white"
                >
                  Learn more{" "}
                  <span>
                    <FaArrowRight />
                  </span>{" "}
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
