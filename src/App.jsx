import Home from "./Pages/Home"
import Contact from './Pages/Contact'
import Showcase from "./components/Showcase/Showcase"
import Services from "./Pages/Services"
import { BrowserRouter as Router , Routes, Route  } from "react-router-dom"
import About from "./Pages/About"
import Properties from "./Pages/Properties"
import Location from "./Pages/Location"
import { useEffect } from "react"
import AOS from "aos";

import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/properties" element={<Properties />} />
                <Route path="/services" element={<Services />} />
                <Route path='/location' element={<Location />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App
