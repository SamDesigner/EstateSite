import { Link } from "react-router-dom";
const ListingCard = ({
  propertyName,
  propertyDisplayImage,
  propertyPrice,
  propertyLocation,
  propertyID,
  propertyDescription
}) => {
  return (
    <div className="h-[50vh] sectionBg p-2">
      <div className="flex h-full gap-[20px] ">
        <div className="h-full flex-1">
          <img className="h-full w-full object-cover" src={propertyDisplayImage} />
        </div>
        <div className="flex-[2] relative p-[15px]">
          {/* Price and address div */}
          <div>
            <div>
              <h3 className="text-[25px] font-[600] text-maroon">
                {propertyName}
              </h3>
              <p className="text-[14px]">
                <span>₦</span>{" "}
                {propertyPrice ? propertyPrice?.toLocaleString() : "POE"}
              </p>
              <p className="text-[12px]">{propertyLocation}</p>
            </div>
          </div>
          <div className="text-[14px]">
            {propertyDescription}
          </div>
          <Link to={`/property/${propertyID}`}>
            <button className="border absolute bottom-0 right-0 border-maroon text-maroon p-2 hover:bg-maroon hover:text-white">
              View Property
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
