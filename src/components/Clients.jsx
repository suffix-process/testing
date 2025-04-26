import React from 'react';
import { motion } from 'framer-motion';
// Import your client logos
import bajajLogo from '../assets/bajaj.png';
import iciciLogo from '../assets/icici.png';
import relianceLogo from '../assets/Reliance.png';
import tataAigLogo from '../assets/TATA_AIG.png';
import indusLogo from '../assets/indus.png';
import shriram from '../assets/shriram.png';

const Clients = () => {
  // Array of client logos
  const clients = [
    { id: 1, logo: bajajLogo, alt: 'Bajaj Allianz General Insurance' },
    { id: 2, logo: iciciLogo, alt: 'ICICI Lombard General Insurance' },
    { id: 3, logo: relianceLogo, alt: 'Reliance General Insurance' },
    { id: 4, logo: tataAigLogo, alt: 'TATA AIG Insurance' },
    { id: 5, logo: indusLogo, alt: 'IndusInd Bank' },
    { id: 6, logo: shriram, alt: 'Shriram Capital Finance' },
  ];

  // Duplicate clients enough times to ensure smooth looping
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-12 md:py-16 bg-[#E4EFE7]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-4">
            Trusted By Insurance Leaders
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            We're proud to partner with India's top insurance providers
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden py-4 md:py-6">
          {/* Gradient fade effects */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-[#E4EFE7] to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-[#E4EFE7] to-transparent z-10"></div>
          
          {/* Infinite Marquee - Main Technique */}
          <div className="flex">
            <motion.div
              className="flex"
              animate={{
                x: ['0%', '-50%'],
              }}
              transition={{
                duration: 50,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {/* First Set */}
              {duplicatedClients.map((client, index) => (
                <div 
                  key={`first-${client.id}-${index}`} 
                  className="flex-shrink-0 mx-3 md:mx-4 p-3 md:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-32 h-16 md:w-40 md:h-20 flex items-center justify-center"
                  >
                    <img
                      src={client.logo}
                      alt={client.alt}
                      className="object-contain max-h-full max-w-full"
                    />
                  </motion.div>
                </div>
              ))}
              
              {/* Second Set (duplicate for seamless loop) */}
              {duplicatedClients.map((client, index) => (
                <div 
                  key={`second-${client.id}-${index}`} 
                  className="flex-shrink-0 mx-3 md:mx-4 p-3 md:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-32 h-16 md:w-40 md:h-20 flex items-center justify-center"
                  >
                    <img
                      src={client.logo}
                      alt={client.alt}
                      className="object-contain max-h-full max-w-full"
                    />
                  </motion.div>
                </div>
              ))}

{duplicatedClients.map((client, index) => (
                <div 
                  key={`second-${client.id}-${index}`} 
                  className="flex-shrink-0 mx-3 md:mx-4 p-3 md:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-32 h-16 md:w-40 md:h-20 flex items-center justify-center"
                  >
                    <img
                      src={client.logo}
                      alt={client.alt}
                      className="object-contain max-h-full max-w-full"
                    />
                  </motion.div>
                </div>
              ))}

{duplicatedClients.map((client, index) => (
                <div 
                  key={`second-${client.id}-${index}`} 
                  className="flex-shrink-0 mx-3 md:mx-4 p-3 md:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-32 h-18 md:w-40 md:h-20 flex items-center justify-center"
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
      </div>
    </section>
  );
};

export default Clients;