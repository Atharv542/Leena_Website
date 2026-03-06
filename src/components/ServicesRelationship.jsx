import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import serviceRelationship from "../assets/service-relationship.jpg";

const ServiceRelationship = () => {
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
          Relationship Coaching
        </h1>

        {/* Image */}
        <div className="flex justify-center mb-12">
          <img
            src={serviceRelationship}
            alt="Relationship Coaching"
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
              Are you tired of feeling disconnected, isolated, or exhausted in
              your relationships?
            </p>

            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Do you struggle with effective communication, active listening,
              and understanding the emotional needs of yourself and others?
            </p>

            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Are you ready to embrace challenges to take your relationship to
              the next level?
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              Let's work together to unlock the secrets to building strong,
              meaningful, and sacred relationships. The foundation of healthy
              relationships begins with self-love, self-worth and
              self-acceptance. When you cultivate a deep love and acceptance
              for yourself, you're able to show up more fully in your
              relationships, without sacrificing your own needs or identity.
            </p>

          </div>

          {/* List */}
          <div>

            <p className="text-pink-500 font-semibold text-lg mb-4">
              At the wisdom inside out we will explore:
            </p>

            <ul className="space-y-3 text-gray-700 text-lg">

              <li>
                - Developing Self-awareness, Cultivate Self-love, Self-worth
                and Self-acceptance as the foundation of healthy relationships
              </li>

              <li>
                - Practice Self-love, Soul-care, Self-forgiveness and
                Self-compassion
              </li>

              <li>
                - Cultivating emotional intelligence and resilience
              </li>

              <li>
                - Develop effective communication and active listening skills
              </li>

              <li>
                - Build trust, intimacy, and vulnerability in your relationships
              </li>

              <li>
                - Let go of unrealistic expectations, validations,
                Negative Patterns and idealizations
              </li>

              <li>
                - Embrace the beauty of imperfect, real, organic and
                authentic relationships
              </li>

            </ul>

          </div>

          {/* Quotes */}

          <blockquote className="text-center text-pink-500 italic text-lg mt-14 border-t border-pink-100 pt-10">
            “A life-changing lesson I learned about relationships later in life
            is that when you deepen the relationship with yourself, you’ll no
            longer chase the love of those who are emotionally unavailable.”
            <span className="text-gray-700"> – Jillian Turecki</span>
          </blockquote>

          <blockquote className="text-center text-pink-500 italic text-lg mt-8">
            “To love someone long-term is to accept their humanity. Their nuance,
            depth, limitation and complexity.”
            <span className="text-gray-700"> – Jillian Turecki</span>
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

export default ServiceRelationship;