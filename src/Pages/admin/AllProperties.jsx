import { useEffect, useState } from "react";
import {  deleteProperty } from "../../api/propertyApi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { showSuccessToast } from "../../utils/toast";
import usePropertyStore from "../../stores/propertyStore";
const AllProperties = () => {
  const { fetchProperties, loading, properties } = usePropertyStore();
  const [propertyItem, setPropertyItem] = useState([]);
  

  useEffect(() => {
    // if (properties.length === 0) {
     
    // }
     fetchProperties();
  }, []);
  const handleDelete = async (user_id) => {
    try {
      const response = await deleteProperty(user_id);
      console.log("Property has been deleted", response);
      setPropertyItem((prev) =>
        prev.filter((property) => property._id !== user_id)
      );
      showSuccessToast('Property Deleted Successfully')
     fetchProperties();

    } catch (error) {
      console.error(
        "There was an error while trying to delete property",
        error
      );
    }
  };

  return (
    <div>
      <h1 className="text-center text-[25px] font-[500] py-[30px]">
        All Properties
      </h1>
      {loading && (
        <div className="text-center">
          <Loader />
          <p>Please wait while property is being fetched</p>
        </div>
      )}

      <div className="grid grid-cols-3 gap-[20px]">
        {properties.map((property) => (
          <div key={property._id} className="bg-white p-4 rounded-[10px]">
            {property?.displayImage?.length > 0 ? (
              <img
                src={property?.displayImage} // Ensure the path is correct
                alt={property.name} // Add alt text for accessibility
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
              <h3 className="text-[20px] font-[500]">{property.name}</h3>

              <p className="flex gap-[5px] items-center text-[12px] text-gray-500">
                <span>
                  <FaLocationDot />
                </span>
                {property.location}
              </p>
              <h3 className="text-[12px] text-companyGreen font-[500] mt-[10px]">
                Description
              </h3>
              <div className="text-[14px] h-[15vh]">
                {" "}
                {property?.description.split(" ").slice(0, 10).join(" ")}
                <p className="text-companyGreen">{property?.description.split(" ").length > 20 && "..."}</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Link to={`/property/${property._id}`}>
                  <button className="bg-companyGreen text-white py-[5px] w-[100px] rounded-[10px] flex gap-[5px] items-center justify-center">
                    <FaEye /> View
                  </button>
                </Link>
              </div>
              <div className="flex gap-[10px]">
                <span
                  className="bg-red-600 text-white p-[10px] rounded-[5px] cursor-pointer"
                  title="Delete a Property"
                  onClick={() => handleDelete(property._id)}
                >
                  <RiDeleteBin6Line />
                </span>
                <span
                  className="bg-companyGreen text-white p-[10px] rounded-[5px]"
                  title="Edit a Property"
                >
                  <Link to={`/admin/Dashboard/updateProperty/${property._id}`}>
                    <MdModeEditOutline />
                  </Link>
                </span>
              </div>
            </div>
          </div>
        ))}
        {/* <a href="/admin/createProperty">Test me</a> */}
      </div>
    </div>
  );
};

export default AllProperties;
