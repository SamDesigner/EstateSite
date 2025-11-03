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
import { FaPlay, FaPause } from "react-icons/fa";
import { useRef } from "react";
import ReactPlayer from "react-player";

const PropertyView = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  // const BASE_URL = import.meta.env.VITE_API_URL;
  const [isLoading, setIsLoading] = useState(false);
  const phoneNumber = +2348033064524;
  const { isOpen, open } = useGeneralStore();
  // const [isPlaying, setIsPlaying] = useState(false);
  // const handlePlayPause = () => {
  //   if (!videoRef.current) return;
  //   if (isPlaying) {
  //     videoRef.current.pause();
  //   } else {
  //     videoRef.current.play();
  //   }
  //   setIsPlaying(!isPlaying);
  // };

  // const videoRef = useRef(null);

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
    <div className="pt-[10vh] pb-[150px] ">
      {/* <h1>{property?.images}</h1> */}
      {isOpen && <PropertyPopup data={property?.images} />}
      <div className="pb-[50px] bg-maroon py-[40px] px-[20px] text-white flex justify-between ">
        <div>
          <h1 className=" text-[40px] text-white font-bold ">
            {property?.name}
          </h1>
          <p className="flex flex-col md:flex-row gap-[5px] md:items-center">
            <span className="flex gap-[5px]">
              <IoLocation /> Location:
            </span>{" "}
            {property?.location}
          </p>
          <div className="flex flex-col md:flex-row gap-[10px] mt-[10px]">
            <div className="">
              <a href={whatsappLink} target="_blank">
                <button className="border p-2  text-white font-[500] flex gap-[5px] items-center justify-center rounded-full">
                  {" "}
                  <span className="text-[20px]">
                    <IoLogoWhatsapp />
                  </span>{" "}
                  <span>Text us on Whatsapp</span>
                </button>
              </a>
            </div>
            <div className="">
              <Link to="/appointment">
                <button className="border  w-full text-white p-2 flex gap-[5px] items-center justify-center  rounded-full">
                  <span>
                    <FaRegAddressBook />
                  </span>{" "}
                  Book an Appointment
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <p className="flex items-center text-[30px] font-bold">
            <span className="text-[20px]">
              <TbCurrencyNaira />
            </span>
            {property?.price ? property?.price?.toLocaleString() : "POE"}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[30px] ">
        <div className="flex flex-col gap-[10px]">
          {/* <div>
            {property?.listingType === "sale" ? (
              <span className="bg-green-500 text-white rounded-full text-sm p-[5px]">
                For Sale
              </span>
            ) : (
              <sale className="bg-purple-600 text-white rounded-full text-sm p-[5px]">
                For Lease
              </sale>
            )}
          </div> */}

          <div className="px-[20px] py-[50px] flex flex-col gap-[20px]">
            <h3 className="text-[20px] font-[600] text-maroon">
              Property Description
            </h3>
            <p className="text-justify">{property?.description}</p>
          </div>
        </div>
        {isLoading ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-[5px]">
            <Loader />
            <p>Please wait....</p>
          </div>
        ) : (
          <div className="px-[20px] flex flex-col gap-[20px]">
            <img
              className="object-cover h-[90vh] flex-[2]  rounded-xl "
              src={property?.displayImage}
            />
            <div className="flex flex-col items-center gap-[10px]  flex-[1]">
              <div className="flex  items-center gap-[5px] w-full overflow-x-scroll ">
                {property?.images?.slice(0, 3).map((propertyImage, index) => (
                  <img
                    className="h-[150px] w-[300px] object-cover rounded-xl"
                    key={index}
                    src={propertyImage}
                  />
                ))}
              </div>

              <button
                onClick={open}
                className=" p-2 rounded-[5px] text-maroon w-fit flex items-center text-[14px] gap-[5px] mt-[20px] underline"
              >
                <FaRegImage /> <span></span>View more Images
              </button>
            </div>
          </div>
        )}
      </div>
      <div>
        {property?.video && (
          <div className="mt-[40px] px-[20px] flex flex-col gap-[15px]">
            <h3 className="text-xl md:text-2xl font-semibold text-maroon border-b pb-2 w-fit">
              Property Video
            </h3>
            <div className="flex justify-center relative">
        
              <video
                // ref={videoRef}
                controls
                poster={property?.displayImage}
                className="w-full md:w-[800px] h-[250px] md:h-[450px] rounded-xl border border-gray-200 shadow-md"
              >
                <source src={property.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Custom Play/Pause Button */}
              {/* <button
                onClick={handlePlayPause}
                className="absolute inset-0 flex items-center justify-center text-white bg-black/40 hover:bg-black/60 transition rounded-xl"
              >
                {isPlaying ? (
                  <FaPause className="text-4xl md:text-5xl" />
                ) : (
                  <FaPlay className="text-4xl md:text-5xl" />
                )}
              </button> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyView;
