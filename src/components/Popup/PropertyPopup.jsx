import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import useGeneralStore from '../../stores/useGeneral'
import { useState, useEffect } from "react";
const PropertyPopup = ({ data }) => {
  const BASE_URL = import.meta.env.VITE_API_URL;

  const {close} = useGeneralStore()
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);
  useEffect(() => {
    // Trigger re-render after refs are set
    setSwiperReady(true);
  }, []);
  return (
    <div onClick={close} className="bg-[rgba(0,0,0,0.8)]  h-full w-full fixed top-0 left-0 z-[500] flex items-center justify-center">
        <div onClick={close} className="absolute cursor-pointer top-[5%] right-[2%] bg-white text-black p-[15px] rounded-full text-[20px]">
            <GiCancel />
        </div>
      <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-[10px] h-[90vh] w-[70%] flex items-center justify-center ">
      <button ref={prevRef} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-gray-200 p-[20px]  rounded-full"><FaArrowLeft /></button>
      <button ref={nextRef} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-gray-200 p-[20px]  rounded-full"><FaArrowRight /></button>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
        >
          {data &&
            data.map((dataItem, index) => (
              <SwiperSlide key={index}>
                <img
                  className="object-cover  w-[90%] h-[80vh] mx-auto rounded-[10px]"
                  src={`${BASE_URL}/uploads/${dataItem}`}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PropertyPopup;
