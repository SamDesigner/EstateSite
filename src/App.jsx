import Home from "./Pages/Home"
import Contact from './Pages/Contact'
import Showcase from "./components/Showcase/Showcase"
import Services from "./Pages/Services"
import { BrowserRouter as Router , Routes, Route  } from "react-router-dom"
import About from "./Pages/About"
import Properties from "./Pages/Properties"
function App() {
  return (
    <div>
      
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/properties" element={<Properties />} />
                <Route path="/services" element={<Services />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App
