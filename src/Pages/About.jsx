import React from 'react'
import Navbar from '../components/Navbar'
import AboutHero from '../components/AboutComponents/AboutHero'

import AboutUs from '../components/AboutComponents/AboutUs'
import Testimonials from '../components/Testimonials/Testimonials'
import AboutVision from '../components/AboutComponents/AboutVision'
import StanceValue from '../components/AboutComponents/StanceValue'
import Services from '../components/Services/Services'
import Footer from '../components/Footer/Footer'
import AboutLeaders from '../components/AboutComponents/AboutLeaders'
import AboutOffice from '../components/AboutComponents/AboutOffice'
import AboutCommunity from '../components/AboutComponents/AboutCommunity'
import AboutFaq from '../components/AboutComponents/AboutFaq'
import AboutCoreValues from '../components/AboutComponents/AboutCoreValues'
const About = () => {
  return (
    <div>
        <Navbar />
        <AboutHero />
        <AboutVision />
        <StanceValue />
        <AboutCoreValues />
        {/* <AboutLeaders /> */}
        <AboutOffice />
        <Footer /> 
        {/* <AboutCommunity /> */}
          {/* <AboutFaq />     
       */}
    </div>
  )
}

export default About