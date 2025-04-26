import React from 'react';
import { motion } from 'framer-motion';
// Import your client logos
import bajajLogo from '../assets/bajaj.png';
import iciciLogo from '../assets/icici.png';
import relianceLogo from '../assets/Reliance.png';
import tataAigLogo from '../assets/TATA_AIG.png';
import indusLogo from '../assets/indus.png'
import shriram from '../assets/shriram.png'

const Clients = () => {
  // Array of client logos using imported images
  const clients = [
    { id: 1, logo: bajajLogo, alt: 'Bajaj Allianz General Insurance' },
    { id: 2, logo: iciciLogo, alt: 'ICICI Lombard General Insurance' },
    { id: 3, logo: relianceLogo, alt: 'Reliance General Insurance' },
    { id: 4, logo: tataAigLogo, alt: 'TATA AIG Insurance' },
    { id: 5, logo: indusLogo, alt: 'IndusInd Bank' },
    { id: 6, logo: shriram, alt: 'Shriram Capital Finance' },
    // Add more clients as needed
  ];

  // Duplicate the array to create seamless looping
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-[#E4EFE7]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Trusted By Insurance Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're proud to partner with India's top insurance providers
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden py-6">
          {/* Gradient fade effects */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-blue-50 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-indigo-50 to-transparent z-10"></div>
          
          {/* Marquee Animation */}
          <motion.div
            className="flex"
            animate={{
              x: ['0%', '-100%'],
            }}
            transition={{
              duration: 20, // Reduced duration for fewer items
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div 
                key={`${client.id}-${index}`} 
                className="flex-shrink-0 mx-8 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-40 h-20 flex items-center justify-center"
                >
                  <img
                    src={client.logo}
                    alt={client.alt}
                    className="object-contain max-h-full max-w-full"
                  />
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Clients;