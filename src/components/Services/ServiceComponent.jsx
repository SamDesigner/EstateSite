import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ServiceSubPage = ({
  serviceNo,
  serviceSubHead,
  serviceHead,
  serviceText,
}) => {
  return (
    <div className="">
      <div className="flex flex-col gap-[20px] p-[16px] h-full">
        <div className="border border-gray-200 py-[30px] px-[20px] h-full  flex flex-col justify-between">
          <div>
            <div className="text-primary text-[28px] flex flex-col gap-[40px]">
              <div className="bg-primary text-white text-[25px] shadow-md flex items-center justify-center h-[50px] text-center w-[50px] rounded-full">
                {serviceNo}
              </div>

              <h3 className="text-primary uppercase font-[200] text-[14px]">
                {serviceSubHead}
              </h3>
            </div>
            <div className="flex flex-col gap-[25px]">
              <h3 className="font-[300] text-[25px]">{serviceHead}</h3>
              <p className="text-[16px] font-[200] text-black">{serviceText}</p>
            </div>
          </div>
          <Link to="/appointment">
            <button className="border border-primary w-fit py-3 px-6 hover:bg-primary hover:text-white mt-[20px]">
              Book a Consultant
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
ServiceSubPage.propTypes = {
  serviceNo: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  serviceSubHead: PropTypes.string,
  serviceHead: PropTypes.string,
  serviceText: PropTypes.string,
};

export default ServiceSubPage;
