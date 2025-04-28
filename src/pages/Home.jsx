// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Clients from '../components/Clients';

const Home = () => {
  const [showButton, setShowButton] = useState(false);

  // Handle scroll event to toggle the visibility of the "Scroll to Top" button
  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 300);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Sections */}
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="why-us">
        <WhyChooseUs />
      </section>
      <section id="clients">
        <Clients />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="contact">
        <Contact />
      </section>

      {/* Floating "Scroll to Top" Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-7 right-1 p-3 rounded-full bg-gray-800 text-white shadow-lg hover:bg-gray-700 transition-all"
        >
          <FiArrowUp size={17} />
        </button>
      )}
    </>
  );
};

export default Home;