import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaLocationDot } from "react-icons/fa6";
const PropertyCard = ({ property }) => {
  const BASE_URL = import.meta.env.VITE_API_URL;


  return (
    <div className="bg-white p-4 rounded-[10px]">
      {property?.displayImage?.length > 0 ? (
        <img
          src={`${BASE_URL}/uploads/${property?.displayImage}`} // Ensure the path is correct
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
          <span><FaLocationDot /></span>
          {property?.location}
        </p>
        <h3 className="text-[12px] text-companyGreen font-[500] mt-[10px]">
          Description
        </h3>
        {/* <p className="text-[14px]">{property.description}</p> */}
        <p className="text-[14px] h-[8vh]">
          {property?.description.split(" ").slice(0, 10).join(" ")}
          {property?.description.split(" ").length > 20 && "..."}
        </p>
      </div>
      <Link to={`/property/${property?._id}`}>
        <button className="bg-companyGreen text-[14px] cursor-pointer text-white p-2 rounded-[5px]">
          View more
        </button>
      </Link>
    </div>
  );
};
PropertyCard.propTypes = {
  property: PropTypes.object,
};
export default PropertyCard;
