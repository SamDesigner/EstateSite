import React from "react";
import "./About.css";
import { GoTelescope } from "react-icons/go";
import { FaBinoculars } from "react-icons/fa";
const AboutVision = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-[1440px] mx-auto px-[20px] py-[100px] flex flex-col gap-[30px]">
        <div
        data-aos="fade-up"
        className="flex items-center justify-center">
          <div className="">
            <div className="flex flex-col items-center justify-center gap-[20px] pb-[20px]">
              <GoTelescope className="text-primary text-[40px] font-[100]" />
              <p className="text-primary font-[300] text-[14px]">OUR VISION</p>
              <h2 className="text-[30px] md:w-[500px] text-center">
                Transforming spaces to create vibrant, connected communities.
              </h2>
              <div className="border-b border-primary  w-[200px]"></div>
            </div>
          </div>
        </div>

        <div
        data-aos="fade-up"
        >
          <h2 className="text-[35px] md:text-[50px] leading-[60px] md:leading-[80px] text-gray-600 font-[200] text-center">
            <span className="text-primary pl-[50px]">
              To become at all times our{" "}
            </span>{" "}
            <span className="text-primary">clients’ </span>
            foremost <span className="text-primary">real,estate </span> service
            provider while partnering with them on their own
            <span className="text-primary"> vision. </span>
            (Helping them create their dream Real Estate World)
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AboutVision;
