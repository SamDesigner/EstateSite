import React from "react";
import missionImage from  '../../assets/images/missionImage.jpg'
const StanceValue = () => {
  return (
    <div className="bg-white py-[40px]">
      <div className="max-w-[1440px] mx-auto">
        {/* Stance Section Starts Here */}
        <div className="">
          <div className="">
 
          </div>
          <div className="flex flex-col md:flex-row min-h-[80vh]">
            <div className="flex-1">
                <img className="h-full w-full object-cover rounded-tr-[40px]" src={missionImage} />
            </div>
            <div className="flex-1 px-[16px] lg:px-[25px] py-[40px] flex flex-col gap-[20px] lg:gap-[40px]">
              <h6 className="uppercase text-primary text-[12px]">Mission</h6>
              <h1 className="text-[30px] lg:text-[50px] font-[200]">What we Stand For</h1>
              <div className="flex flex-col gap-[15px] lg:gap-[30px]">
                <h3 className="text-[20px] lg:text-[30px] font-[200]">
                 Our mission is to always go the extra effort at every opportunity in providing  quality service for our client.
                
                </h3>
                <p className="text-gray-400 font-[100]">
                  At Fine & Country we provide the best service to our clients,
                  stakeholders and the property professionals within our
                  network, and beyond. We operate to shape the real estate
                  sector in West Africa through intelligent marketing and
                  transformational leadership.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stance Section Ends Here */}

        {/* Values Starts Here */}
        {/* <div className="flex flex-col lg:flex-row lg:shrink-0">
            <div className="flex-1  py-[40px]">
                    <div className="px-[18px] md:px-[30px] flex flex-col gap-[20px]">
                        <h6 className="text-primary">VALUES</h6>

                        <h1 className="text-[20px] md:text-[30px] lg:w-[500px] font-[200]">
                            As the most iconic brand providing intelligent real estate
                            solutions, we have an enduring corporate culture which is
                            reflected in our values
                        </h1>
                    </div>
            </div>
          <div className="flex-1  grid grid-cols-1 md:grid-cols-2">
            <div className="px-[20px] py-[25px] flex flex-col gap-[20px]">
              <div>
                <h6 className="text-primary">01</h6>
                <h3>People focused</h3>
              </div>
              <ul className="list-disc list-inside text-gray-400 font-[100] leading-[28px] pl-[20px]">
                    <li>Prioritising client needs and exceeding expectations, ensuring satisfaction.</li>
                    <li>Prioritising client needs and exceeding expectations, ensuring satisfaction.</li>
                    <li>Prioritising client needs and exceeding expectations, ensuring satisfaction.</li>
              </ul>
            </div>
            <div className="border-b border-l border-gray-200 px-[20px] py-[25px] flex flex-col gap-[20px]">
              <div>
                <h6 className="text-primary">02</h6>
                <h3>People focused</h3>
              </div>
              <ul className="list-disc list-inside text-gray-400 font-[100] leading-[28px] pl-[20px]">
                    <li>Prioritising client needs and exceeding expectations, ensuring satisfaction.</li>
                    <li>Prioritising client needs and exceeding expectations, ensuring satisfaction.</li>
                    <li>Prioritising client needs and exceeding expectations, ensuring satisfaction.</li>
              </ul>
            </div>
            <div className="border-t border-gray-200  px-[20px] py-[25px] flex flex-col gap-[20px]">
              <div>
                <h6 className="text-primary">03</h6>
                <h3>People focused</h3>
              </div>
              <ul className="list-disc list-inside text-gray-400 font-[100] leading-[28px] pl-[20px]">
                    <li>Prioritising client needs and exceeding expectations, ensuring satisfaction.</li>
                    <li>Prioritising client needs and exceeding expectations, ensuring satisfaction.</li>
                    <li>Prioritising client needs and exceeding expectations, ensuring satisfaction.</li>
              </ul>
            </div>
            <div className="border-l border-gray-200 px-[20px] py-[25px] flex flex-col gap-[20px]">
              <div>
                <h6 className="text-primary">04</h6>
                <h3>People focused</h3>
              </div>
              <ul className="list-disc list-inside text-gray-400 font-[100] leading-[28px] pl-[20px]">
                    <li>Prioritising client needs and exceeding expectations, ensuring satisfaction.</li>
                    <li>Prioritising client needs and exceeding expectations, ensuring satisfaction.</li>
                    <li>Prioritising client needs and exceeding expectations, ensuring satisfaction.</li>
              </ul>
            </div>
          </div> 
          </div>
          */}
        
      </div>
    </div>
  );
};

export default StanceValue;
