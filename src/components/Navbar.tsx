import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/98 backdrop-blur-md shadow-[0_2px_20px_-4px_rgba(236,72,153,0.15)]"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center py-3">

          {/* Logo */}

          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-pink-200 to-pink-400 opacity-0 group-hover:opacity-40 blur transition-opacity duration-500" />

              <img
                src="Logo.png"
                className="relative w-16 h-16 rounded-full object-cover ring-2 ring-pink-200 group-hover:ring-pink-400 transition-all duration-300"
                alt="The Wisdom Inside Out"
              />
            </div>

            <div className="flex flex-col">

              <span className="text-xl sm:text-2xl font-bold italic bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent tracking-tight">
                The Wisdom Inside Out
              </span>

              <span className="text-[10px] sm:text-xs text-pink-400 tracking-wide">
                Live, Love, Learn, Lead, & Liberate
              </span>

              <span className="text-[9px] sm:text-[10px] italic text-gray-500">
                We donate 30% of our profits to charity.
              </span>

            </div>
          </button>

          {/* Desktop Navigation */}

          <div className="hidden lg:flex items-center gap-1">

            <button
              onClick={() => scrollToSection("home")}
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-pink-500 hover:bg-pink-50 rounded-lg transition"
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection("services")}
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-pink-500 hover:bg-pink-50 rounded-lg transition"
            >
              Services
            </button>

            <button
              onClick={() => scrollToSection("about")}
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-pink-500 hover:bg-pink-50 rounded-lg transition"
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("testimonials")}
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-pink-500 hover:bg-pink-50 rounded-lg transition"
            >
              Testimonials
            </button>

            <button
              onClick={() => scrollToSection("podcast")}
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-pink-500 hover:bg-pink-50 rounded-lg transition"
            >
              Podcast
            </button>

            <button
              onClick={() => scrollToSection("faq")}
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-pink-500 hover:bg-pink-50 rounded-lg transition"
            >
              FAQ
            </button>

            <button
              onClick={() => scrollToSection("booking")}
              className="ml-3 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-pink-400 to-pink-500 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Book Session
            </button>

          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-pink-500 hover:bg-pink-50 transition"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >

        <div className="bg-white border-t border-pink-100 px-4 py-3 space-y-1">

          <button
            onClick={() => scrollToSection("home")}
            className="block w-full text-left px-4 py-2.5 rounded-lg text-gray-600 hover:text-pink-500 hover:bg-pink-50"
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection("services")}
            className="block w-full text-left px-4 py-2.5 rounded-lg text-gray-600 hover:text-pink-500 hover:bg-pink-50"
          >
            Services
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className="block w-full text-left px-4 py-2.5 rounded-lg text-gray-600 hover:text-pink-500 hover:bg-pink-50"
          >
            About
          </button>

          <button
            onClick={() => scrollToSection("testimonials")}
            className="block w-full text-left px-4 py-2.5 rounded-lg text-gray-600 hover:text-pink-500 hover:bg-pink-50"
          >
            Testimonials
          </button>

          <button
            onClick={() => scrollToSection("podcast")}
            className="block w-full text-left px-4 py-2.5 rounded-lg text-gray-600 hover:text-pink-500 hover:bg-pink-50"
          >
            Podcast
          </button>

          <button
            onClick={() => scrollToSection("faq")}
            className="block w-full text-left px-4 py-2.5 rounded-lg text-gray-600 hover:text-pink-500 hover:bg-pink-50"
          >
            FAQ
          </button>

          <button
            onClick={() => scrollToSection("booking")}
            className="block w-full text-center mt-2 px-4 py-2.5 rounded-lg text-white bg-gradient-to-r from-pink-400 to-pink-500 shadow-md"
          >
            Book Session
          </button>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;