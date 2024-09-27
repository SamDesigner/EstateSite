import React from 'react'
import './Contact.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const ContactHero = () => {
  return (
    <div>
        <div className='max-w-[1440px] mx-auto px-[80px] contact_bg flex items-center justify-center'>
            <div className='text-white text-center'>
                <h1 className='text-[40px] font-[600]'>Contact Us</h1>
                <p>Our Friendly Team Is Ready to attend to your request</p>
            </div>

        </div>
        <div className='max-w-[1440px] mx-auto px-[16px] lg:px-[80px] py-[30px]  flex flex-col lg:flex-row gap-[30px] lg:gap-[35px] '>
            <div className='flex-1 flex flex-col gap-[20px] border-r border-gray-200  md:py-[100px] lg:px-[20px] '>
                <div className='flex flex-col gap-[10px]'>
                    <h6 className='text-primary uppercase text-[12px]'>Social Links</h6>
                    <h1 className='text-[30px] font-[300] '>We're just a call away</h1>
                    <p className='text-[14px] text-gray-400 font-[200]'>Feel free to contact us on social media or fill the form and state our request, our customer services are effiicient and we are ready to respond whenever you need us</p>
                </div>
                <div className='flex gap-[22px] text-[20px]'>
                    <a href='#'><FaInstagram /></a>
                    <a href='#'><FaFacebook /></a>
                    <a href='#'><FaWhatsapp /></a>
                    <a href='#'><FaXTwitter /></a>
                </div>
                <div className='mt-[20px] flex flex-col gap-[10px]'>
                    <h6 className='text-primary text-[10px] uppercase'>Locate Us</h6>
                    <h3 className='text-[24px] font-[300]'>Our Office Location</h3>
                    <p className='text-gray-400 font-[200] text-[14px]'>
                        10, Onisiwo street
                        off Lateef Jakande
                        Ikoyi, Lagos
                    </p>
                </div>
                <div className='mt-[20px] flex flex-col gap-[10px]'>
                    <h6 className='text-primary text-[10px] uppercase'>Active Days</h6>
                    <h3 className='text-[24px] font-[300]'>Opening Hours</h3>
                    <div className='flex flex-col gap-[10px]'>
                        <div className='text-gray-400 font-[200] text-[14px] flex '><div className='w-[50px]'>Mon</div><div>9am - 5pm</div></div>
                        <div className='text-gray-400 font-[200] text-[14px] flex '><div className='w-[50px]'>Tue</div><div>9am - 5pm</div></div>
                        <div className='text-gray-400 font-[200] text-[14px] flex '><div className='w-[50px]'>Wed</div><div>9am - 5pm</div></div>
                        <div className='text-gray-400 font-[200] text-[14px] flex '><div className='w-[50px]'>Thur</div><div>9am - 5pm</div></div>
                        <div className='text-gray-400 font-[200] text-[14px] flex '><div className='w-[50px]'>Fri</div><div>9am - 5pm</div></div>
                    </div>
                
                </div>
            </div>
            <div className='flex-1 flex flex-col gap-[25px] lg:py-[100px]'>
                <div className='flex flex-col gap-[10px]'>
                    <h1 className='text-[30px] font-[300] '>Get In Touch</h1>
                    <p className='text-[12px] text-gray-400'>Kindly fill all details below</p>
                </div>
                <form className='flex flex-col gap-[20px]'>
                    <div className='flex flex-col md:flex-row gap-[20px] '>
                        <div className='flex flex-col gap-[10px] flex-1'>
                            <label className='text-[14px] text-gray-400'>First Name</label> 
                            <input className='border rounded-md p-3' type='text' placeholder='John' required />
                        </div>
                        <div className='flex flex-col gap-[10px] flex-1'>
                            <label className='text-[14px] text-gray-400'>Second Name</label> 
                            <input className='border rounded-md p-3' type='text' placeholder='John' required />
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col gap-[10px] flex-1'>
                            <label className='text-[14px] text-gray-400'>Subject</label> 
                            <input className='border rounded-md p-3' type='text' placeholder='Property at Lekki Phase 1' required />
                        </div>
              
                    </div>
                    <div>
                        <div className='flex flex-col gap-[10px] flex-1'>
                            <label className='text-[14px] text-gray-400'>Phone Number</label> 
                            <input className='border rounded-md p-3' type='text' placeholder='+234 8982302399' required />
                        </div>
              
                    </div>
                    <div>
                        <div className='flex flex-col gap-[10px] flex-1'>
                            <label className='text-[14px] text-gray-400'>Email Address</label> 
                            <input className='border rounded-md p-3' type='email' placeholder='yourmail@mail.com' required />
                        </div>
              
                    </div>
                    <div>
                        <div className='flex flex-col gap-[10px] flex-1'>
                            <label className='text-[14px] text-gray-400'>Message</label> 
                            <textarea className='border h-[100px]'></textarea>
                        </div>
                    </div>
                    <button className='bg-primary py-[10px]'>Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactHero