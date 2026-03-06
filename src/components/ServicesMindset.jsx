import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import serviceMindset from "../assets/service-mindset.jpg";

const ServiceMindset = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50/30 to-white pt-32 pb-20">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back Button */}

        <Link
          to="/#services"
          className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 font-medium mb-10 transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Services
        </Link>

        {/* Title */}

        <h1 className="text-4xl md:text-5xl font-bold text-center text-pink-500 mb-12">
          Personal Development Mindset Coaching
        </h1>

        {/* Image */}

        <div className="flex justify-center mb-12">
          <img
            src={serviceMindset}
            alt="Personal Development Mindset Coaching"
            className="w-full max-w-lg h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Content */}

        <div className="space-y-8">

          {/* Description */}

          <div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Package Description
            </h2>

            <p className="text-gray-700 leading-relaxed text-lg">

              Are you tired of being held back by{" "}
              <span className="text-pink-500 font-semibold">
                critical inner voices, self-doubt, and low self-esteem?
              </span>{" "}
              Do you feel like you're stuck and unable to reach your full
              potential? Or ready to take challenges to your full potential but
              not sure how? Let's{" "}
              <span className="text-pink-500 font-semibold">unpack</span> your
              bag and get ready to{" "}
              <span className="text-pink-500 font-semibold">dive deep</span>{" "}
              into your{" "}
              <span className="text-pink-500 font-semibold">inner world</span>{" "}
              and{" "}
              <span className="text-pink-500 font-semibold">transform</span>{" "}
              your life from inside out.

              Unlocking your{" "}
              <span className="text-pink-500 font-semibold">
                full potential
              </span>{" "}
              and becoming the best version of yourself.

              Together we'll explore the beauty of consciousness, the inner
              world and transform from inside out.

            </p>

          </div>

          {/* List */}

          <div>

            <p className="text-pink-500 font-semibold text-lg mb-4">
              At the wisdom inside out we will explore:
            </p>

            <ul className="space-y-3 text-gray-700 text-lg">

              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-pink-500 rounded-full mt-2.5 shrink-0" />
                Identifying and releasing limiting beliefs and patterns
              </li>

              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-pink-500 rounded-full mt-2.5 shrink-0" />
                Letting go of ego and embracing authenticity
              </li>

              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-pink-500 rounded-full mt-2.5 shrink-0" />
                Cultivating self-love, Self-acceptance and Self-worth
              </li>

              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-pink-500 rounded-full mt-2.5 shrink-0" />
                Developing emotional intelligence and resilience
              </li>

              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-pink-500 rounded-full mt-2.5 shrink-0" />
                Integrating mindfulness, meditation, deeper connection and
                presence into daily life
              </li>

              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-pink-500 rounded-full mt-2.5 shrink-0" />
                Achieving your dreams that align with your soul
              </li>

            </ul>

          </div>

          {/* Quote */}

          <blockquote className="text-center text-pink-500 italic text-xl font-semibold mt-12 border-t border-pink-100 pt-10">

            "Create the highest, grandest vision possible for your life,
            because you become what you believe."

          </blockquote>

        </div>


        <div className="flex justify-center mt-16">

          <Link
            to="/#booking"
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg shadow-pink-500/30 hover:scale-105"
          >
            Let’s Start Your Journey
          </Link>

        </div>

      </div>

    </div>
  );
};

export default ServiceMindset;