import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const sectionRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50 flex items-center justify-center relative overflow-hidden pt-24"
    >
      {/* Floating Orbs */}

      <div className="absolute top-20 left-[10%] w-48 h-48 bg-pink-200/25 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]" />

      <div className="absolute bottom-32 right-[5%] w-64 h-64 bg-pink-300/15 rounded-full blur-3xl animate-[pulse_5s_ease-in-out_infinite_1s]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-100/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}

          <div className="text-center lg:text-left animate-fade-in">

            <div className="inline-flex items-center gap-2 bg-pink-100/60 backdrop-blur-sm border border-pink-200/50 rounded-full px-4 py-1.5 mb-8">
              <Sparkles className="text-pink-500" size={16} />
              <span className="text-sm font-medium text-pink-600 tracking-wide">
                Transform Your Life Today
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-[1.1] tracking-tight">
              <span className="block">YOU ARE BORN</span>

              <span className="block bg-gradient-to-r from-pink-400 via-pink-500 to-pink-700 bg-clip-text text-transparent">
                LIMITLESS
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-500 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0 italic">
              what you seek is within you.
            </p>

            {/* Buttons */}

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">

              <button
                onClick={() => scrollToSection("booking")}
                className="group cursor-pointer bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-pink-200 hover:shadow-xl hover:shadow-pink-300 hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Start Your Journey

                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform duration-200"
                  size={20}
                />

              </button>

              <button
                onClick={() => scrollToSection("services")}
                className="group cursor-pointer border-2 border-pink-300 text-pink-500 px-8 py-4 rounded-full font-semibold hover:bg-pink-500 hover:text-white hover:border-pink-500 hover:scale-105 transition-all duration-300"
              >
                Learn More
              </button>

            </div>

            {/* Social Proof */}

           

          </div>

          {/* Right Image */}

          <div
            className="relative animate-fade-in"
            style={{ animationDelay: "150ms" }}
          >

            <div className="relative">

              {/* Decorative Ring */}

              <div className="absolute -inset-4 bg-gradient-to-br from-pink-200/40 to-pink-300/20 rounded-[2rem] transform rotate-3 blur-sm" />

              <div className="absolute -inset-4 bg-gradient-to-tl from-pink-100/30 to-transparent rounded-[2rem] transform -rotate-2" />

              <div className="relative bg-gradient-to-br from-pink-100 to-pink-200 rounded-3xl p-1.5 shadow-2xl shadow-pink-200/30">

                <img
                  src="Hero.png"
                  alt="Leena - Life Coach"
                  className="w-full h-[520px] object-cover rounded-[1.25rem]"
                />

              </div>

              {/* Floating Badge */}


              <div className="absolute -top-3 -right-3 bg-white rounded-2xl shadow-lg shadow-pink-100 px-4 py-3 border border-pink-100">

                <Sparkles className="text-pink-500 mx-auto mb-1" size={18} />

                <p className="text-xs font-semibold text-gray-700">
                  Certified Coach
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;