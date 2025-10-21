import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import AuthLayout from "./layouts/AuthLayout";
// import Showcase from "./components/Showcase/Showcase"
import Services from "./Pages/Services";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
// import About from "./Pages/About";
import Location from "./Pages/Location";
import AllProperties from "./Pages/admin/AllProperties";
import CreateProperty from "./Pages/admin/CreateProperty";
import PropertyView from "./Pages/PropertyView";
import UpdateProperty from "./Pages/admin/UpdateProperty";
import Dashboard from "./Pages/admin/Dashboard";
import { useEffect } from "react";
import AOS from "aos";
import Auth from "./Pages/Auth/Auth";
import Appointment from "./Pages/Appointment";
import SignUp from "./Pages/Auth/SignUp";
import EReceipt from "./Pages/EReceipt";
import "aos/dist/aos.css";
import ProtectedRoute from "./components/ProtectedRoute";

// import ScrollToTop from "./ScrollToTop";
function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/location" element={<Location />} />
          <Route path="/property/:id" element={<PropertyView />} />
          <Route path="/ereceipt" element={<EReceipt />} />
          <Route path="/admin" element={<AuthLayout />}>
            <Route path="login" element={<Auth />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
          {/* <Route path="/admin/login" element={<Auth />} />
          <Route path="/admin/signup" element={<SignUp />} /> */}
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/admin/Dashboard" element={<ProtectedRoute />}>
            <Route element={<Dashboard />}>
              <Route index element={<div />} />
              <Route path="updateProperty/:id" element={<UpdateProperty />} />
              <Route path="createProperty" element={<CreateProperty />} />
              <Route path="properties" element={<AllProperties />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
