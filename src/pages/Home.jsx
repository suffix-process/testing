// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi'; // for a nice up-arrow icon
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Clients from '../components/Clients';

const Home = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
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
      <section id="Clients">
        <Clients />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="contact">
        <Contact />
      </section>

      {/* Floating Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-1 p-3 rounded-full bg-gray-800 text-white shadow-lg hover:bg-gray-700 transition-all"
        >
          <FiArrowUp size={17} />
        </button>
      )}
    </>
  );
};

export default Home;
