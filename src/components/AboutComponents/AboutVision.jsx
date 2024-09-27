import React from "react";
import "./About.css";
import { GoTelescope } from "react-icons/go";
import { FaBinoculars } from "react-icons/fa";
const AboutVision = () => {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto px-[20px] py-[100px] flex flex-col gap-[30px]">
        <div className="flex items-center justify-center">
          <div className="">
            <div className="flex flex-col items-center justify-center gap-[20px] pb-[20px]">
              <GoTelescope className="text-primary text-[40px] font-[100]" />
              <p className="text-primary font-[300] text-[14px]">OUR VISION</p>
              <h2 className="text-[30px] md:w-[500px] text-center">Transforming spaces to create vibrant, connected communities.</h2>
              <div className="border-b border-primary  w-[200px]"></div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-[35px] md:text-[50px] leading-[60px] md:leading-[80px] text-gray-600 font-[200] text-center">
            <span className="text-primary pl-[50px]">For over 15 years,</span>{" "}
            since joining the global network in 2008,{" "}
            <span className="text-primary">Fine and Country</span> West Africa
            has redefined luxury{" "}
            <span className="text-primary">real estate </span>in the region
            through pioneering{" "}
            <span className="text-primary">intelligent marketing</span> and
            expert services
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AboutVision;
