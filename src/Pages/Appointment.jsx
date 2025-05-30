import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import "../components/Showcase/Showcase.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { showSuccessToast, showErrorToast } from "../utils/toast";
import Loader from "../components/Loader/Loader";
const Appointment = () => {
  const form = useRef();
  const [isLoading , setIsLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_nfcrqip",
        "template_ty7h66f",
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
      <Navbar />
      <div className="showcase_bg showcase_bg_one h-[60vh] bg-fixed flex flex-col items-center justify-center text-white px-[16px] text-[40px] font-[500] gap-[10px]">
        <h1 className="text-center ">Book An Appointment</h1>
        <p className="text-[14px] w-[300px] md:w-[500px] text-center">
          Easily schedule your visit with a few clicks. Book your appointment
          today for personalized care that fits your schedule!
        </p>
      </div>
      <div className="py-[100px] flex flex-col gap-[20px] px-[20px] lg:px-[150px]">
        <h1 className="text-center text-[20px]  font-[500]">
          Kindly Fill the Form Below
        </h1>
        <div>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-[20px]  w-full">
            <div className="grid md:grid-cols-2 gap-[20px]">
              <input
                placeholder="Full Name"
                required
                type="text"
                name="fullName"
                className="border border-gray-400 p-2 rounded-[5px]"
              />
              <input
                placeholder="Email Address"
                required
                name="emailAddress"
                type="email"
                className="border border-gray-400 p-2 rounded-[5px]"
              />
            </div>
            <div className="grid grid-cols-2 gap-[20px]">
              <input
                placeholder="Date"
                required
                name="date"
                type="date"
                className="border border-gray-400 p-2 rounded-[5px]"
              />
              <input
                placeholder="Pick A Time"
                required
                name="time"
                type="time"
                className="border border-gray-400 p-2 rounded-[5px]"
              />
            </div>
            <textarea
              placeholder="Description"
              name="description"
              className="border border-gray-400 min-h-[150px] rounded-[5px] p-2"
            />

            <div className="flex items-center justify-center mt-[5vh]">
              <button
                type="submit"
                className="bg-companyGreen text-white w-[350px] p-3 rounded-full flex items-center justify-center gap-[10px]"
              >
                {isLoading && <Loader />}
                {!isLoading && <span>Submit</span>}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Appointment;
