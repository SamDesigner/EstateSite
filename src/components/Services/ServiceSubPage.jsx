import React from "react";
import { CiHeart } from "react-icons/ci";
const ServiceSubPage = () => {
  return (
    <div>
      <div className="flex flex-col gap-[20px] px-[16px]  pb-[20px] lg:pb-[40px] lg:px-[40px]">
        <div className="border border-gray-200 py-[30px] px-[20px]">
          <div className="text-primary text-[28px] flex flex-col gap-[40px]">
            <div className="bg-primary text-white text-[25px] shadow-md flex items-center justify-center h-[50px] text-center w-[50px] rounded-full">
              04
            </div>

            <h3 className="text-primary uppercase font-[200] text-[14px]">
              Support
            </h3>
          </div>
          <div className="flex flex-col gap-[25px]">
            <h3 className="font-[300] text-[25px]">Property Management</h3>
            <p className="text-[16px] font-[200] text-black">
              Property Management typically involves the managing of a property
              that is owned by another party or entity. The property manager
              acts on behalf of the owner to preserve the value of the property
              while generating income, the managed properties may include
              residential properties, commercial retail space or industrial
              warehouse space. Our services will normally include budgeting
              expenses, securing renters and collecting rent, complying with
              laws and regulations and maintaining the property. This includes
              preventive maintenance, repair or corrective maintenance, routine
              cleaning and maintenance, construction, tenant improvement when
              handling commercial or industrial and residential space.
            </p>

            <button className="border border-primary w-fit py-3 px-6 hover:bg-primary hover:text-white">
              Book a Consultant
            </button>
          </div>
        </div>
        <div className="border border-gray-200 py-[30px] px-[20px]">
          <div className="text-primary text-[28px] flex flex-col gap-[40px]">
            <div className="bg-primary text-white text-[25px] shadow-md flex items-center justify-center h-[50px] text-center w-[50px] rounded-full">
              05
            </div>

            <h3 className="text-primary uppercase font-[200] text-[14px]">
              Support
            </h3>
          </div>
          <div className="flex flex-col gap-[25px]">
            <h3 className="font-[300] text-[25px]">Advisory Services</h3>
            <p className="text-[16px] font-[200] text-black">
              We are Business advisors for Real Estate, we help you when dealing
              with multiple properties or a single critical facility to
              determine where and how you purchase, lease, or sell Real Estate
              can affect your company or individual operations. To assist in
              making the Right Real Estate Decisions that ultimately makes you
              money.
            </p>
  
            <button className="border border-primary w-fit py-3 px-6 hover:bg-primary hover:text-white">
              Book a Consultant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSubPage;
