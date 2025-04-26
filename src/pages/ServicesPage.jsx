import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';

const ServicesPage = () => {
  return (
    <>
      {/* <section className="py-32 bg-gradient-to-b from-[#006B81] to-[#003D4A] text-black">
        <div className="container mx-auto px-4 text-center text-black">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-black" text-black>Our Services</h1>
          <p className="text-white/80 text-xl max-w-3xl mx-auto text-black">
            Explore tailored BFSI process solutions—manual execution, robotic process automation (RPA), and hybrid models—designed to streamline operations and ensure compliance.
          </p>
        </div>
      </section> */}
      <Services />
      <WhyChooseUs />
    </>
  );
};

export default ServicesPage;