import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import '../components/Showcase/Showcase.css'
const Appointment = () => {
  return (
    <div>
      <Navbar />
      <div className="showcase_bg h-[60vh] bg-fixed flex flex-col items-center justify-center text-white px-[16px] text-[40px] font-[500] gap-[10px]">
            <h1 className="text-center ">Book An Appointment</h1>
            <p className="text-[14px] w-[300px] md:w-[500px] text-center">Easily schedule your visit with a few clicks. Book your appointment today for personalized care that fits your schedule!</p>
        </div>
      <div className="py-[100px] flex flex-col gap-[20px] px-[20px] lg:px-[150px]">
        <h1 className="text-center text-[20px]  font-[500]">Kindly Fill the Form Below</h1>
        <div>
        <form className="flex flex-col gap-[20px]  w-full">
          <div className="grid md:grid-cols-2 gap-[20px]">
            <input
              placeholder="Full Name"
              required
              type="text"
              className="border border-gray-400 p-2 rounded-[5px]"
            />
            <input
              placeholder="Email Address"
              required
              type="email"
              className="border border-gray-400 p-2 rounded-[5px]"
            />
          </div>
          <div className="grid grid-cols-2 gap-[20px]">
            <input
              placeholder="Date"
              required
              type='date'
              className="border border-gray-400 p-2 rounded-[5px]"
            />
            <input
              placeholder="Pick A Time"
              required
              type='time'
              className="border border-gray-400 p-2 rounded-[5px]"
            />
          </div>
          <textarea
            placeholder="Description"
            className="border border-gray-400 min-h-[150px] rounded-[5px] p-2"
          />
  

          <div className="flex items-center justify-center mt-[5vh]">
            <button
              type="submit"
              className="bg-companyGreen text-white w-[350px] p-3 rounded-full"
            >
              Submit
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
