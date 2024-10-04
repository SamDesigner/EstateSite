import React, { useState } from "react";
import image from "../../assets/images/showcaseBg.jpg";
import { Link } from "react-router-dom";
import lagosState from "../../assets/images/lagosState.jpg";

import { TiLocation } from "react-icons/ti";
import "./HomeLocation.css";
const HomeLocation = () => {
  const [locations, setLocation] = useState([
    {
      id: 1,
      location: "Lagos State",
      image: lagosState,
      linkTo: "/",
    },
    {
      id: 2,
      location: "Lagos State",
      image: lagosState,
      linkTo: "/",
    },
    {
      id: 3,
      location: "Lagos State",
      image: lagosState,
      linkTo: "/",
    },
  ]);
  const [extraLocation, setExtraLocation] = useState([
    {
      id: 1,
      location: "Lagos State",
      image: lagosState,
      linkTo: "/",
    },
    {
      id: 1,
      location: "Lagos State",
      image: lagosState,
      linkTo: "/",
    },
  ]);
  return (
    <div className="max-w-[1440px] mx-auto bg-section flex flex-col gap-[40px] pb-[100px] ">
      <div className="flex items-center justify-center">
        <div data-aos="fade-up" data-aos-duration="1000" className="">
          <div className="flex flex-col items-center justify-center gap-[20px] pb-[20px]">
            <TiLocation className="text-primary text-[40px] font-[100]" />
            <p className="text-primary font-[300] text-[14px]">OUR VISION</p>
            <h2 className="text-[30px] md:w-[500px] text-center">
              Transforming spaces to create vibrant, connected communities.
            </h2>
            <div className="border-b border-primary  w-[200px]"></div>
          </div>
        </div>
      </div>
      <div className=" w-full flex flex-col md:gap-[60px] px-[20px] ">
        {/* First Row of Properties */}
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-3  w-full">
          {locations.map((location) => (
            <div className="md:flex  md:items-center md:justify-center">
              <div 
               data-aos="fade-up"
              className="bg-white md:w-[200px] shadow-xl rounded-2xl flex flex-col gap-[10px] items-center justify-center py-[20px]">
                <div className="h-[100px] w-[100px] rounded-full border border-4 border-primary">
                  <img
                    className="h-full w-full rounded-full"
                    src={location.image}
                  />
                </div>
                <div className="flex items-center gap-[5px]">
                  <TiLocation className="text-primary text-[18px] font-[100]" />
                  <h5 className="text-[16px] font-[200]">
                    {location.location}
                  </h5>
                </div>
                <Link to={location.linkTo}>
                  <button className="bg-primary py-[5px] px-[15px] text-[14px] rounded-2xl ">
                    View more
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* Second Row of Properties */}
        <div className="w-full md:w-[600px] mt-[20px] md:mt-[0px] mx-auto flex flex-col md:flex-row gap-[20px] justify-between">
          {extraLocation.map((location) => (
            <div className="bg-white w-full md:w-[200px] shadow-xl rounded-2xl flex flex-col gap-[10px] items-center justify-center py-[20px]">
              <div className="h-[100px] w-[100px] rounded-full border border-4 border-primary">
                <img
                  className="h-full w-full rounded-full"
                  src={location.image}
                />
              </div>
              <div className="flex items-center gap-[5px]">
                <TiLocation className="text-primary text-[18px] font-[100]" />
                <h5 className="text-[16px] font-[200]">{location.location}</h5>
              </div>
              <Link to={location.linkTo}>
                <button className="bg-primary py-[5px] px-[15px] text-[14px] rounded-2xl ">
                  View more
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeLocation;
