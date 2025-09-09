import { useEffect } from "react";
import "./Location.css";
import PropertyCard from "../HomeLocation/PropertyCard";
import Loader from "../Loader/Loader";
import { TiLocation } from "react-icons/ti";
import usePropertyStore from "../../stores/propertyStore";
import ListingCard from "../HomeLocation/ListingCard";
const LocationShowcase = () => {
  const { properties, fetchProperties, loading } = usePropertyStore();
  useEffect(() => {
    if (properties.length === 0) {
      fetchProperties();
    }
  }, []);
  return (
    <div>
      <div className="mt-[15vh] text-[30px] px-[20px] ">
        <h1>The latest featured listings</h1>
      </div>
      {/* Here the picture of the properties go in here */}
      <div className="px-[16px] md:px-[30px] py-[30px]">
        {loading && <Loader />}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {properties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div> */}
      </div>
      {/* Demo display */}
      <div className="grid  gap-[20px] px-[20px]">
        {properties.map((property) => (
          <>
            <ListingCard
            className='hidden md:flex'
              key={property._id}
              propertyName={property?.name}
              propertyDisplayImage={property?.displayImage}
              propertyPrice={property?.price}
              propertyLocation={property?.location}
              propertyID={property?._id}
              propertyDescription={property?.description}
            />

            <PropertyCard className='md:hidden' key={property._id} property={property} />
          </>
        ))}
      </div>
    </div>
  );
};

export default LocationShowcase;
