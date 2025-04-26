// src/components/Header.jsx
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate                = useNavigate();
  const location                = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "Home",     path: "/",        type: "route"  },
    { name: "About",    to:   "about",    type: "scroll" },
    { name: "Services", to:   "services", type: "scroll" },
    { name: "Gallery",  path: "/picture", type: "route"  },
    { name: "Contact",  to:   "contact",  type: "scroll" },
  ];

  // Hide all "scroll" items when on /picture
  const hideScroll = location.pathname === "/picture" || location.pathname === "/privacy" || location.pathname === "/terms";

  const handleClick = (item) => {
    setIsOpen(false);
    if (item.type === "route") {
      navigate(item.path);
    } else {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: item.to } });
      } else {
        scroller.scrollTo(item.to, { smooth: true, duration: 500, offset: -80 });
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100
        transition-all duration-300 ${scrolled ? "py-2 shadow-sm" : "py-4"}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <span className="text-[#016B81]">Suffix</span>{" "}
          <span className="text-gray-800">Process Solutions</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => {
            // skip scroll-type items on /picture
            if (hideScroll && item.type === "scroll") return null;
            return (
              <button
                key={item.name}
                onClick={() => handleClick(item)}
                className="cursor-pointer text-gray-600 hover:text-cyan-500 font-medium transition-colors"
              >
                {item.name}
              </button>
            );
          })}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsOpen(o => !o)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden mt-2 pb-4">
          <div className="flex flex-col space-y-2 px-4">
            {navItems.map((item) => {
              if (hideScroll && item.type === "scroll") return null;
              return (
                <button
                  key={item.name}
                  onClick={() => handleClick(item)}
                  className="text-left w-full text-gray-600 hover:text-cyan-500 transition-colors py-2 font-medium"
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
