import React, { useState } from "react";
import "./Location.css";
import { TiLocation } from "react-icons/ti";
import Sample from "../../assets/images/lagosState.jpg";
const LocationShowcase = () => {
  const [estateData, setEstateData] = useState([
    {
      id: 1,
      name: "Town House Guse",
      location: "Abuja",
      image: Sample,
    },
    {
      id: 2,
      name: "Town House Guse",
      location: "Abuja",
      image: Sample,
    },
    {
      id: 3,
      name: "Town House Guse",
      location: "Abuja",
      image: Sample,
    },
    {
      id: 4,
      name: "Town House Guse",
      location: "Abuja",
      image: Sample,
    },
    {
      id: 1,
      name: "Town House Guse",
      location: "Abuja",
      image: Sample,
    },
  ]);
  return (
    <div>
      <div className="location_bg h-[70vh] md:h-[100vh] flex items-center justify-center">
        <div className="flex items-center justify-center flex-col">
          <TiLocation className="bounce_item text-[35px] text-primary" />
          <h1 className="text-primary text-[40px] md:text-[80px] font-[600] uppercase">
            Loca<span className="text-black">tions</span>
          </h1>
        </div>
      </div>
      {/* Here the picture of the properties go in here */}
      <div className="px-[16px] md:px-[30px] py-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px] lg:gap-[50px]">
          {estateData.map((data) => (
            <div className="shadow-lg p-[20px] rounded-2xl">

              <img className="h-[300px] w-full rounded-xl" src={data.image} alt={data.name} />
              <div className="py-[20px] flex flex-col gap-[20px]">
                <div className="flex items-center justify-between">
                  <h1>{data.name}</h1>
                  <p className="text-[12px] font-[100] text-primary gap-[5px] flex items-center">
                    <TiLocation className="text-primary" /> {data.location}
                  </p>
            
                </div>
                <p className="text-[12px] text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  eos voluptatem veniam quisquam incidunt?
                </p>
                <button className="bg-primary w-fit text-[14px] p-[8px] rounded-[5px]">Contact Us</button>
              </div>
            </div>
          ))}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default LocationShowcase;
