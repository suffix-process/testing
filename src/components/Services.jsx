import { motion } from "framer-motion";
import { FiCheckCircle, FiSettings, FiShield, FiCpu, FiDatabase, FiClipboard, FiActivity, FiRepeat } from "react-icons/fi";
import GradientCard from "./GradientCard";
import { title } from "framer-motion/client";
// import styled from "styled-components";

const Services = () => {
  const services = [
    {
      icon: <FiSettings size={32} className="text-cyan-500" />,
      title: "Process Centralization",
      description:
        "Reorganize scattered workflows into a unified, well-managed operation—on your premises or ours.",
    },
    {
      icon: <FiCheckCircle size={32} className="text-cyan-500" />,
      title: "Verification & QC Solutions",
      description:
        "Ensure data accuracy and compliance with our specialized verification and quality check services.",
    },
    {
      icon: <FiCpu size={32} className="text-cyan-500" />,
      title: "Unified Intelligent Automation Platform",
      description:
        "Streamline operations with our cloud-native RPA and AI platform, integrating six specialized bots into a single, orchestrated, and dashboard-driven solution for faster, error-free processing.",
    },
    {
      icon: <FiShield size={32} className="text-cyan-500" />,
      title: "BFSI Compliance",
      description:
        "Solutions designed specifically to meet the stringent compliance requirements of the BFSI sector.",
    },
    {
      icon: <FiRepeat size={32} className="text-cyan-500" />,
      title: "Centralized KYC Checks",
      description:
        "Perform nationwide KYC checks from Ahmedabad office. Verify insurer documents against databases/online portals for authenticity and compliance.",
    },
    {
      icon: <FiDatabase size={32} className="text-cyan-500" />,
      title: "Crop Insurance Quality Checks",
      description:
        "Compare state land record data with client databases. Conduct quality checks using Pradhan Mantri FasalBimaYojna data.",
    },
    {
      icon: <FiClipboard size={32} className="text-cyan-500" />,
      title: "MISP Checks",
      description:
        "Digitize MISP forms and check compliance with client’s pre-defined rules and IRDA guidelines.",
    },
    // {
    //   // icon: <FiFileText size={32} className="text-cyan-500" />,
    //   title: "Document Retrieval & Summary",
    //   description:
    //     "Retrieve and summarize key documents like ITR, financials, GST, Form 16, PAN, and Aadhaar for easy access.",
    // },
    // {
    //   // icon: <FiLock size={32} className="text-cyan-500" />,
    //   title: "Aadhaar Masking BOT",
    //   description:
    //     "Automation BOT extracts and masks Aadhaar numbers to ensure privacy protection.",
    // },
    // {
    //   // icon: <FiRepeat size={32} className="text-cyan-500" />,
    //   title: "GST Reconciliation BOT",
    //   description:
    //     "Automate GST verification against client databases to ensure match and compliance.",
    // },
    // {
    //   // icon: <FiType size={32} className="text-cyan-500" />,
    //   title: "Transliterator BOT",
    //   description:
    //     "Perform transliteration of KYC documents for nationwide checks and verify authenticity against portals.",
    // },
    // {
    //   // icon: <FiAward size={32} className="text-cyan-500" />,
    //   title: "IRDA Licensing Check BOT",
    //   description:
    //     "Validate insurance agents' licenses against PAN numbers based on client-defined criteria.",
    // },
    // {
    //   // icon: <FiCommand size={32} className="text-cyan-500" />,
    //   title: "Excel Automation BOT",
    //   description:
    //     "Automate repetitive Excel tasks at client sites to save time and reduce human errors.",
    // // },
    // {
    //   title : "Intelligent Automation Platform",
    //   description : "Six bots in one cloud platform—OCR, Aadhaar masking, GST reconciliation, transliteration, IRDA license checks, and Excel automation— all run under a single orchestrator and tracked in one dashboard.",
    // },
    {
      icon: <FiActivity size={32} className="text-cyan-500" />,
      title: "Health Policy Data Management",
      description:
        "Capture correct data and manage all addendums in the company core systems for health policy records.",
    },
  ];

  return (
    <section className="py-20 bg-[#fff8ee]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg">
            Tailored BFSI process solutions—manual execution, robotic process
            automation (RPA), and hybrid models—designed to streamline
            operations and ensure compliance.
          </p>
        </motion.div>

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 group">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="
            opacity-100
            group-hover:opacity-0
            transition-opacity duration-300
          "
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ opacity: 1, scale: 1.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full hover:border-cyan-300">
                <div className="p-6 h-full flex flex-col">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 flex-grow">
                    {service.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div> */}
        {/* ///////////////////////////////////// */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <GradientCard
              key={index}
              className="h-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="inner p-6 flex flex-col h-full">
                <div className="mb-4 display: flex">{service.icon} &nbsp; <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3></div>
                
                <p className="text-gray-600 flex-grow">{service.description}</p>
              </div>
            </GradientCard>
          ))}
        </div>
        {/* ///////////////////////////////////////////// */}
      </div>
    </section>
  );
};

export default Services;
