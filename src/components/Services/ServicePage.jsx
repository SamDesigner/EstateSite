import ServiceComponent from "./ServiceComponent";
import "./Services.css";
const ServicePage = () => {
  return (
    <div className="max-w-[1440px] mx-auto h-auto">
      <div className=" w-full flex flex-col-reverse service_bg px-[20px] lg:px-[40px] gap-[30px] pt-[300px] pb-[40px]">
        <div className="flex-1 text-white">
          <h1 className="text-white text-[40px] font-[500]">Our Services</h1>
          <p className="md:w-[700px] text-justify">
            We proudly represent both buyers and sellers, dedicating ourselves
            to conducting comprehensive research on key details of every
            transaction. Our goal is to ensure that both parties are well,
            informed and received best possible outcomes. By understanding the
            needs of each side. We facilitate smooth, transparent and mutually
            beneficial transactions. That Foster long-term
            relationship and trust.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] py-[35px] px-[16px] lg:px-[40px] ">
        {/* <ServiceComponent
          serviceNo="01"
          serviceHead="Estate Agency"
          serviceText="Whether representing the buyer or the seller, certain information must be researched in order to assure a transaction that will work for both parties.
"
        /> */}
        <ServiceComponent
          serviceNo="01"
          serviceHead="Sales"
          serviceText="
                We normally undertake to act as sellers or buyers of property for the best price within a suitable time frame and to act as a client’s representative through out the entire process of a sale of a purchase.
                This commences with the initial appraisal of the property including advice on possible sale price, marketing and promotion of the property, generates interest in prospective buyers and handle negotiations 
                which can at times be sensitive.As the intermediary, we can relieve some of the stress that you may otherwise feel by providing quality services from our vast experience of the local and international trends and conditions."
        />
        <ServiceComponent
          serviceNo="02"
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
          serviceNo="03"
          serviceHead="Property Management"
          serviceText="  Property Management typically involves the managing of a property
              that is owned by another party or entity. The property manager
              acts on behalf of the owner to preserve the value of the property
              while generating income, the managed properties may include
              residential properties, commercial retail space or industrial
              warehouse space. "
        />
        <ServiceComponent
          serviceNo="04"
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
          serviceNo="05"
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
