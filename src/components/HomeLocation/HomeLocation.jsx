import { getProperties } from "../../api/propertyApi";
import { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";
import Loader from '../Loader/Loader'
import { TiLocation } from "react-icons/ti";
import "./HomeLocation.css";
const HomeLocation = () => {
  const [properties, setProperties] = useState([]);
  const getAllProperties = async () => {
    try {
      const response = await getProperties();
      setProperties(response);
      console.log("Properties have been gotten", response);
    } catch (error) {
      console.error("There was an error while getting properties", error);
    }
  };
  useEffect(() => {
    getAllProperties();
  }, []);
  return (
    <div className="max-w-[1440px] mx-auto bg-section flex flex-col gap-[40px]  lg:min-h-[100vh] md:pb-[100px] ">
      <div className="flex items-center justify-center">
        <div data-aos="fade-up" data-aos-duration="1000" className="">
          <div className="flex flex-col items-center justify-center gap-[20px] pb-[20px]">
            <TiLocation className="text-secondary text-[40px] font-[100]" />
            <p className="text-secondary font-[300] text-[14px]">Properties</p>
            <h2 className="text-[30px] md:w-[500px] text-center">
              Transforming spaces to create vibrant, connected communities.
            </h2>
            <div className="border-b border-secondary  w-[200px]"></div>
          </div>
        </div>
      </div>
      {!properties && <div className="flex flex-col gap-[10px] items-center justify-center"><Loader /><p>Please wait while property is loading...</p></div>}
      <div className=" w-full flex flex-col md:gap-[60px] px-[20px] ">
        {/* First Row of Properties */}
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 lg:grid-cols-3  w-full">
          {properties && properties?.map((property) => (
            <PropertyCard key={property?._id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeLocation;
