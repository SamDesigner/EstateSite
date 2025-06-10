import integrityIcon from '../../assets/images/integrityIcon.png'
import ideaIcon from '../../assets/images/ideaIcon.png'
import excellenceIcon from '../../assets/images/excellenceIcon.png'
import { GoTelescope } from "react-icons/go";
const AboutCoreValues = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-[20px] py-[100px] flex flex-col gap-[30px]">
      <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="flex items-center justify-center">
        <div className="">
          <div className="flex flex-col items-center justify-center gap-[20px] pb-[20px]">
            <GoTelescope className="text-secondary text-[40px] font-[100]" />
            <p className="text-secondary font-[300] text-[14px]">CORE VALUES</p>
            <h2 className="text-[30px] md:w-[500px] text-center">
              Building your Real Estate Dreams One Step at a time
            </h2>
            <div className="border-b border-secondary  w-[200px]"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[20px] items-center w-full md:flex-row md:justify-between">
        <div 
         data-aos="flip-up"
        className="w-full md:w-[250px]  lg:w-[300px] shadow-md flex gap-[10px] items-center justify-center flex-col h-[150px] rounded-[10px] ">
          <div >
            {/* <GoTelescope className="text-primary text-[20px] font-[100]" /> */}
            <img className='h-[45px]' src={integrityIcon} />
          </div>
          <h3 className="text-[20px] lg:text-[25px] font-[400]">Integrity</h3>
        </div>
        <div 
         data-aos="flip-up"
         data-aos-delay="300"
        className="w-full md:w-[250px]  lg:w-[300px] shadow-md flex gap-[10px] items-center justify-center flex-col h-[150px] rounded-[10px] ">
          <div>
            {/* <GoTelescope className="text-primary text-[20px] font-[100]" /> */}
            <img className='h-[45px]' src={ideaIcon} />
          </div>
          <h3 className="text-[20px] lg:text-[25px] font-[400]">Ideas</h3>
        </div>
        <div 
         data-aos="flip-up"
         data-aos-delay="500"
        className="w-full md:w-[250px]  lg:w-[300px] shadow-md flex gap-[10px] items-center justify-center flex-col h-[150px] rounded-[10px] ">
          <div>
            {/* <GoTelescope className="text-primary text-[20px] font-[100]" /> */}
            <img className='h-[45px]' src={excellenceIcon} />
          </div>
          <h3 className="text-[20px] lg:text-[25px] font-[400]">Excellence</h3>
        </div>
      </div>
    </div>
  );
};

export default AboutCoreValues;
