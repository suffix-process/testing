import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiSettings,
  FiShield,
  FiCpu,
  FiDatabase,
  FiClipboard,
  FiActivity,
  FiRepeat,
} from "react-icons/fi";

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
        "Digitize MISP forms and check compliance with client's pre-defined rules and IRDA guidelines.",
    },
    {
      icon: <FiActivity size={32} className="text-cyan-500" />,
      title: "Health Policy Data Management",
      description:
        "Capture correct data and manage all addendums in the company core systems for health policy records.",
    },
  ];

  return (
    <section className="py-20 bg-[#E4EFE7]">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon, title, description }, index) => (
            <motion.div
              key={index}
              className="flip-card h-full min-h-[250px]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flip-card-inner w-full h-full relative">
                <div className="flip-card-front absolute w-full h-full">
                  <div className="h-full border rounded-lg p-6 flex items-center justify-center bg-[#fff]">
                    <div className="text-center">
                      <div className="flex justify-center mb-4">{icon}</div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="flip-card-back absolute w-full h-full">
                  <div className="h-full border border-black rounded-lg p-6 flex flex-col bg-[#fff]">
                    <p className="text-gray-600 flex-grow">{description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .flip-card {
          perspective: 1000px;
          background-color: transparent;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default Services;