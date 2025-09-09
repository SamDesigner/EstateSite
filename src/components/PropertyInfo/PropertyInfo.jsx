import { FaArrowDown } from "react-icons/fa";
const PropertyInfo = () => {
  return (
    <div className="sectionBg relative h-[60vh] md:min-h-[80vh] py-[30px] px-[16px] flex flex-col items-center justify-center gap-[10px]">
      <h3 className="text-gray-400">Acquire a property today</h3>
      <div className="divider"></div>
      <h1 className="text-[30px] w-[400px] text-center">
        Are you searching for or selling beautiful properties?
      </h1>
      <p className="text-gray-400 md:w-[550px] text-center">
        Nigeria is characterised by its rapidly developing infrastructure and
        growing communities. Searching through the vast information on the
        market can be tough and confusing. Find out how we can help you find
        your perfect space.
      </p>
      <div className="absolute bottom-4 font-[200] text-primary flex flex-col items-center justify-center">
        <p>Find out how</p>
        <FaArrowDown className="animate-bounce " />
      </div>
    </div>
  );
};

export default PropertyInfo;
