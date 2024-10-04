import React from 'react'
import serviceGuy from '../../assets/images/serviceGuy.jpg'
import { MdOutlineSell } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import {Link} from 'react-router-dom'
const HomeServices = () => {
  return (
    <div className='px-[20px] pt-[20px] pb-[50px] md:py-[100px]'>
        <div className='max-w-[1440px] mx-auto bg-primary rounded-3xl  p-[20px] lg:p-[40px] min-h-[85vh]'>
            <div className='flex  flex-col md:flex-row h-[100%] gap-[30px]'>
                {/* Left Image Comes Here */}
                <div
                data-aos="fade-right"
                className='flex-1  '>
                    <img className='h-full object-cover rounded-xl' src={serviceGuy} alt={serviceGuy} />
                </div>
                <div className='flex-1 flex flex-col gap-[20px]'>
                    <h1  data-aos="fade-left"  className='text-[25px] md:text-[50px] text-white'>Our Services include:</h1>
                    <ul className='flex flex-col gap-[25px]'>
                        <li data-aos="fade-left" data-aos-delay='300' className='bg-white flex gap-[20px] items-center p-[10px] rounded-tr-[20px] rounded-br-[5px]'>
                            <span className='bg-primary text-white h-[40px] w-[40px] rounded-[30px] flex items-center justify-center'>
                                <MdOutlineSell />
                            </span>
                            <p className='text-[20px]'>Sales</p>
                        </li>
                        <li  data-aos="fade-left" data-aos-delay='400' className='bg-white flex gap-[20px] items-center p-[10px] rounded-tr-[20px] rounded-br-[5px]'>
                            <span className='bg-primary text-white h-[40px] w-[40px] rounded-[30px] flex items-center justify-center'>
                                <MdOutlineSell />
                            </span>
                            <p className='text-[20px]'>Property Management</p>
                        </li>
                        <li  data-aos="fade-left" data-aos-delay='500' className='bg-white flex gap-[20px] items-center p-[10px] rounded-tr-[20px] rounded-br-[5px]'>
                            <span className='bg-primary text-white h-[40px] w-[40px] rounded-[30px] flex items-center justify-center'>
                                <MdOutlineSell />
                            </span>
                            <p className='text-[20px]'>Lettings</p>
                        </li>
                        <li  data-aos="fade-left" data-aos-delay='600' className='bg-white flex gap-[20px] items-center p-[10px] rounded-tr-[20px] rounded-br-[5px]'>
                            <span className='bg-primary text-white h-[40px] w-[40px] rounded-[30px] flex items-center justify-center'>
                                <MdOutlineSell />
                            </span>
                            <p className='text-[20px]'>Advisory Services</p>
                        </li>
                        <li  data-aos="fade-left" data-aos-delay='700' className='flex justify-end'>
                            <Link to='/services' className='flex gap-[10px] items-center'>Learn more <span><FaArrowRight /></span> </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeServices