import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProperty } from "../../api/propertyApi";
import { IoLocation } from "react-icons/io5";
import { TbCurrencyNaira } from "react-icons/tb";
import { FaRegImage } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaRegAddressBook } from "react-icons/fa";
import { Link } from "react-router-dom";
import useGeneralStore from "../../stores/useGeneral";
import PropertyPopup from "../Popup/PropertyPopup";
import Loader from "../Loader/Loader";
const PropertyView = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  // const BASE_URL = import.meta.env.VITE_API_URL;
  const [isLoading, setIsLoading] = useState(false);
  const phoneNumber = +2348033064524;
  const { isOpen, open } = useGeneralStore();
  const message = encodeURIComponent(
    `Hello I am chatting you from the Asset Allocators site, I am instrested in ${property?.name} property located in ${property?.location}`
  );
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  const getSingleProperty = async () => {
    setIsLoading(true);
    try {
      const response = await getProperty(id);

      setProperty(response);
      console.log("This is the details for the single property", response);
    } catch (error) {
      console.error("There was an error while getting single property", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getSingleProperty();
  }, [id]);
  return (
    <div className="pt-[100px] pb-[150px] px-[20px] ">
      {/* <h1>{property?.images}</h1> */}
      {isOpen && <PropertyPopup data={property?.images} />}
      <div className="pb-[50px]">
        <h1 className="text-center text-[40px] text-companyGreen ">
          PROPERTY DETAILS
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-[30px] ">
        <div className="flex-1 flex flex-col gap-[10px]">
          <div>
            <h1 className="text-[40px] font-[600]">{property?.name}</h1>
            <p className="flex gap-[5px] items-center">
              <span className="flex gap-[5px]">
                <IoLocation /> Location:
              </span>{" "}
              {property?.location}
            </p>
          </div>
          <div>
            {
              property?.listingType === 'sale' ? <span className="bg-green-500 text-white rounded-full text-sm p-[5px]">For Sale</span> : <sale className='bg-purple-600 text-white rounded-full text-sm p-[5px]'>For Lease</sale>
            }
          </div>
          <p className="flex gap-[5px]">
            <span>Price:</span>
            <span className="flex items-center">
              <span className="text-[20px]">
                <TbCurrencyNaira />
              </span>
              {/* {property?.price} */}
              { property?.price ? property?.price?.toLocaleString() : 'POE'}
            </span>
          </p>
          <div>
            <h3 className="text-[20px] font-[600] text-companyGreen">
              Property Description
            </h3>
            <p className="text-justify">{property?.description}</p>
          </div>
          <div className="flex flex-col md:flex-row gap-[10px] mt-[10px]">
            <div className=" flex-1 " >
              <a href={whatsappLink} target="_blank">
                <button className="bg-companyGreen p-2 w-full text-white font-[500] flex gap-[5px] items-center justify-center rounded-full">
                  {" "}
                  <span className="text-[20px]">
                    <IoLogoWhatsapp />
                  </span>{" "}
                  <span>Text us on Whatsapp</span>
                </button>
              </a>
            </div>
            <div className=" flex-1 " >
              <Link to="/appointment">
                <button className=" flex-1 bg-blue-400 w-full text-white p-2 flex gap-[5px] items-center justify-center  rounded-full">
                  <span>
                    <FaRegAddressBook />
                  </span>{" "}
                  Book an Appointment
                </button>
              </Link>
            </div>
          </div>
        </div>
        {isLoading ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-[5px]">
            <Loader />
            <p>Please wait....</p>
          </div>
        ) : (
          <div className="flex-1">
            <img
              className="fit-cover h-[60vh] w-full object-cover "
              src={property?.displayImage}
            />
            <div className="flex flex-col gap-[10px] mt-[20px] w-full">
              <div className="flex gap-[20px] w-full overflow-x-scroll scrollbar-hide">
                {property?.images?.map((propertyImage, index) => (
                  <img
                    className="h-[100px] w-[100px] object-cover "
                    key={index}
                    src={propertyImage}
                  />
                ))}
              </div>

              <button
                onClick={open}
                className="bg-companyGreen p-2 rounded-[5px] text-white w-fit flex items-center text-[14px] gap-[5px] mt-[20px]"
              >
                <FaRegImage /> <span></span>View more Images
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyView;
