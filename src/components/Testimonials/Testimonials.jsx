import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import testPic from "../../assets/images/showcaseBg.jpg";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import './testimonial.css'
import 'swiper/css/pagination';
const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Farha Khan",
      testimonial:
        "They provided constant feedback on the progress of the development at all material stages. They worked closely with us through completion and exchange of title, and also conducted inspections, and maintained dialogue with the developers, and ensured that we were ultimately satisfied with the purchase.",
      image: testPic,
    },
    {
      id: 2,
      name: "Farha Khan",
      testimonial:
        "They provided constant feedback on the progress of the development at all material stages. They worked closely with us through completion and exchange of title, and also conducted inspections, and maintained dialogue with the developers, and ensured that we were ultimately satisfied with the purchase.",
      image: testPic,
    },
    {
      id: 3,
      name: "Farha Khan",
      testimonial:
        "They provided constant feedback on the progress of the development at all material stages. They worked closely with us through completion and exchange of title, and also conducted inspections, and maintained dialogue with the developers, and ensured that we were ultimately satisfied with the purchase.",
      image: testPic,
    },
    {
      id: 4,
      name: "Farha Khan",
      testimonial:
        "They provided constant feedback on the progress of the development at all material stages. They worked closely with us through completion and exchange of title, and also conducted inspections, and maintained dialogue with the developers, and ensured that we were ultimately satisfied with the purchase.",
      image: testPic,
    },
    {
      id: 5,
      name: "Farha Khan",
      testimonial:
        "They provided constant feedback on the progress of the development at all material stages. They worked closely with us through completion and exchange of title, and also conducted inspections, and maintained dialogue with the developers, and ensured that we were ultimately satisfied with the purchase.",
      image: testPic,
    },
    {
      id: 6,
      name: "Farha Khan",
      testimonial:
        "They provided constant feedback on the progress of the development at all material stages. They worked closely with us through completion and exchange of title, and also conducted inspections, and maintained dialogue with the developers, and ensured that we were ultimately satisfied with the purchase.",
      image: testPic,
    },
  ]);
  return (
    <div className="py-[40px]  max-w-[1440px] mx-auto">
      <div className="">
        <div className="border border-t border-b border-gray-200 pt-[60px] pb-[20px] px-[20px]">
          <h1 className="text-[50px] font-[200]">Testimonials</h1>
        </div>
      </div>
      <div className="px-[20px] h-full">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwipes"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} >
              <div className="border border-gray-200 flex flex-col gap-[20px] p-8 mt-[20px] h-full">
                <div>
                  <p className="text-[14px] text-gray-400 font-[100]">
                    {testimonial.testimonial}
                  </p>
                </div>

                <div className="flex gap-[10px]">
                  <div className="h-[50px] w-[50px] rounded-full">
                    <img
                      className="h-full w-full rounded-full"
                      src={testimonial.image}
                    />
                  </div>
                  <div className="flex flex-col ">
                    <h3 className="text-[14px] text-primary font-[200]">CEO</h3>
                    <h2 className="font-[300] text-[14px]">
                      {testimonial.name}
                    </h2>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
