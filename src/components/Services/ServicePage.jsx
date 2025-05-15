import ServiceComponent from "./ServiceComponent";
import './Services.css'
const ServicePage = () => {
  return (
    <div className="max-w-[1440px] mx-auto h-auto">

      <div className=" w-full flex flex-col-reverse service_bg px-[40px] gap-[30px] pt-[300px] pb-[40px]">
  
        <div className="flex-1 text-white">
          <h1 className="text-white text-[40px] font-[500]">Our Services</h1>
          <p className="w-[700px] text-justify">
            We are commited to excellence in the services we provided and in the
            results we attain for clients. We achieve the highest quality of
            delivery bt attractingm developing and the best professionalsand
            investingn in latest.
          </p>

        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] py-[35px] px-[16px] lg:px-[40px] ">
        <ServiceComponent
          serviceNo="01"
          serviceSubHead="Support"
          serviceHead="Estate Agency"
          serviceText="We proudly represent both buyers and sellers, dedicating ourselves
              to conducting comprehensive research on key details of every
              transaction. Our goal is to ensure that both parties are fully
              informed and receive the best possible outcome. By understanding
              the unique needs of each side, we facilitate smooth, transparent,
              and mutually beneficial transactions that foster long-term
              relationships and trust."
        />
        <ServiceComponent
          serviceNo="02"
          serviceSubHead="Support"
          serviceHead="Sales"
          serviceText="We would normally undertake to sell the property for the best
              price within a suitable time frame and to act as the seller’s
              representative in managing all aspects of the sale. This commences
              with the initial appraisal of the property including advice on
              possible sale price, marketing and promotion of your property,
              generates interest in prospective buyers and handle negotiations
              which can at times be sensitive."
        />
        <ServiceComponent
          serviceNo="03"
          serviceSubHead="Lettings"
          serviceHead="Lettings"
          serviceText="We have systems and processes in place to select the best possible
              tenant at the time, maintain records of the condition of the
              premises and ensure rent is paid on time thereby meeting the
              expectations of the Client. We provide exclusive listings, daily
              showings, hands on management and knowledge of contract leases. We
              further recognize the need to adapt a strategic letting program to
              attract the desired caliber of tenants. "
        />
        <ServiceComponent
          serviceNo="04"
          serviceSubHead="Support"
          serviceHead="Property Management"
          serviceText="  Property Management typically involves the managing of a property
              that is owned by another party or entity. The property manager
              acts on behalf of the owner to preserve the value of the property
              while generating income, the managed properties may include
              residential properties, commercial retail space or industrial
              warehouse space. "
        />
        <ServiceComponent
          serviceNo="05"
          serviceSubHead="Support"
          serviceHead="Advisory Services"
          serviceText="   We are Business advisors for Real Estate, we help you when dealing
              with multiple properties or a single critical facility to
              determine where and how you purchase, lease, or sell Real Estate
              can affect your company or individual operations. To assist in
              making the Right Real Estate Decisions that ultimately makes you
              money.
"
        />
        <ServiceComponent
          serviceNo="06"
          serviceSubHead="Transformation"
          serviceHead="Renovation and Redesign"
          serviceText="At Asset Allocators, we don’t just manage assets — we transform them. Our renovation and redesign services are tailored to breathe new life into residential and commercial properties. From outdated interiors to underutilized spaces, we turn potential into performance with thoughtful design, quality craftsmanship, and a keen eye for detail.
        "
        />
      </div>
      {/* <ServiceSubPage /> */}
    </div>
  );
};

export default ServicePage;
