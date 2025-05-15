import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProperty } from "../../api/propertyApi";
import { IoLocation } from "react-icons/io5";
import { TbCurrencyNaira } from "react-icons/tb";
import { FaRegImage } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";    
import { FaRegAddressBook } from "react-icons/fa";
import {Link} from 'react-router-dom'
import useGeneralStore from '../../stores/useGeneral'
import PropertyPopup from "../Popup/PropertyPopup";
const PropertyView = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const phoneNumber = +2348075210272;
  const {isOpen , open } = useGeneralStore()
  const message = encodeURIComponent(
    `Hello I am chatting you from the Asset Allocators site, I am instrested in ${property?.name} property located in ${property?.location}`
  );
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  const getSingleProperty = async () => {
    try {
      const response = await getProperty(id);
      setProperty(response);
      console.log("This is the details for the single property", response);
    } catch (error) {
      console.error("There was an error while getting single property", error);
    }
  };
  useEffect(() => {
    getSingleProperty();
  }, [id]);
  return (
    <div className="pt-[100px] pb-[150px] px-[20px] ">
       {isOpen && <PropertyPopup data={property?.images} />}
      <div className="pb-[50px]">
        <h1 className="text-center text-[40px] text-companyGreen ">
          PROPERTY DETAILS
        </h1>
      </div>
      <div className="flex gap-[30px] ">
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
          <p className="flex gap-[5px]">
            <span>Price:</span>
            <span className="flex items-center">
              <span className="text-[20px]">
                <TbCurrencyNaira />
              </span>
              {/* {property?.price} */}
              {property?.price?.toLocaleString()}
            </span>
          </p>
          <div>
            <h3 className="text-[20px] font-[600] text-companyGreen">
              Property Description
            </h3>
            <p className="text-justify">{property?.description}</p>
          </div>
          <div className="flex gap-[10px] mt-[10px]">
                <a href={whatsappLink} target="_blank">
                    <button className="bg-companyGreen p-2 text-white font-[500] rounded-[5px] flex gap-[5px] items-center"> <span className="text-[20px]"><IoLogoWhatsapp /></span> <span>Text us on Whatsapp</span></button>
                </a>
                <Link to='/appointment'>
                    <button className="w-fit bg-blue-400 text-white p-2 flex gap-[5px] items-center rounded-[5px]"><span><FaRegAddressBook /></span> Book an Appointment</button>
                </Link>

          </div>
        </div>
        <div className="flex-1">
          <img
            className="fit-cover"
            src={`${BASE_URL}/uploads/${property?.displayImage}`}
          />
          <div className="flex flex-col gap-[10px] mt-[20px]">
            <div className="flex gap-[20px]">
              {property?.images?.map((propertyImage, index) => (
                <img
                  className="h-[100px] w-[100px] object-cover "
                  key={index}
                  src={`${BASE_URL}/uploads/${propertyImage}`}
                />
              ))}
            </div>
    
            <button onClick={open} className="bg-companyGreen p-2 rounded-[5px] text-white w-fit flex items-center text-[14px] gap-[5px] mt-[20px]">
              <FaRegImage /> <span></span>View more Images
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyView;
