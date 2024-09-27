import React from "react";
import HouseIcon from "../../assets/images/house.png";
import { IoIosSend } from "react-icons/io";
const FloatingContact = () => {
  return (
    <div className="flex items-center justify-center">


    <div className="absolute max-w-[1440px] mx-auto bg-white w-[90%] top-[100%] py-[20px] px-[30px] flex flex-col gap-[20px] shadow-lg">
      <div className="flex flex-col justify-center items-center gap-[15px]">
        <img src={HouseIcon} className="h-[30px] w-[30px]" />
        <h3 className="text-[20px]">Make Enquiry On A Property</h3>
      </div>
      <div className="flex flex-col gap-[20px]">
        <div className="flex gap-[20px]">
          <div className="relative flex-1">
            <input
              type="email"
              id="floating_input"
              class="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_input"
              class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Name
            </label>
          </div>
          <div className="relative flex-1">
            <input
              type="text"
              id="floating_input"
              class="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_input"
              class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Email Address
            </label>
          </div>
          <div className="relative flex-1">
            <input
              type="text"
              id="floating_input"
              class="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_input"
              class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Name of Property
            </label>
          </div>
        </div>
        <div>
        <div className="relative flex-1">
            <input
              type="text"
              id="floating_input"
              class="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_input"
              class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Property Address
            </label>
          </div>
        </div>
        <div className="flex items-center justify-center">
            <button className="bg-orange-400 flex gap-[5px] items-center w-[150px] justify-center text-[16px] p-[10px]"><IoIosSend /> Send</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FloatingContact;
