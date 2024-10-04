import React from "react";
import { CiHeart } from "react-icons/ci";
import ServiceSubPage from "./ServiceSubPage";
import serviceImage from "../../assets/images/EstateHome.jpg";
const ServicePage = () => {
  return (
    <div className="mx-w-[1440px] mx-auto">
      {/* <div className="border-b border-gray-300">
        <h1 className="text-black text-[50px] font-[300] pt-[80px] pb-[20px] px-[20px]">
          Services
        </h1>
      </div> */}
      <div className="h-[100vh] w-full flex flex-col-reverse bg-gray-50 px-[40px] gap-[30px] pt-[300px] pb-[40px]">
        <div className="h-full flex-1">
          <img
            className="w-full h-full object-cover rounded-[30px]"
            src={serviceImage}
          />
        </div>
        <div className="flex-1">
          <h1 className="text-black text-[40px] font-[500]">Our Services</h1>
          <p className="font-[100]">
            We are commited to excellence in the services we provided and in the
            results we attain for clients. We achieve the highest quality of
            delivery bt attractingm developing and the best professionalsand
            investingn in latest.
          </p>
          <button></button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] py-[35px] px-[16px] lg:px-[40px] ">
        <div className="border border-gray-200 py-[30px] px-[20px]">
          <div className="text-primary text-[28px] flex flex-col gap-[40px]">
            <div className="bg-primary text-white text-[25px] shadow-md flex items-center justify-center h-[50px] text-center w-[50px] rounded-full">
              01
            </div>

            <h3 className="text-primary uppercase font-[200] text-[14px]">
              Support
            </h3>
          </div>
          <div className="flex flex-col gap-[25px]">
            <h3 className="font-[300] text-[25px]">Estate Agency</h3>
            <p className="text-[16px] font-[200] text-black">
              We proudly represent both buyers and sellers, dedicating ourselves
              to conducting comprehensive research on key details of every
              transaction. Our goal is to ensure that both parties are fully
              informed and receive the best possible outcome. By understanding
              the unique needs of each side, we facilitate smooth, transparent,
              and mutually beneficial transactions that foster long-term
              relationships and trust.
            </p>
            {/* <p className="text-[16px] font-[200] text-gray-400">
              We then craft a tailored marketing strategy to promote your
              property, generating interest among prospective buyers and
              managing all negotiations with care and expertise. As your
              intermediary, we aim to ease the stress often associated with
              selling a property. Leveraging our deep understanding of both
              local and international market trends, we ensure you receive top-
              quality service every step of the way, guiding you through each
              stage with confidence and clarity.
            </p> */}
          </div>
        </div>
        <div className="border border-gray-200 py-[30px] px-[20px]">
          <div className="text-primary text-[28px] flex flex-col gap-[40px]">
            <div className="bg-primary text-white text-[25px] shadow-md flex items-center justify-center h-[50px] text-center w-[50px] rounded-full">
              02
            </div>

            <h3 className="text-primary uppercase font-[200] text-[14px]">
              Support
            </h3>
          </div>
          <div className="flex flex-col gap-[25px]">
            <h3 className="font-[300] text-[25px]">Sales</h3>
            <p className="text-[16px] font-[200] text-black">
              We would normally undertake to sell the property for the best
              price within a suitable time frame and to act as the seller’s
              representative in managing all aspects of the sale. This commences
              with the initial appraisal of the property including advice on
              possible sale price, marketing and promotion of your property,
              generates interest in prospective buyers and handle negotiations
              which can at times be sensitive. As the intermediary, we can
              relieve some of the stress that you may otherwise feel by
              providing quality services from our vast experience of the local
              and international trends and conditions.
            </p>
          </div>
        </div>
        <div className="border border-gray-200 py-[30px] px-[20px]">
          <div className="text-primary text-[28px] flex flex-col gap-[40px]">
            <div className="bg-primary text-white text-[25px] shadow-md flex items-center justify-center h-[50px] text-center w-[50px] rounded-full">
              03
            </div>

            <h3 className="text-primary uppercase font-[200] text-[14px]">
              Lettings
            </h3>
          </div>
          <div className="flex flex-col gap-[25px]">
            <h3 className="font-[300] text-[25px]">Lettings</h3>
            <p className="text-[16px] font-[200] text-black">
              We have systems and processes in place to select the best possible
              tenant at the time, maintain records of the condition of the
              premises and ensure rent is paid on time thereby meeting the
              expectations of the Client. We provide exclusive listings, daily
              showings, hands on management and knowledge of contract leases.
              We further recognize the need to adapt a strategic letting program
              to attract the desired caliber of tenants. Rents collected are
              dealt with according to client instructions and advise, records,
              notices and reviews on leases are proffered and made available
              where required by the Client at the appropriate time intervals
            </p>
          </div>
        </div>
      </div>
      <ServiceSubPage />
    </div>
  );
};

export default ServicePage;
