import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import GlassCard from './GlassCard';
import {
  Target,
  Rocket,
  ShieldCheck,
  Sparkles,
  Layers,
  Microchip,
  Handshake,
  GitBranch,
  Cpu,
  Globe,
  Building,
  Users,
  Award,
  Clock,
} from "lucide-react";
import visionImage from "../assets/vision.jpg";
import missionImage from "../assets/mission.jpg";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hover: { scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.12)" },
};


const About = () => {
  return (
    // <section className="py-16 bg-[#7f9996] text-white">
    // <section className="py-16 bg-[#9ba3a2] text-black">

    // <section className="py-16 bg-[#FAF1E6] text-black">
    <section className="py-16 bg-[#E4EFE7] text-black">
      <div className="container mx-auto px-6">
        {/* About Us Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-black">
            About US
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl mb-8 opacity-90">
              We drive progress in each process
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

              {/* Established */}
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="bg-[#FFFDFC] p-6 rounded-xl border  cursor-pointer"
              >
                <Building className="w-10 h-10 mx-auto mb-4 text-[#016B81]" />
                <h3 className="text-xl font-semibold mb-2">Established</h3>
                <p className="opacity-80">
                  Founded in 2020, private limited since 2022
                </p>
              </motion.div>

              {/* Certification */}
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="bg-[#FFFDFC] p-6 rounded-xl border  cursor-pointer"
              >
                <Award className="w-10 h-10 mx-auto mb-4 text-[#016B81]" />
                <h3 className="text-xl font-semibold mb-2">Certification</h3>
                <p className="opacity-80">ISO 27001:2022 Certified</p>
              </motion.div>

              {/* Experience */}
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="bg-[#FFFDFC] p-6 rounded-xl border  cursor-pointer"
              >
                <Clock className="w-10 h-10 mx-auto mb-4 text-[#016B81]" />
                <h3 className="text-xl font-semibold mb-2">Experience</h3>
                <p className="opacity-80">Combined 30+ years in BFSI sector</p>
              </motion.div>

              {/* Team Strength */}
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="bg-[#FFFDFC] p-6 rounded-xl border  cursor-pointer"
              >
                <Users className="w-10 h-10 mx-auto mb-4 text-[#016B81]" />
                <h3 className="text-xl font-semibold mb-2">Team Strength</h3>
                <p className="opacity-80">
                  35 professionals across two branches
                </p>
              </motion.div>

            </div>

            {/* /////////////////////////////////////////////// */}
            {/* <StyledWrapper>
              <div className="light-button">
                <div className="bt">
                  <div className="light-holder">
                    <div className="dot" />
                    <div className="light" />
                  </div>
                  <div className="button-holder">
                    <p>Discord</p>
                  </div>
                </div>
              </div>
            </StyledWrapper> */}
            {/* ////////////////////////////////////////// */}
            <p className="text-lg mb-6 opacity-90">
              Suffix Process Solutions Pvt. Ltd. specializes in process
              solutions for the{" "}
              <b>BFSI sector, streamlining operations, reducing costs </b> and{" "}
              <b> enhancing productivity</b> for our clients.
            </p>
            <p className="text-lg opacity-90">
              Our directors bring extensive experience in{" "}
              <b>
                insurance, portfolio management, fraud prevention, and risk
                analysis{" "}
              </b>{" "}
              ensuring we deliver secure and efficient services.
            </p>
          </div>
        </motion.div>

        {/* Vision & Mission Cards - Compact Version */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12">
          {/* Vision Card */}

          <div className="transition-transform mx-2 duration-200 hover:scale-105">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={visionImage}
                  alt="Our Vision"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <div className="flex items-center gap-3">
                    <Target className="w-8 h-8 text-cyan-400" strokeWidth={1.5} />
                    <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                  </div>
                </div>
              </div>
              <div className="p-5 ">
                <p className="text-base mb-4 opacity-90">
                  To be the trusted partner for BFSI sector, delivering
                  intelligent process centralization, automation, and compliance
                  excellence.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                    <p className="text-sm">
                      Setting industry benchmarks for security and operational
                      efficiency
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Layers className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                    <p className="text-sm">
                      Pioneering hybrid solutions combining human expertise with
                      technology
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Microchip className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                    {/* <Layers className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" /> */}
                    <p className="text-sm">
                      Driving innovation to deliver scalable and future-ready process solutions
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>


          {/* Mission Card */}
          <div className="transition-transform duration-200 hover:scale-105">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-2xl overflow-hidden shadow-xl border border-blue-400/20 hover:border-blue-400/40 transition-all"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={missionImage}
                  alt="Our Mission"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <div className="flex items-center gap-3">
                    <Rocket className="w-8 h-8 text-blue-400" strokeWidth={1.5} />
                    <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                  </div>
                </div>
              </div>
              <div className="p-5 bg-white">
                <p className="text-base mb-4 opacity-90">
                  Driving operational excellence with compliance and innovative
                  technology for the BFSI sector.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                    <p className="text-sm">
                      Simplify processes through innovation and domain expertise
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <GitBranch className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                    <p className="text-sm">
                      Offer manual, hybrid, or fully automated approaches
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <Cpu className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                    <p className="text-sm">
                      Ensure ISO 27001:2022 compliant practices
                    </p>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StyledWrapper = styled.div`
  .light-button .bt .light-holder {
    position: absolute;
    height: 200px;
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .light-button .bt .light-holder .dot {
    position: absolute;
    top: 0;
    width: 10px;
    height: 10px;
    background-color: #0a0a0a;
    border-radius: 10px;
    z-index: 2;
  }

  .light-button .bt .light-holder .light {
    position: absolute;
    top: 0;
    width: 200px;
    height: 200px;
    clip-path: polygon(50% 0%, 25% 100%, 75% 100%);
    background: transparent;
  }

  .light-button .bt:hover .button-holder svg {
    fill: rgba(88, 101, 242, 1);
  }

  .light-button .bt:hover .button-holder {
    color: rgba(88, 101, 242, 1);
    outline: rgba(88, 101, 242, 1) 2px solid;
    outline-offset: 2px;
  }

  .light-button .bt:hover .light-holder .light {
    background: linear-gradient(
      180deg,
      rgba(88, 101, 242, 1) 0%,
      rgba(255, 255, 255, 0) 75%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

export default About;
