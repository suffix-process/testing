import About from '../components/About';
import Team from '../components/Team';
import WhyChooseUs from '../components/WhyChooseUs';

const AboutPage = () => {
  return (
    <>
      {/* <section className="py-32 bg-gradient-to-b from-[#006B81] to-[#003D4A]">
        <div className="container mx-auto px-4 text-center ">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">About Us</h1>
          <p className="text-white/80 text-xl max-w-3xl mx-auto text-black">
            Suffix Process Solutions Pvt. Ltd. is a BFSI-focused, ISO 27001:2022 certified firm offering manual, automation, and hybrid process solutions.
          </p>
        </div>
      </section> */}
      <About />
      <Team />
      <WhyChooseUs />
    </>
  );
};

export default AboutPage;