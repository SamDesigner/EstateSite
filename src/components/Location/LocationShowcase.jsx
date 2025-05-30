import {  useEffect } from "react";
import "./Location.css";
import PropertyCard from "../HomeLocation/PropertyCard";
import Loader from "../Loader/Loader";
import { TiLocation } from "react-icons/ti";
import usePropertyStore from "../../stores/propertyStore";
const LocationShowcase = () => {
  const { properties, fetchProperties, loading} = usePropertyStore();
  useEffect(() => {
    if (properties.length === 0) {
      fetchProperties();
    }
  }, []);
  return (
    <div>
      <div className="location_bg h-[50vh] md:h-[70vh] flex items-center justify-center">
        <div className="flex items-center justify-center flex-col">
          <TiLocation className="bounce_item text-[35px] text-primary" />
          <h1 className="text-primary text-[40px] md:text-[80px] font-[600] uppercase">
            Loca<span className="text-black">tions</span>
          </h1>
        </div>
      </div>
      {/* Here the picture of the properties go in here */}
      <div className="px-[16px] md:px-[30px] py-[80px]">
        {loading && <Loader />}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {properties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationShowcase;
