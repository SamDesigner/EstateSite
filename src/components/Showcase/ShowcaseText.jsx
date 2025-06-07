const ShowcaseText = () => {
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="flex  flex-col items-center md:gap-[10px] md:gap-[20px]"
      >
        <h3 className="text-white font-[100]">Explore Real Estate with us</h3>
        <h1 className="text-white uppercase text-[30px] md:text-[40px] md:text-[70px] font-[500] md:w-[600px] md:leading-[80px] text-center">
          <span className="text-customRed">Smart</span> Moves, Asset{" "}
          <br></br>
          <span className="text-customRed">Allocated</span>{" "}
        </h1>
        {/* <p className="font-[100] text-white md:w-[450px] text-center text-[18px]">
          A reliable Nigerian real estate marketing and sales
          consultancy.
        </p> */}
      </div>
    </div>
  );
};

export default ShowcaseText;
