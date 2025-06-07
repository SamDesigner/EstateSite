
import Navbar from '../components/Navbar'
import AboutHero from '../components/AboutComponents/AboutHero'

// import AboutUs from '../components/AboutComponents/AboutUs'

import AboutVision from '../components/AboutComponents/AboutVision'
import StanceValue from '../components/AboutComponents/StanceValue'

import Footer from '../components/Footer/Footer'
// import AboutLeaders from '../components/AboutComponents/AboutLeaders'
import AboutOffice from '../components/AboutComponents/AboutBanner'

// import AboutFaq from '../components/AboutComponents/AboutFaq'
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
          {/* <AboutFaq />      */}
      
    </div>
  )
}

export default About