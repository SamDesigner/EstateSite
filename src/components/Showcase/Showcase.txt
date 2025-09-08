import "./Showcase.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ShowcaseText from "./ShowcaseText";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
const Showcase = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <button
        ref={prevRef}
        className="absolute left-4 top-[40%] md:top-1/2 -translate-y-1/2 z-10 bg-gray-200 p-[10px] md:p-[20px]   rounded-full"
      >
        <FaArrowLeft />
      </button>
      <button
        ref={nextRef}
        className="absolute right-4 top-[40%] md:top-1/2 -translate-y-1/2 z-10 bg-gray-200 p-[10px] md:p-[20px]  rounded-full"
      >
        <FaArrowRight />
      </button>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Add needed modules here
        spaceBetween={30}
        slidesPerView={1}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {['one', 'two', 'three', 'four'].map((item, index) => (
          <SwiperSlide  key={index} >
            <div className={`showcase_bg_${item} showcase_bg   h-[80vh] lg:h-[100vh] pt-[200px] flex items-center justify-center pb-[60px]`}>
              <ShowcaseText />
            </div>
          </SwiperSlide>
        ))}

       
      </Swiper>
    </>
  );
};

export default Showcase;
