import "./Showcase.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import newShowcase from "../../assets/images/newShowcase.jpg";
import newShowcaseTwo from "../../assets/images/newShowcaseTwo.jpg";
import { Link } from "react-router-dom";

const Showcase = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row h-[90vh] px-[20px] mt-[10vh]">
        <div className="flex-1 flex items-center justify-center ">
          <div className="h-[50vh] lg:h-[80vh] w-full">
            <img className="h-full w-full object-cover" src={newShowcaseTwo} />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-[20px]  ">
          <div className="text-[30px] md:text-[45px] font-light text-center">
            <h1 className="w-[350px]">Start your search for the perfect</h1>
            <h3 className="text-maroon">home</h3>
          </div>
          <p className="md:w-[450px] text-center text-gray-400">Finding high-quality properties in Nigeria is one thing, falling in love with them is another. We help you do both.</p> 
          <Link>
            <button className="border border-gray-600 text-gray-600 w-[160px] p-2 hover:bg-maroon hover:text-white">Find a Property</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Showcase;
