import React from 'react'
import Home from '../../assets/images/EstateHome.jpg'

const AboutCommunity = () => {
  return (
    <div  className='max-w-[1440px] mx-auto'>
        <div className="border border-t border-b border-gray-200 pt-[60px] pb-[20px] px-[20px]">
            <h1 className="text-[50px] font-[200]">Our Community</h1>
        </div>
        <div className='h-[70vh] mt-[30px]'>
            <div className='h-full flex gap-[20px] overflow-x-scroll'>
                <img className='h-full w-[600px] object-cover' src={Home} /> 
                <img className='h-full w-[600px] object-cover' src={Home} /> 
                <img className='h-full w-[600px] object-cover' src={Home} /> 
                <img className='h-full w-[600px] object-cover' src={Home} /> 
                <img className='h-full w-[600px] object-cover' src={Home} /> 
                <img className='h-full w-[600px] object-cover' src={Home} /> 
            </div>
        </div>
    </div>
  )
}

export default AboutCommunity