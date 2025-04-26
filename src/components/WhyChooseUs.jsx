import React, { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import GradientCard from "./GradientCard";
import missionImage from '../assets/mission.jpg';

import { 
  ShieldCheck, 
  Cpu, 
  GitBranch,
  Layers,
  Rocket,
  Sparkles,
  Users,
  Clock,
  UserCheck,
  BarChart2,
  Lock,
  Server,
  BrainCircuit,
  Bot,
  Globe,
  Database,
  Fingerprint
} from 'lucide-react';

const Counter = ({ from = 0, to, suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(from);
  const rounded = useTransform(motionValue, latest => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, to, {
        duration: 1.5,
        ease: 'easeOut'
      });
      return controls.stop;
    }
  }, [isInView, motionValue, to]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "BFSI-Focused Expertise",
      description: "Specialized solutions tailored for banking, financial services, and insurance sectors.",
      icon: <BarChart2 className="w-6 h-6" />,
      color: "bg-[#4faec2]"
    },
  
    
    {
      title: "Hybrid Process Models",
      description: "Combine human expertise with RPA and AI for optimal efficiency.",
      icon: <Layers className="w-6 h-6" />,
      color: "bg-[#4faec2]"
    },
    {
      title: "ISO 27001:2022 Certified",
      description: "Enterprise-grade security for all your sensitive data.",
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "bg-[#4faec2]"
    },
    {
      title: "Intelligent Automation",
      description: "NLP, OCR, API integrations and upcoming AI capabilities.",
      icon: <BrainCircuit className="w-6 h-6" />,
      color: "bg-[#4faec2]"
    },
    {
      title: "Compliance Excellence",
      description: "Built-in compliance with IRDA, KYC, AML and other regulations.",
      icon: <Fingerprint className="w-6 h-6" />,
      color: "bg-[#4faec2]"
    },
    {
      title: "Scalable Infrastructure",
      description: "Cloud-based solutions with business continuity planning.",
      icon: <Server className="w-6 h-6" />,
      color: "bg-[#4faec2]"
    },
    {
      title: "RPA Specialists",
      description: "Excel automation, invoice processing, loan processing bots.",
      icon: <Bot className="w-6 h-6" />,
      color: "bg-[#4faec2]"
    },
    {
      title: "Global Standards",
      description: "Services that meet international benchmarks and protocols.",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-[#4faec2]"
    },
    {
      title: "Data Security",
      description: "End-to-end encryption and strict access controls.",
      icon: <Lock className="w-6 h-6" />,
      color: "bg-[#4faec2]"
    }
  ];

  return (
    <section className="py-20 bg-[#E4EFE7] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-10 mix-blend-multiply"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400 rounded-full filter blur-3xl opacity-10 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-black px-4 py-1 rounded-full text-sm font-medium inline-flex items-center">
              <Rocket className="w-4 h-4 mr-2" />
              WHY CHOOSE US
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-black">
              The Suffix Advantage
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading BFSI firms, we deliver secure, scalable solutions that combine{" "}
            <span className="font-semibold text-gray-800">human expertise</span> with{" "}
            <span className="font-semibold text-gray-800">cutting-edge automation</span>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10 }}
            >
              <div className="h-full bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                <div className="relative h-full flex flex-col">
                  {/* Animated header */}
                  <div className={`${reason.color} h-2 w-full`}></div>
                  
                  <div className="p-6 flex-grow">
                    <div className="flex items-start gap-4">
                      <div className={`${reason.color} p-3 rounded-lg text-white flex-shrink-0 group-hover:rotate-6 transition-transform`}>
                        {reason.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">{reason.title}</h3>
                        <p className="text-gray-600">{reason.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated footer */}
                  <div className="px-6 pb-4">
                    <motion.div 
                      className="w-full bg-gray-100 rounded-full h-1.5"
                      initial={{ scaleX: 0, originX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <div className={`h-1.5 rounded-full ${reason.color}`}></div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Skilled Professionals */}
            <GradientCard>
            <motion.div whileHover={{ y: -5 }} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <motion.div
                  initial={{ scale: 0.6 }}
                  whileInView={{ scale: 1 }}
                  className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-black"
                >
                  <Counter to={35} suffix="+" />
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-800">Skilled Professionals</h3>
                <p className="text-gray-500 mt-2">Team across two branches</p>
              </div>
              <div className="bg-blue-50 px-2 py-2 text-center text-blue-600 text-sm font-medium">
                <Sparkles className="inline w-4 h-4 mr-1" /> Expert Workforce
              </div>
            </motion.div>
            </GradientCard>

            {/* Years Experience */}
            <GradientCard>
            <motion.div whileHover={{ y: -5 }} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Clock className="w-8 h-8 text-purple-600" />
                  </div>
                </div>
                <motion.div
                  initial={{ scale: 0.6 }}
                  whileInView={{ scale: 1 }}
                  className="text-5xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-fuchsia-500 bg-clip-text text-black"
                >
                  <Counter to={20} suffix="+" />
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-800">Years Combined Experience</h3>
                <p className="text-gray-500 mt-2">In BFSI sector leadership</p>
              </div>
              <div className="bg-purple-50 px-4 py-2 text-center text-purple-600 text-sm font-medium">
                <ShieldCheck className="inline w-4 h-4 mr-1" /> Industry Veterans
              </div>
            </motion.div>
            </GradientCard>

            {/* Automation Bots */}
            <GradientCard>
            <motion.div whileHover={{ y: -5 }} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Bot className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <motion.div
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  className="text-5xl font-bold mb-2 bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-black"
                >
                  <Counter to={10} suffix="+" />
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-800">Automation Bots</h3>
                <p className="text-gray-500 mt-2">Specialized RPA solutions</p>
              </div>
              <div className="bg-green-50 px-4 py-2 text-center text-green-600 text-sm font-medium">
                <Cpu className="inline w-4 h-4 mr-1" /> Intelligent Automation
              </div>
            </motion.div>
            </GradientCard>

            {/* ISO Compliance */}
            <GradientCard>
            <motion.div whileHover={{ y: -5 }} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Lock className="w-8 h-8 text-amber-600" />
                  </div>
                </div>
                <motion.div
                  initial={{ scale: 0.6 }}
                  whileInView={{ scale: 1 }}
                  className="text-5xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-black"
                >
                  <Counter to={100} suffix="%" />
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-800">ISO 27001:2022 Compliant</h3>
                <p className="text-gray-500 mt-2">Enterprise-grade security</p>
              </div>
              <div className="bg-amber-50 px-4 py-2 text-center text-amber-600 text-sm font-medium">
                <GitBranch className="inline w-4 h-4 mr-1" /> Certified Excellence
              </div>
            </motion.div>
            </GradientCard>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;