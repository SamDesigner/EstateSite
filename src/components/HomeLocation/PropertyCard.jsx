import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaLocationDot } from "react-icons/fa6";
// import Loader from "../Loader/Loader";
const PropertyCard = ({ property }) => {
  // const BASE_URL = import.meta.env.VITE_API_URL;

  return (
    <>
      {/* Was formally White */}
      <div className="">
        {property?.displayImage?.length > 0 ? (
          <div className="h-[300px] relative ">
            <img
              src={property?.displayImage}
              alt={property?.name}
              className="h-full w-full object-cover "
            />
            <div className="absolute  w-[80px] top-[5px] left-[5px]">
              {property?.listingType === "sale" ? (
                <div className=" w-full  text-gray-[500] text-center border  bg-white/90 backdrop-blur-sm  opacity-4  text-black  text-sm p-[5px]">
                  For Sale
                </div>
              ) :  property?.listingType === "lease" ? (
                <div className=" w-full bg-white/90 backdrop-blur-sm text-center text-gray-[500] text-black text-sm p-[5px]">
                  For Lease
                </div>
              ):(
                 <div className=" w-full bg-white/90 backdrop-blur-sm text-center text-gray-[500] text-black text-sm p-[5px]">
                  Sold Out
                </div>
              )}
            </div>
          </div>
        ) : (
          <h1>No Image</h1>
        )}
        <div className="py-[10px]">
          <div className="flex text-[15px] font-[500] items-center justify-between">
            <h3 className="">{property?.name}</h3>

            {property?.price ? property?.price?.toLocaleString() : "POE"}
          </div>

          <p className="flex gap-[5px] items-center text-[12px] text-gray-500">
            <span>
              <FaLocationDot />
            </span>
            {property?.location?.length > 30
              ? property.location.slice(0, 30) + "..."
              : property?.location}
          </p>
          {/* <div className="mt-[5px]">
            {property?.listingType === "sale" ? (
              <span className="bg-green-700 text-white rounded-full text-sm p-[5px]">
                For Sale
              </span>
            ) : (
              <sale className="bg-purple-600 text-white rounded-full text-sm p-[5px]">
                For Lease
              </sale>
            )}
          </div> */}
          {/* <h3 className="text-[12px] text-companyGreen font-[500] mt-[10px]">
            Description
          </h3>
         
          <p className="text-[14px] h-[8vh]">
            {property?.description.split(" ").slice(0, 10).join(" ")}
            {property?.description.split(" ").length > 20 && "..."}
          </p> */}
        </div>
        <Link to={`/property/${property?._id}`}>
          <button className=" text-[12px] cursor-pointer border-b border-black  p-[5px] ">
            View property
          </button>
        </Link>
      </div>
    </>
  );
};
PropertyCard.propTypes = {
  property: PropTypes.object,
};
export default PropertyCard;
