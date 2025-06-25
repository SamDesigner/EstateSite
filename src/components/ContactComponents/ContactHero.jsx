import "./Contact.css";
import { FaInstagram } from "react-icons/fa";
import { useRef } from "react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
// import { FaXTwitter } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { showSuccessToast, showErrorToast } from "../../utils/toast";
import Loader from "../Loader/Loader";
const ContactHero = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const phoneNumber = +2348033064524;
  const message = encodeURIComponent(
    `Hello I am texting you from the Asset Allocators website`
  );
  const email = "info@assetsallocators.com";
  const mailtoLink = `mailto:${email}`;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_nfcrqip",
        "template_u3pbyir",
        form.current,
        "MltiYLOsvBs_FIcXY"
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          showSuccessToast("Message Sent Successfully");
          setIsLoading(false);
          form.current.reset();
        },
        (error) => {
          console.error("Email send error:", error.text);
          showErrorToast("An Error Occured, Try Again!!!!");
          setIsLoading(false);
        }
      );
  };

  return (
    <div>
      <div className="max-w-[1440px] mx-auto px-[80px] contact_bg flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-[40px] font-[600]">Contact Us</h1>
          <p>Our Friendly Team Is Ready to attend to your request</p>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-[16px] lg:px-[80px] py-[30px]  flex flex-col lg:flex-row gap-[30px] lg:gap-[35px] ">
        <div className="flex-1 flex flex-col gap-[20px] border-r border-gray-200  md:py-[100px] lg:px-[20px] ">
          <div className="flex flex-col gap-[10px]">
            {/* <h6 className="text-primary uppercase text-[12px]">Social Links</h6>
            <h1 className="text-[30px] font-[300] ">We're just a call away</h1> */}
            <p className="text-[14px] text-gray-400 font-[200]">
              Feel free to contact us on social media or fill the form and state
              our request, our customer services are effiicient and we are ready
              to respond whenever you need us
            </p>
          </div>
          <div className="flex gap-[22px] text-[20px]">
            <a href="https://www.instagram.com/assetallocatorsltd/">
              <FaInstagram />
            </a>
            <a href={whatsappLink} target="_blank">
              <FaWhatsapp />
            </a>
            <a href={mailtoLink} target="_blank">
              {/* <FaXTwitter /> */}
              <IoMailOutline />
            </a>
          </div>
          <div className="mt-[20px] flex flex-col gap-[10px]">
            {/* <h6 className="text-primary text-[10px] uppercase">Locate Us</h6>
            <h3 className="text-[24px] font-[300]">Our Office Location</h3> */}
            <div className="text-gray-400 font-[200] text-[14px] flex items-center gap-[20px]">
              <IoLocationOutline />
              <div>
                Asset Allocators ltd 27A Providence Street, lekki phase1, Lekki,
                Lagos
              </div>
            </div>
          </div>
          <div className="mt-[20px] flex flex-col gap-[10px]">
            {/* <h6 className="text-primary text-[10px] uppercase">
              Phone Numbers
            </h6>
            <h3 className="text-[24px] font-[300]">Place a Call</h3> */}
            <div className="text-gray-600 font-[500] text-[14px] flex items-center gap-[20px]">
              <FaPhoneAlt />
              <div>+2348033064524, +2348087185200</div>
            </div>
            <div className="text-gray-600 font-[500] text-[14px] flex items-center gap-[20px]">
              <IoMailOutline />

              <div>info@assetsallocators.com</div>
            </div>
          </div>
          <div className="mt-[20px] flex flex-col gap-[10px]">
            {/* <h6 className="text-primary text-[10px] uppercase">Active Days</h6>
            <h3 className="text-[24px] font-[300]">Opening Hours</h3> */}
            <div className="flex flex-col gap-[10px]">
              <div className="text-gray-600 font-[400] text-[14px] flex ">
                <div className="w-[50px]">Mon</div>
                <div>9am - 5pm</div>
              </div>
              <div className="text-gray-600 font-[400] text-[14px] flex ">
                <div className="w-[50px]">Tue</div>
                <div>9am - 5pm</div>
              </div>
              <div className="text-gray-600 font-[400] text-[14px] flex ">
                <div className="w-[50px]">Wed</div>
                <div>9am - 5pm</div>
              </div>
              <div className="text-gray-600 font-[400] text-[14px] flex ">
                <div className="w-[50px]">Thur</div>
                <div>9am - 5pm</div>
              </div>
              <div className="text-gray-600 font-[400] text-[14px] flex ">
                <div className="w-[50px]">Fri</div>
                <div>9am - 5pm</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-[25px] lg:py-[100px]">
          <div className="flex flex-col gap-[10px]">
            {/* <h1 className="text-[30px] font-[300] ">Get In Touch</h1> */}
            <p className="text-[14px] text-gray-500">
              Kindly fill all details below
            </p>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-[20px]"
          >
            <div className="flex flex-col md:flex-row gap-[20px] ">
              <div className="flex flex-col gap-[10px] flex-1">
                <label className="text-[14px] text-gray-400">Full Name</label>
                <input
                  className="border rounded-md p-3"
                  type="text"
                  placeholder="John"
                  name="fullName"
                  required
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-[10px] flex-1">
                <label className="text-[14px] text-gray-400">Subject</label>
                <input
                  name="subject"
                  className="border rounded-md p-3"
                  type="text"
                  placeholder="Property at Lekki Phase 1"
                  required
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-[10px] flex-1">
                <label className="text-[14px] text-gray-400">
                  Phone Number
                </label>
                <input
                  name="phoneNo"
                  className="border rounded-md p-3"
                  type="text"
                  placeholder="+234 8982302399"
                  required
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-[10px] flex-1">
                <label className="text-[14px] text-gray-400">
                  Email Address
                </label>
                <input
                  name="emailAddress"
                  className="border rounded-md p-3"
                  type="email"
                  placeholder="yourmail@mail.com"
                  required
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-[10px] flex-1">
                <label className="text-[14px] text-gray-400">Message</label>
                <textarea
                  name="message"
                  className="border h-[100px] p-2"
                  required
                ></textarea>
              </div>
            </div>
            <button className="bg-primary py-[10px] text-white rounded-full flex justify-center items-center gap-[10px]">
              {isLoading && <Loader />}
              {!isLoading && <span>Send</span>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
