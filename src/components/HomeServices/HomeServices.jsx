import serviceGuy from "../../assets/images/serviceGuy.jpg";
import { MdOutlineSell } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { GiBrickWall } from "react-icons/gi";
import { Link } from "react-router-dom";
const HomeServices = () => {
  const services = [
    { label: "Sales", icon: <MdOutlineSell />, delay: 300 },
    { label: "Property Management", icon: <MdOutlineSell />, delay: 400 },
    { label: "Lettings", icon: <MdOutlineSell />, delay: 500 },
    { label: "Advisory Services", icon: <MdOutlineSell />, delay: 600 },
    { label: "Renovation and Redesign", icon: <GiBrickWall />, delay: 700 },
  ];
  return (
    <div className="md:px-[20px] pt-[20px] pb-[50px] md:py-[100px]">
      <div className="max-w-[1440px] mx-auto bg-secondary  md:rounded-3xl  p-[20px] lg:p-[40px] lg:min-h-[85vh]">
        <div className="flex  flex-col md:flex-row h-[100%] gap-[30px]">
          {/* Left Image Comes Here */}
          <div data-aos="fade-right" className="flex-1  ">
            <img
              className="h-full object-cover rounded-xl"
              src={serviceGuy}
              alt={serviceGuy}
            />
          </div>
          <div className="flex-1 flex flex-col gap-[20px]">
            <h1
              data-aos="fade-left"
              className="text-[25px] md:text-[50px] text-white"
            >
              Our Services include:
            </h1>
            <ul className="flex flex-col gap-[25px]">
              {services.map((service, index) => (
                <li
                  key={index}
                  data-aos="fade-left"
                  data-aos-delay={service.delay}
                  className="bg-white flex gap-[20px] items-center p-[10px] rounded-tr-[20px] rounded-br-[5px]"
                >
                  <span className="bg-primary text-white h-[40px] w-[40px] rounded-[30px] flex items-center justify-center">
                    {service.icon}
                  </span>
                  <p className="text-[20px]">{service.label}</p>
                </li>
              ))}

              <li data-aos="fade-left" className="flex justify-end">
                <Link
                  to="/services"
                  className="flex gap-[10px] items-center text-white"
                >
                  Learn more{" "}
                  <span>
                    <FaArrowRight />
                  </span>{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
