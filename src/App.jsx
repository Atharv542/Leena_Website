import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Podcast from "./components/Podcast";
import Booking from "./components/Booking";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ServiceMindset from "./components/ServicesMindset";
import ServiceSpirituality from "./components/ServicesSprituality";
import ServiceRelationship from "./components/ServicesRelationship";
import ServiceParenting from "./components/ServicesParenting";



const Home = () => {
  return (
    <>
       <Toaster position="top-center" />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Podcast />
      <Booking />
      <FAQ />
    </>
  );
};

function App() {
  return (
    <Router>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/service-mindset" element={<ServiceMindset/>} />

        <Route path="/service-spirituality" element={<ServiceSpirituality />} />

        <Route path="/service-relationship" element={<ServiceRelationship />} />

        <Route path="/service-parenting" element={<ServiceParenting />} />

      </Routes>

      <Footer />

    </Router>
  );
}

export default App;