import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50 flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-6">
              <Sparkles className="text-pink-500 animate-bounce" size={32} />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="block">YOU ARE BORN</span>
              <span className="block bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
                LIMITLESS
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              what you seek is within you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <button 
                onClick={() => scrollToSection('booking')}
                className="group cursor-pointer bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Start Your Journey
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={20} />
              </button>
              
              <button 
                onClick={() => scrollToSection('services')}
                className="group border-2 cursor-pointer border-pink-500 text-pink-500 px-8 py-4 rounded-full font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-pink-300 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-gradient-to-br from-pink-100 to-pink-200 rounded-3xl p-2">
                <img
                  src="Hero.png"
                  alt="Leena - Life Coach"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;