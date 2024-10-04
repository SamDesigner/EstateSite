import React from "react";
import Navbar from "../components/Navbar";
import Showcase from "../components/Showcase/Showcase";
import HomeBody from "../components/HomeBody/HomeBody";
import AboutVision from "../components/AboutComponents/AboutVision";
import HomeLocation from '../components/HomeLocation/HomeLocation'
import Footer from '../components/Footer/Footer'

import AboutCoreValues from "../components/AboutComponents/AboutCoreValues";
import HomeServices from "../components/HomeServices/HomeServices";
import WhyChoose from "../components/WhyChoose";
const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Showcase />
      <HomeBody />
      <AboutCoreValues />
      <AboutVision />
      <WhyChoose />
      <HomeServices />
      <HomeLocation />
      <Footer />
    </div>
  );
};

export default Home;
