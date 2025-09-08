import "./About.css";
// import { GoTelescope } from "react-icons/go";
import lagosSeaView from '@/assets/images/lagosSeaView.jpg'
import SectionHeader from "../SectionHeader";
const AboutVision = () => {
  return (
    <div className="h-[100vh]  bg-maroon">
    
      <div className=" flex flex-col md:flex-row items-center h-full">
        <div className="flex-1 h-full bg-black ">
          <img
            src={lagosSeaView}
            className="h-full w-full object-cover"
          />
        </div>
        <div  className="flex-1 flex items-center flex-col justify-center text-white py-[30px] ">
            <SectionHeader 
        subtitle='What we aim to achieve'
        title='Our Vision'
        
      />
      <div className="px-[20px]">

          <h2 className="text-[20px]  md:leading-[80px]  font-[200] text-center">
            To become at all times our 
            clients’ 
            foremost real estate 
            service provider while partnering with them on their own
            vision.
            (Helping them create their dream Real Estate World)
          </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutVision;
