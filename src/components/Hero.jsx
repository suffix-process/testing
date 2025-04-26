import { motion } from "framer-motion";
// import { FiArrowRight } from "react-icons/fi";
import GlassCard from "./GlassCard";
import { TypeAnimation } from "react-type-animation";
import heroImage from "../assets/hero-image.jpg";
import heroImage2 from "../assets/hero-image2.jpg";
import "../styles/button.css"; // Import your button styles
// import { Home01Icon } from "hugeicons-react";


const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-cyan-50 to-white">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage2}
          alt="BFSI Solutions"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6"
            >
              <span className="text-[#016B81]">Process Solutions</span>{" "}
              <TypeAnimation
                sequence={[
                  "for BFSI Sector",
                  2000,
                  "for Banking",
                  2000,
                  "for Financial Services",
                  2000,
                  "for Insurance",
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="text-gray-600"
              />
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#014953] text-lg mb-8 max-w-lg"
            >
              <b>ISO 27001:2022 certified Company offering manual, automation, and
              hybrid process solutions for verification, QC, and centralization.</b>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* <button className="bg-[#016B81] hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-colors shadow-lg hover:shadow-xl">
                Explore Our Services <FiArrowRight />
              </button> */}

              {/* use the button */}
              {/* <button className="button">
                <p>
                  Explore Our Services →
                </p>
              </button> */}

                {/* //////////////////////// */}
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <GlassCard>
              <div>
                <img
                  src={heroImage}
                  alt="BFSI Solutions"
                  className="w-full h-full object-cover opacity-100"
                />
              </div>
              {/* <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Engagement Models</h3>
                <div className="space-y-4">
                  <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-100">
                    <h4 className="text-cyan-600 font-medium">Complete Manual Solutions</h4>
                    <p className="text-gray-600 text-sm">Leverage our experienced manpower for processes requiring human oversight.</p>
                  </div>
                  <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-100">
                    <h4 className="text-cyan-600 font-medium">Complete Automation</h4>
                    <p className="text-gray-600 text-sm">Transform operations with advanced automation, reducing manual intervention.</p>
                  </div>
                  <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-100">
                    <h4 className="text-cyan-600 font-medium">Hybrid Model</h4>
                    <p className="text-gray-600 text-sm">Tailored blend of manual and automated processes for optimal results.</p>
                  </div>
                </div>
              </div> */}
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
