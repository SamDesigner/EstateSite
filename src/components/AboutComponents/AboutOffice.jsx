import React from 'react'
import House from '../../assets/images/EstateHome.jpg'
import { GoTelescope } from "react-icons/go";
const AboutOffice = () => {
  return (
    <div className='max-w-[1440px] mx-auto py-[100px]'>
        <div className="flex items-center justify-center">
          <div className="">
            <div className="flex flex-col items-center justify-center gap-[20px] pb-[20px]">
              <GoTelescope className="text-primary text-[40px] font-[100]" />
              <p className="text-primary font-[300] text-[14px]">Our Office</p>
              <h2 className="text-[30px] md:w-[500px] text-center">Visit Our Office</h2>
              <div className="border-b border-primary  w-[200px]"></div>
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row  lg:border-b'>
            <div className='flex-1'>
                <div>
                    <div className='border-b border-gray-200 flex flex-col gap-[60px] py-[30px] px-[16px] md:px-[0px] md:pl-[90px]'>
                        <h6 className='text-primary text-[14px]'>LEARN ABOUT OUR OFFICE</h6>
                        <h2 className='text-[30px] font-[200]'>Commercial offices & event space</h2>
                    </div>
                    <div className='flex flex-col gap-[20px] md:gap-[50px] px-[16px] md:px-[0px] md:pl-[40px] lg:pl-[90px] mt-[30px] pr-[20px] pb-[70px]'>
                        
                        <p className='font-[200] text-gray-400'>In the center of Ikoyi, The Finery is an immersive workplace oasis that actively fosters creativity, champions profitable commercial activities, and hosts incredible events. For corporate companies searching for adaptable short-, mid-, and long-term office suites, our workspaces are especially available.</p>
                        <div>
                            <button className='border border-primary py-[15px] px-[40px]'>Learn more</button>
                        </div>
                     
                    </div>
                </div>
            </div>
            <div className='flex-1 border-l p-[20px]'>
                <div className='h-full w-full'>
                    <img className='h-full w-full object-cover' src={House} />
                </div>
       
            </div>
        </div>
    </div>
  )
}

export default AboutOffice