import React from "react";
import { GoTelescope } from "react-icons/go";
const AboutCoreValues = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-[20px] py-[100px] flex flex-col gap-[30px]">
      <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="flex items-center justify-center">
        <div className="">
          <div className="flex flex-col items-center justify-center gap-[20px] pb-[20px]">
            <GoTelescope className="text-primary text-[40px] font-[100]" />
            <p className="text-primary font-[300] text-[14px]">CORE VALUES</p>
            <h2 className="text-[30px] md:w-[500px] text-center">
              Building your Real Estate Dreams One at a time
            </h2>
            <div className="border-b border-primary  w-[200px]"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[20px] items-center w-full md:flex-row md:justify-between">
        <div 
         data-aos="flip-up"
        className="w-[250px]  lg:w-[300px] shadow-md flex gap-[20px] items-center justify-center flex-col h-[150px] rounded-[10px] ">
          <div className="border border-1 rounded-full border-primary w-fit p-3">
            <GoTelescope className="text-primary text-[20px] font-[100]" />
          </div>
          <h3 className="text-[20px] lg:text-[30px] font-[200]">Integrity</h3>
        </div>
        <div 
         data-aos="flip-up"
         data-aos-delay="300"
        className="w-[250px]  lg:w-[300px] shadow-md flex gap-[20px] items-center justify-center flex-col h-[150px] rounded-[10px] ">
          <div className="border border-1 rounded-full border-primary w-fit p-3">
            <GoTelescope className="text-primary text-[20px] font-[100]" />
          </div>
          <h3 className="text-[20px] lg:text-[30px] font-[200]">Ideas</h3>
        </div>
        <div 
         data-aos="flip-up"
         data-aos-delay="500"
        className="w-[250px]  lg:w-[300px] shadow-md flex gap-[20px] items-center justify-center flex-col h-[150px] rounded-[10px] ">
          <div className="border border-1 rounded-full border-primary w-fit p-3">
            <GoTelescope className="text-primary text-[20px] font-[100]" />
          </div>
          <h3 className="text-[20px] lg:text-[30px] font-[200]">Excellence</h3>
        </div>
      </div>
    </div>
  );
};

export default AboutCoreValues;
