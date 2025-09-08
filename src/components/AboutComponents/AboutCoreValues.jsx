import integrityIcon from "../../assets/images/integrityIcon.png";
import ideaIcon from "../../assets/images/ideaIcon.png";
import excellenceIcon from "../../assets/images/excellenceIcon.png";
import { PiHandshakeThin } from "react-icons/pi";
import { GoLightBulb } from "react-icons/go";
import { IoIosStarOutline } from "react-icons/io";
import SectionHeader from "../SectionHeader";
const AboutCoreValues = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-[20px] py-[100px] flex flex-col gap-[100px]">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex items-center justify-center"
      >
        <SectionHeader
          subtitle="CORE VALUES"
          title=" Building your Real Estate Dreams One Step at a time"
        />
      </div>
      <div className="grid md:grid-cols-3 gap-[20px]  w-full  md:px-[40px] divide-y md:divide-x divide-gray-300">
        <div
          data-aos="flip-up"
          className="w-full  flex  items-center justify-center flex-col h-[200px]  "
        >
          <div className="text-[30px] text-maroon">
            {/* <GoTelescope className="text-primary text-[20px] font-[100]" /> */}
            <PiHandshakeThin />
          </div>
          <h3 className="text-[20px] lg:text-[25px] font-[400]">Integrity</h3>
          <p className="text-[14px] text-align text-gray-400 text-center">
            Every Deal Stands on the principle of honesty
          </p>
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="300"
          className="w-full   flex  items-center justify-center flex-col h-[200px]  "
        >
          <div className="text-[30px] text-maroon ">
            {/* <GoTelescope className="text-primary text-[20px] font-[100]" /> */}
           <GoLightBulb />
          </div>
          <h3 className="text-[20px] lg:text-[25px] font-[400]">Ideas</h3>
          <p className="text-[14px] text-align text-gray-400">
            Innovative Solutions. Smarter Living
          </p>
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="500"
          className="w-full flex gap-[10px] items-center justify-center flex-col h-[200px] "
        >
          <div className="text-[30px] text-maroon">
            {/* <GoTelescope className="text-primary text-[20px] font-[100]" /> */}
            <IoIosStarOutline />
          </div>
          <h3 className="text-[20px] lg:text-[25px] font-[400]">Excellence</h3>
          <p className="text-[16px] text-gray-400">
            Beyond Expectations, Every Time
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCoreValues;
