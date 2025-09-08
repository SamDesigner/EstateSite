
import droneShotTwo from '../../assets/images/droneShotTwo.jpg'
import SectionHeader from '../SectionHeader';
import "./HomeBody.css";
const HomeBody = () => {
  return (
    <div className="h-[100vh]  bg-yellow-900">

      <div className="flex flex-col-reverse md:flex-row h-full max-w-[1440px] mx-auto flex-row items-center  ">
        <div className="flex-1 ">
         
            <div className="flex flex-col gap-[20px] py-[30px] px-[20px] text-gray-200">
             
              <SectionHeader subtitle='Our Firm' title='About Us' />
              <p className=" font-[200] text-center">
                We are a reputable firm of real estate practitioners driven by a
                dedicated team of qualified and experienced professionals. With
                extensive knowledge and deep expertise in the real estate
                market, we have established ourselves as a trusted service
                provider in the industry. 
              </p>
              <p className=" font-[200] text-center">
                Our offerings are tailored to connect
                clients with solutions that align with their specific needs and
                budget. We are committed to upholding the highest standards of
                integrity and professionalism at all times, while consistently
                improving the quality of our service.
              </p>
            </div>

       
        </div>
        <div className="flex-1  h-full  "> 
   
            <img
              className="h-full w-full   object-cover"
              src={droneShotTwo}
            />
      
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
