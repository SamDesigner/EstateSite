import React from "react";
import ShowcaseBg from "../../assets/images/showcaseBg.jpg";
import { MdOutlineWarehouse } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import "./HomeBody.css";
const HomeBody = () => {
  return (
    <div className="max-w-[1440px] mx-auto py-[50px] md:py-[100px] flex flex-col gap-[40px] md:gap-[50px] lg:gap-[100px]">
        <div className=" flex flex-col items-center justify-center px-[20px] md:px-[0px]">
          <p className="text-primary font-[300] text-[14px]">ABOUT US</p>
          <h1 className="text-[30px] md:text-[40px] font-[300] md:w-[600px] text-center  ">Unparalleled service, unmatched expertise</h1>
        </div>  
        <div className="flex flex-col md:flex-row gap-[20px] md:gap-[20px] items-center lg:h-[50vh] px-[20px]"> 
            <div className="flex-1  flex flex-col ">
           
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[20px]">
                    <h3 className="text-black text-[20px] lg:text-[25px] font-[300]">A name that has stood tall for over 15 years</h3>
                    <p className="text-gray-700 font-[200]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, sit amet tempora quasi atque reprehenderit odit consectetur, harum labore esse nobis quos eaque illum, dignissimos aperiam natus enim quod cupiditate?
                    </p>
                  </div>

                  <button className="bg-primary text-black py-[10px] px-[25px] w-fit">Learn more</button>
                </div>
            </div>
            <div className="flex-1 ">
              <div className="">
                <img className="rounded-[20px]" src={ShowcaseBg} />
              </div>
           
            </div>
        </div>
    </div>
  );
};

export default HomeBody;
