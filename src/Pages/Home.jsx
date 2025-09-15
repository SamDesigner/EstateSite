import Navbar from "../components/Navbar";
import Showcase from "../components/Showcase/Showcase";
import HomeBody from "../components/HomeBody/HomeBody";
import AboutVision from "../components/AboutComponents/AboutVision";
import HomeLocation from "../components/HomeLocation/HomeLocation";
import Footer from "../components/Footer/Footer";

import AboutCoreValues from "../components/AboutComponents/AboutCoreValues";
import HomeServices from "../components/HomeServices/HomeServices";
import WhyChoose from "../components/WhyChoose";
import PropertyInfo from "../components/PropertyInfo/PropertyInfo";
import AboutOffice from "../components/AboutComponents/AboutBanner";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Showcase />
      <PropertyInfo />
      <HomeLocation />
      <div id="about">
        <HomeBody />
      </div>
      <AboutVision />
      <WhyChoose />
      <HomeServices />
      <AboutCoreValues />
      <AboutOffice />
      <Footer />
    </div>
  );
};

export default Home;
