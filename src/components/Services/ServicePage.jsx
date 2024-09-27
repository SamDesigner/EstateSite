import React from "react";
import { CiHeart } from "react-icons/ci";
import ServiceSubPage from './ServiceSubPage'
const ServicePage = () => {
  return (
    <div className="mx-w-[1440px] mx-auto">
      <div className="border-b border-gray-300">
        <h1 className="text-black text-[50px] font-[300] pt-[80px] pb-[20px] px-[20px]">
          Services
        </h1>
      </div>
      <div className="flex gap-[20px] py-[35px] px-[40px] ">
        <div className="border border-gray-200 py-[30px] px-[20px]">
          <div className="text-primary text-[28px] flex flex-col gap-[40px]">
            <CiHeart />

            <h3 className="text-primary uppercase font-[200] text-[14px]">
              Support
            </h3>
          </div>
          <div className="flex flex-col gap-[25px]">
            <h3 className="font-[300] text-[25px]">Developments</h3>
            <p className="text-[16px] font-[200] text-black">
              Fine and Country serves as a Real Estate Development Consultant to
              a variety of development projects including residential
              developments, apartment complexes, shopping centres, mixed-use,
              and master-planned communities, among other types of real estate
              projects.
            </p>
            <p className="text-[16px] font-[200] text-gray-400">
            Our aim is to set out the means and methods by which a development should be estimated in terms of pricing, location and marketing budgets, providing a helpful guide to excellent property market research practice.
            </p>
          </div>
        </div>
        <div className="border border-gray-200 py-[30px] px-[20px]">
          <div className="text-primary text-[28px] flex flex-col gap-[40px]">
            <CiHeart />

            <h3 className="text-primary uppercase font-[200] text-[14px]">
              Support
            </h3>
          </div>
          <div className="flex flex-col gap-[25px]">
            <h3 className="font-[300] text-[25px]">Developments</h3>
            <p className="text-[16px] font-[200] text-black">
              Fine and Country serves as a Real Estate Development Consultant to
              a variety of development projects including residential
              developments, apartment complexes, shopping centres, mixed-use,
              and master-planned communities, among other types of real estate
              projects.
            </p>
            <p className="text-[16px] font-[200] text-gray-400">
            Our aim is to set out the means and methods by which a development should be estimated in terms of pricing, location and marketing budgets, providing a helpful guide to excellent property market research practice.
            </p>
          </div>
        </div>
        <div className="border border-gray-200 py-[30px] px-[20px]">
          <div className="text-primary text-[28px] flex flex-col gap-[40px]">
            <CiHeart />

            <h3 className="text-primary uppercase font-[200] text-[14px]">
              Support
            </h3>
          </div>
          <div className="flex flex-col gap-[25px]">
            <h3 className="font-[300] text-[25px]">Developments</h3>
            <p className="text-[16px] font-[200] text-black">
              Fine and Country serves as a Real Estate Development Consultant to
              a variety of development projects including residential
              developments, apartment complexes, shopping centres, mixed-use,
              and master-planned communities, among other types of real estate
              projects.
            </p>
            <p className="text-[16px] font-[200] text-gray-400">
            Our aim is to set out the means and methods by which a development should be estimated in terms of pricing, location and marketing budgets, providing a helpful guide to excellent property market research practice.
            </p>
          </div>
        </div>
 

      </div>
      <ServiceSubPage />
    </div>
  );
};

export default ServicePage;
