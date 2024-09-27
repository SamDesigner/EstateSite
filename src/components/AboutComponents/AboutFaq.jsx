import React from 'react'
import { FaPlus } from "react-icons/fa";
const AboutFaq = () => {
  return (
    <div className='py-[80px] '>
        <div className="border border-t border-b border-gray-200 pt-[60px] pb-[20px] px-[20px] py-[50px]">
            <h1 className="text-[50px] font-[200]">FAQ</h1> 
        </div>
            <div className='flex justify-center mt-[8vh]'>
              <div className='w-[500px] flex flex-col gap-[20px]'>
                  <div className='border border-gray-200 flex items-center justify-between p-3'>
                    <h4>Where can you locate us?</h4>
                    <FaPlus />
                  </div>
                  <div className='border border-gray-200 flex items-center justify-between p-3'>
                    <h4>Where can you locate us?</h4>
                    <FaPlus />
                  </div>
                  <div className='border border-gray-200 flex items-center justify-between p-3'>
                    <h4>Where can you locate us?</h4>
                    <FaPlus />
                  </div>
                  <div className='border border-gray-200 flex items-center justify-between p-3'>
                    <h4>Where can you locate us?</h4>
                    <FaPlus />
                  </div>
              </div>
       

        </div>
    </div>
  )
}

export default AboutFaq