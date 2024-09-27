import React from "react";
import "./Showcase.css";

const Showcase = () => {
  return (
    <div className="showcase_bg flex items-end justify-center pb-[60px]">
      <div className="flex flex-col items-center md:gap-[10px] md:gap-[20px]">
        <h3 className="text-white font-[100]">Explore Real Estate with us</h3>
        <h1 className="text-primary uppercase text-[40px] md:text-[80px] font-[300] md:w-[400px] leading-[80px] text-center">The Gold Standard</h1>
        <p className="font-[100] text-white md:w-[450px] text-center text-[18px]">
          Multi-award winning Nigerian luxury real estate marketing and sales
          consultancy
        </p>
      </div>
    </div>
  );
};

export default Showcase;
