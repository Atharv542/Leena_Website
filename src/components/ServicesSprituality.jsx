import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import serviceSpirituality from "../assets/service-spirituality.jpg";

const ServiceSpirituality = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50/30 to-white pt-32 pb-24">
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
          Spirituality Coaching
        </h1>

        {/* Image */}
        <div className="flex justify-center mb-12">
          <img
            src={serviceSpirituality}
            alt="Spirituality Coaching"
            className="w-full max-w-lg h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="space-y-8">

          {/* Package Description */}
          <div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Package Description
            </h2>

            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Are you yearning for a deeper sense of purpose, meaning, and
              connection in your life?
            </p>

            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Do you feel unfulfilled, suffering, disconnected, or uncertain
              about your life's direction?
            </p>

            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Are you searching for a glimpse of pure consciousness, inner
              awareness, the ultimate truths, the god, awakening soul,
              enlightenment being, infinite, miracle above and beyond the
              normal?
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              Let's embark on a transformative journey to awaken your true
              nature and reveal the interconnectedness of all things. Just as
              the sky is always present behind the clouds, your innate
              potential and inner wisdom have been within you since birth.
              However, your childhood limiting beliefs, the blind spots, the
              unconscious, the ego and cultural conditioning may have clouded
              your perception and blocking you from seeing those truths.
              Together, we'll gently clear the clouds of limitation. Together
              let’s learn to slow down and be fully present and experiencing
              life with acceptance, ease, peace, calm, clarity and welcome.
            </p>

          </div>

          {/* List */}
          <div>

            <p className="text-pink-500 font-semibold text-lg mb-4">
              At the wisdom inside out we will explore:
            </p>

            <ul className="space-y-3 text-gray-700 text-lg">

              <li>
                - Embark on a path of Self-discovery, your true nature,
                life's purpose and spiritual growth
              </li>

              <li>
                - Emotional Healing, Cultivate a deeper sense of connection
                to your higher self, others, and the universe
              </li>

              <li>
                - Fostering present moment awareness and detaching from the
                ego driven mind
              </li>

              <li>
                - Awakening to new possibilities, perspectives and alignment
                between your head, heart and hands
              </li>

            </ul>

          </div>

          {/* Quotes */}

          <blockquote className="text-center text-pink-500 italic text-lg mt-14 border-t border-pink-100 pt-10">
            “If a man can control his mind he can find the way to
            enlightenment, and all wisdom and virtue will naturally come
            to him”
            <span className="text-gray-700"> – Buddha</span>
          </blockquote>

          <blockquote className="text-center text-pink-500 italic text-lg mt-8">
            “It’s through gratitude for the present moment that the
            spiritual dimension of life opens up and wherever you are,
            be there totally”
            <span className="text-gray-700"> – Eckhart Tolle</span>
          </blockquote>

        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <Link
            to="/#booking"
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Let's Start Your Journey
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ServiceSpirituality;