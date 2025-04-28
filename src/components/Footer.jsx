// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { FiLinkedin, FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';


const Footer = () => {
  const footerLinks = [
    {
      title: "Company",
      links: [
        // internal page-scroll links
        { name: "About Us",      to: "about",    scroll: true },
        { name: "Services",      to: "services", scroll: true },
        { name: "Why Choose Us", to: "why-us",   scroll: true },
        { name: "Contact",       to: "contact",  scroll: true },
      ],
    },
    {
      title: "Services",
      links: [
        // these still navigate to other routes/anchors
        { name: "Process Centralization", path: "#" },
        { name: "Verification & QC",      path: "#" },
        { name: "Intelligent Automation", path: "#" },
        { name: "Hybrid Solutions",       path: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy",   path: "/privacy"    },
        // { name: "Terms of Service", path: ""      },
        { name: "Terms of Service", path: "/terms" },

        // { name: "Compliance",       path: "/compliance" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand block */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-cyan-400">Suffix</span> Process Solutions
            </h3>
            <p className="text-gray-300 mb-6">
              Addressing the unique process requirements of the BFSI sector with innovative solutions.
            </p>
            <div className="flex space-x-4">
              {/* {[FiLinkedin, FiTwitter, FiFacebook, FiInstagram].map((Icon, i) => (
                
              ))} */}

              <a
                  href="https://www.linkedin.com/company/suffix-outsourcing-solutions-pvt-ltd/"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <FiLinkedin size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <FiTwitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <FiFacebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <FiInstagram size={20} />
                </a>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((column, idx) => (
            // <div key={idx} className="hidden sm:block">
            <div
              key={idx}
              className={
                column.title === "Legal"
                  ? "block sm:block"     /* always show */
                  : "hidden sm:block"    /* hide on xs, show sm+ */
              }
            >
              <h4 className="text-lg font-semibold text-white mb-4">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link, i) => (
                  <li key={i}>
                    {link.scroll ? (
                      // smooth-scroll on the same page
                      <ScrollLink
                        to={link.to}
                        smooth
                        duration={500}
                        offset={-80} 
                        className="cursor-pointer text-gray-300 hover:text-cyan-400 transition-colors"
                      >
                        {link.name}
                      </ScrollLink>
                    ) : (
                      // real navigation
                      <Link
                        to={link.path}
                        className="text-gray-300 hover:text-cyan-400 transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Suffix Process Solutions Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            <b>ISO 27001:2022 </b> Certified Process Partner
          </p>
          <p className="text-white text-sm">
            Developed & managed by <a href="https://www.linkedin.com/in/krishna-verma-0a41ab253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-cyan-400 transition-colors"><b><u>KRISHNA</u></b></a> | <a href="https://www.instagram.com/thakur__209_?igsh=MWpkNzJhb25yNmQ4Nw==" className="hover:text-cyan-400 transition-colors"><b><u>GAURAV</u></b></a> | <a href="https://www.linkedin.com/in/om-majithiya-98463a238/" className="hover:text-cyan-400 transition-colors"><b><u>OM</u></b></a>
          </p>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
