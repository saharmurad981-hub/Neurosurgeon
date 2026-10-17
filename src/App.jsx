import { BrowserRouter  ,Routes, Route } from "react-router";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About"
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs" 
import Appointment from "./pages/Appointment";

export default function App() {
  return (
    <div>
     
       <Navbar />

       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/services" element={<Services />} />
         <Route path="/contact" element={<ContactUs />} />  
          <Route path="/appointment" element={<Appointment />} />   
          </Routes>
        <Footer/>

     
    </div>
  );
}


