// src/pages/Home.jsx
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Team from '../components/Team';
import Contact from '../components/Contact';
import PrivacyPolicy from './PrivacyPolicy';
import Clients from '../components/Clients';


const Home = () => (
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
      <Clients/>
    </section>
    <section id="team">
      <Team />
    </section>
    <section id="contact">
      <Contact />
    </section>
    

    {/* <section id="privacy" className="bg-gray-50 py-12">
      <PrivacyPolicy />
    </section> */}
  </>
);

export default Home;
