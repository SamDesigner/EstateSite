import "./About.css";
import { Link } from "react-router-dom";
const AboutBanner = () => {
  return (
    <div className="max-w-[1440px] mx-auto pt-[100px]">
      <div className="aboutContact_bg flex items-center justify-center flex-col gap-[20px] text-white">
        <h1 className="text-[40px] text-center font-[500]">
          Secure Your Future: Invest in an Asset Today
        </h1>
        <p>
          Ready to take the next step? Get in touch with us today and let's make
          it happen!
        </p>
        <button className="border border-white py-[8px] px-[20px] rounded-full hover:bg-white hover:text-black">
          <Link to="/contact">Get in touch</Link>
        </button>
      </div>
    </div>
  );
};

export default AboutBanner;
