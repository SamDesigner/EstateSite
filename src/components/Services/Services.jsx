import React from "react";
import { FcServices } from "react-icons/fc";
import { MdOutlineOtherHouses } from "react-icons/md";
const Services = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-[1440px] mx-auto px-[80px] py-[100px] flex flex-col gap-[50px]">
        <div className="flex flex-col gap-[10px] items-center justify-center">
          <FcServices className="text-[30px]" />
          <h1 className="text-[40px] font-[600]">Our Services</h1>
        </div>
        <div className="grid grid-cols-3 gap-[20px]">
            <div className="bg-white shadow-md flex flex-col gap-[5px] p-[30px]">
                <div className="flex gap-[10px] items-center">
                <MdOutlineOtherHouses className="text-[25px]" />
                <h2 className="text-[25px] font-[400]">Houses</h2>
                </div>
                <div>
                    <p className="text-[14px] text-gray-500 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ut accusantium tempora voluptatum ducimus ipsat.</p>
                </div>
                
            </div>
            <div className="bg-white shadow-md flex flex-col gap-[5px] p-[30px]">
                <div className="flex gap-[10px] items-center">
                <MdOutlineOtherHouses className="text-[25px]" />
                <h2 className="text-[25px] font-[400]">Houses</h2>
                </div>
                <div>
                    <p className="text-[14px] text-gray-500 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ut accusantium tempora voluptatum ducimus ipsat.</p>
                </div>
            </div>
            <div className="bg-white shadow-md flex flex-col gap-[5px] p-[30px]">
                <div className="flex gap-[10px] items-center">
                <MdOutlineOtherHouses className="text-[25px]" />
                <h2 className="text-[25px] font-[400]">Houses</h2>
                </div>
                <div>
                    <p className="text-[14px] text-gray-500 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ut accusantium tempora voluptatum ducimus ipsat.</p>
                </div>
            </div>


        </div>
      </div>
    </div>
  );
};

export default Services;
