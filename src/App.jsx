import { useState } from "react";
import SEO from "./components/SEO";

// Global Components
import Preloader from "./components/Preloader";
import Popup from "./components/Popup";
import ScrollProgress from "./components/ScrollProgress";
import OfferBar from "./components/OfferBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
// import BackToTop from "./components/BackToTop";

// Sections
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Courses from "./sections/Courses";
import Internship from "./sections/Internship";
import Process from "./sections/Process"; // 
import WhyChoose from "./sections/WhyChoose";
import Statistics from "./sections/Statistics";
// import Team from "./sections/Team";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";
import Gallery from "./sections/Gallery";
import FAQ from "./sections/FAQ";
// import StudentRegistration from "./sections/StudentRegistration";
import Contact from "./sections/Contact";

// Hooks
import useAnimations from "./hooks/useAnimations";

function App() {
  useAnimations();

  // Popup State
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      {/* SEO */}
      <SEO />

      {/* Popup */}
      <Popup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
      />

      {/* Loading Screen */}
      <Preloader />

      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Header */}
      <OfferBar />

      {/* Navbar */}
      <Navbar openPopup={() => setPopupOpen(true)} />

      {/* Main Content */}
      <main>
        {/* Hero */}
        <Hero openPopup={() => setPopupOpen(true)} />

        {/* About */}
        <About />

        {/* Services */}
        <Services />

        {/* Courses */}
        <Courses openPopup={() => setPopupOpen(true)} />

        {/* Internship */}
        <Internship />

        {/* Our Process */}
        <Process />

        {/* Why Choose */}
        <WhyChoose />

        {/* Statistics */}
        <Statistics />

        {/* Our Team */}
        {/* <Team /> */}

        {/* Projects */}
        <Projects />

        {/* Testimonials */}
        <Testimonials />

        {/* Gallery */}
        <Gallery />

        {/* FAQ */}
        <FAQ />

        {/* Student Registration */}
        {/* <StudentRegistration /> */}

        {/* Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Buttons */}
      <WhatsAppButton />
      {/* <BackToTop /> */}
    </>
  );
}

export default App;