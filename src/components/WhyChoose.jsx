import React from "react";
import WhyChooseImage from "../assets/images/WhyChoose.png";
const WhyChoose = () => {
  return (
    <div>
      <div className="max-w-[1440px] flex flex-col md:flex-row gap-[20px]  mx-auto">
        <div
          data-aos="fade-right"
          className="flex-1 bg-primary flex items-end justify-end"
        >
          <img src={WhyChooseImage} />
        </div>
        <div
          data-aos="fade-left"
          className="flex-1 py-[20px] flex flex-col justify-center px-[20px]"
        >
          <h6 className="text-primary text-[12px]">The Big Question</h6>
          <h1 className="text-[40px]">Why Choose us?</h1>
          <div className="flex flex-col gap-[20px] ">
            <p className="text-justify text-[15px] text-gray-500">
              We specialize in connecting clients with properties that mirror
              their unique tastes, needs, and lifestyle—across a range of prime
              locations. From discovery to acquisition, we navigate the dynamic
              real estate market with precision and insight.
            </p>
            <p className="text-justify text-[15px] text-gray-500">
              Our greatest strength lies in our discretion, attention to detail,
              and commitment to crafting personalized solutions that speak to
              the style and personality of each client.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
