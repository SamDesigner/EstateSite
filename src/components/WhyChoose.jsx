import React from "react";
import WhyChooseImage from "../assets/images/WhyChoose.png";
const WhyChoose = () => {
  return (
    <div>
      <div className="max-w-[1440px] flex flex-col md:flex-row gap-[20px]  mx-auto">
        <div 
        data-aos="fade-right"
        className="flex-1 bg-primary flex items-end justify-end">
          <img src={WhyChooseImage} />
        </div>
        <div 
        data-aos="fade-left"
        className="flex-1 py-[20px] flex flex-col justify-center px-[20px]">
          <h6 className="text-primary text-[12px]">The Big Question</h6>
          <h1 className="text-[40px]">Why Choose us?</h1>
          <div className="flex flex-col gap-[20px] ">
            <p className="text-justify text-[15px] text-gray-500">
              We excel at understanding your desires and needs while matching
              you with exceptional properties in different locations. We are
              experts in the ever changing real estate market from locating the
              best properties to your acquiring of these properties.{" "}
            </p>
            <p className="text-justify text-[15px] text-gray-500">
              Our greatest strength is in our ability to respond with discretion
              and personalized attention. Our strength lies in our mandate to
              provide solution and our ability to create services that reflect
              the needs, Style and personalities of our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
