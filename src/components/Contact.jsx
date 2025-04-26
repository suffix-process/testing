import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiUser,
  FiMessageSquare,
  FiArrowRight,
} from "react-icons/fi";
import {
  FaHandshake,
  FaHeadset,
  FaRegLightbulb,
  FaChartLine,
} from "react-icons/fa";
import { MoveRight } from "lucide-react";
import GlassCard from "./GlassCard";
import { useState } from "react";
import { toast, Toaster } from 'react-hot-toast';
import formImage from '../assets/new logo.png';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "backOut",
    },
  },
};

const cardHoverVariants = {
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",  
    },
  },
};

const iconHoverVariants = {
  hover: {
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 0.6,
    },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "aeb17194-61cc-4047-ab0a-406904e4fc16",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_email: "sending.mail@gmail.com",
          to_email: "get.mail@gmail.com"
        })
      });

      const result = await response.json();
      
      if (result.success) {
        toast.success('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error(error.message || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-cyan-50 to-emerald-50">
      <Toaster position="top-center" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-60 right-20 w-48 h-48 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-32 h-32 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-black">
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-black text-sm font-medium mb-4 shadow-lg">
            <FaHandshake className="mr-2" /> Let's Connect
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            <span className="bg-clip-text text-black bg-gradient-to-r from-cyan-600 to-blue-600">
              Get In Touch With Us
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Have questions about our BFSI solutions? Our team is ready to help
            you with customized process support, automation, and security
            solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover="hover"
              variants={cardHoverVariants}
              className="h-full"
            >
              <GlassCard className="h-full bg-gradient-to-br from-white to-blue-50 border border-blue-100">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div
                      className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg text-white"
                      whileHover="hover"
                      variants={iconHoverVariants}
                    >
                      <FiMessageSquare size={24} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray">
                      Send Us a Message
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <input type="hidden" name="access_key" value="aeb17194-61cc-4047-ab0a-406904e4fc16" />
                    <input type="hidden" name="from_email" value="sending.mail@gmail.com" />
                    <input type="hidden" name="to_email" value="get.mail@gmail.com" />

                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-blue-400">
                        <FiUser />
                      </div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="w-full bg-white/70 border border-blue-100 rounded-xl pl-10 pr-4 py-3 text-blue placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all shadow-sm"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-blue-400">
                        <FiMail />
                      </div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="w-full bg-white/70 border border-blue-100 rounded-xl pl-10 pr-4 py-3 text-gray-800 placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all shadow-sm"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-blue-400">
                        <FaRegLightbulb />
                      </div>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="w-full bg-white/70 border border-blue-100 rounded-xl pl-10 pr-4 py-3 text-gray-800 placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all shadow-sm"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="relative">
                      <div className="absolute top-3 left-3 pointer-events-none text-blue-400">
                        <FiMessageSquare />
                      </div>
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        className="w-full bg-white/70 border border-blue-100 rounded-xl pl-10 pr-4 py-3 text-gray-800 placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all shadow-sm"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{
                        scale: 1.03,
                        boxShadow: "0 10px 20px -5px rgba(6, 182, 212, 0.3)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-black font-medium rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all shadow-sm flex items-center justify-center ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message &nbsp; <MoveRight />
                        </>
                      )}
                    </motion.button>
                  </form>

                  {/* Image container - hidden on mobile and centered */}
                  <div className="mt-6 hidden md:flex justify-center ">
                    <img 
                      src={formImage} 
                      alt="Suffix Process Solutions" 
                      className="w-[200px] rounded-lg "
                    />
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>

          {/* Contact Information Cards and Map */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Contact Cards */}
            <motion.div whileHover="hover" variants={cardHoverVariants}>
              <GlassCard className="bg-gradient-to-br from-white to-indigo-50 border border-indigo-100">
                <div className="p-6 flex items-start gap-4">
                  <motion.div
                    className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg text-white shadow-md"
                    whileHover="hover"
                    variants={iconHoverVariants}
                  >
                    <FiMail size={24} color="black" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      Email Us
                    </h4>
                    <a
                      href="mailto:info@suffixprocess.com"
                      className="text-indigo-600 hover:text-indigo-800 transition-colors flex items-center gap-1"
                    >
                      info@suffixprocess.com
                      <FiArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" color="black"/>
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div whileHover="hover" variants={cardHoverVariants}>
              <GlassCard className="bg-gradient-to-br from-white to-cyan-50 border border-cyan-100">
                <div className="p-6 flex items-start gap-4">
                  <motion.div
                    className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg text-white shadow-md"
                    whileHover="hover"
                    variants={iconHoverVariants}
                  >
                    <FiPhone size={24} color="black"/>
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      Call Us
                    </h4>
                    <div className="space-y-2">
                      <a
                        href="tel:+919376884752"
                        className="text-cyan-600 hover:text-cyan-800 transition-colors flex items-center gap-1"
                      >
                        +91 93768 84752
                        <FiArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                      <a
                        href="tel:+919525000237"
                        className="text-cyan-600 hover:text-cyan-800 transition-colors flex items-center gap-1"
                      >
                        +91 95250 00237
                        <FiArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                      <div className="flex items-center text-sm text-cyan-500">
                        <FaHeadset className="mr-2"  />
                        Support available Mon-Fri, 9AM-6PM
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div whileHover="hover" variants={cardHoverVariants}>
              <GlassCard className="bg-gradient-to-br from-white to-emerald-50 border border-emerald-100">
                <div className="p-6 flex items-start gap-4">
                  <motion.div
                    className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg text-white shadow-md"
                    whileHover="hover"
                    variants={iconHoverVariants}
                  >
                    <FiMapPin size={24} color="black" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      Our Offices
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium text-emerald-700 flex items-center gap-1">
                          <FaChartLine className="text-sm" /> Registered Office
                        </p>
                        <p className="text-gray-600">
                          B3-302, La Habitat, Opp Zydus Cancer Hospital, Thaltej
                          Hebatpur Road, Ahmedabad - 380054
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-emerald-700 flex items-center gap-1">
                          <FaHandshake className="text-sm" /> Corporate Office
                        </p>
                        <p className="text-black">
                          306, Zion Z1, Near Hotel Avalon, Sindhubhavan Road,
                          Ahmedabad - 380054
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Map */}
            <motion.div whileHover="hover" variants={cardHoverVariants}>
              <GlassCard className="p-0 overflow-hidden rounded-xl border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7342.664286108702!2d72.49507441395309!3d23.04828158871492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9bc4c2358f57%3A0xe93e8635ea690f4e!2sZion%20Z1!5e0!3m2!1sen!2sin!4v1745408632392!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  className="border-0"
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Maps Location"
                ></iframe>
              </GlassCard>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-gray font-medium shadow-lg">
            <FaHeadset className="mr-3 animate-pulse " color="black"  />
            Need immediate assistance? Call our support line: +91 94272 37678
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;