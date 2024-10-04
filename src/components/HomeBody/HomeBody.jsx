import React from "react";
import ShowcaseBg from "../../assets/images/showcaseBg.jpg";
import { MdOutlineWarehouse } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import "./HomeBody.css";
const HomeBody = () => {
  return (
    <div className="max-w-[1440px] mx-auto py-[50px] md:py-[100px] flex flex-col gap-[40px] md:gap-[50px] lg:gap-[100px]">
      <div 
      data-aos="fade-up"
      data-aos-duration="1000"
      className=" flex flex-col items-center justify-center px-[20px] md:px-[0px]">
        <p className="text-primary font-[300] text-[14px]">OUR FIRM</p>
        <h1 className="text-[30px] md:text-[40px] font-[300] md:w-[600px] text-center  ">
          Asset Allocators
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-[20px] md:gap-[20px] items-center lg:h-[50vh] px-[20px]">
        <div className="flex-1  flex flex-col ">
          <div
            data-aos="fade-right"
            data-aos-duration="700"
            className="flex flex-col gap-[30px]"
          >
            <div className="flex flex-col gap-[20px]">
              <h3 className="text-black text-[20px] lg:text-[25px] font-[300]">
                A name that has stood tall for years
              </h3>
              <p className="text-gray-700 font-[200] text-justify">
                We are a reputable firm of Real Estate Practitioners run by a
                dedicated team of qualified, seasoned, who with their vast
                knowledge and in-depth expertise of the real estate market has
                become a Big Service Provider in the industry. Our services are
                tailored to match clients with services that reflect their needs
                and Budget. We continuously maintain and improve on our high
                standard of integrity and professionalism at all time
              </p>
            </div>

            <button className="bg-primary text-black py-[10px] px-[25px] w-fit">
              Learn more
            </button>
          </div>
        </div>
        <div className="flex-1 ">
          <div data-aos="zoom-in" className="">
            <img className="rounded-[20px]" src={ShowcaseBg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
