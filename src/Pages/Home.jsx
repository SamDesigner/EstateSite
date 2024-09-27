import React from "react";
import Navbar from "../components/Navbar";
import Showcase from "../components/Showcase/Showcase";
import HomeBody from "../components/HomeBody/HomeBody";
import AboutVision from "../components/AboutComponents/AboutVision";
import HomeLocation from '../components/HomeLocation/HomeLocation'
import Footer from '../components/Footer/Footer'
import Partners from "../components/Partners/Partners";
import Testimonials from "../components/Testimonials/Testimonials";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Showcase />
      <HomeBody />
      <AboutVision />
      <HomeLocation />
      <Footer />
    </div>
  );
};

export default Home;
