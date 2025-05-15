import { Link } from "react-router-dom";
import { getProperties } from "../../api/propertyApi";
import { useState, useEffect } from "react";

import { TiLocation } from "react-icons/ti";
import "./HomeLocation.css";
const HomeLocation = () => {
  const [properties, setProperties] = useState([]);
  const BASE_URL = import.meta.env.VITE_API_URL;
  const getAllProperties = async () => {
    try {
      const response = await getProperties();
      setProperties(response);
      console.log("Properties have been gotten");
    } catch (error) {
      console.error("There was an error while getting properties", error);
    }
  };
  useEffect(() => {
    getAllProperties();
  }, []);
  return (
    <div className="max-w-[1440px] mx-auto bg-section flex flex-col gap-[40px] pb-[100px] ">
      <div className="flex items-center justify-center">
        <div data-aos="fade-up" data-aos-duration="1000" className="">
          <div className="flex flex-col items-center justify-center gap-[20px] pb-[20px]">
            <TiLocation className="text-primary text-[40px] font-[100]" />
            <p className="text-primary font-[300] text-[14px]">Properties</p>
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
          {properties && properties.map((property) => (
            <div key={property?._id} className="bg-white p-4 rounded-[10px]">
              {property?.displayImage?.length > 0 ? (
                <img
                  src={`${BASE_URL}/uploads/${property.displayImage}`} // Ensure the path is correct
                  alt={property?.name} // Add alt text for accessibility
                  className="h-[200px] w-full object-cover rounded-[10px]"
                  onError={(e) => {
                    e.target.onerror = null; // Prevents looping
                    e.target.src = "path/to/placeholder/image.jpg"; // Fallback image
                  }}
                />
              ) : (
                <img
                  src="path/to/placeholder/image.jpg" // Fallback image if no displayImage
                  alt="Placeholder" // Alt text for placeholder
                />
              )}
              <div className="py-[10px]">
                <h3 className="text-[20px] font-[500]">{property?.name}</h3>

                <p className="flex gap-[5px] items-center text-[12px] text-gray-500">
                  <span>{/* <FaLocationDot /> */}</span>
                  {property?.location}
                </p>
                <h3 className="text-[12px] text-companyGreen font-[500] mt-[10px]">
                  Description
                </h3>
                {/* <p className="text-[14px]">{property.description}</p> */}
                <p className="text-[14px] h-[8vh]">
                  {property?.description.split(" ").slice(0, 20).join(" ")}
                  {property?.description.split(" ").length > 20 && "..."}
                </p>
              </div>
              <Link to={`/property/${property?._id}`}>
                <button className="bg-companyGreen text-[14px] cursor-pointer text-white p-2 rounded-[5px]">View more</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeLocation;
