import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import serviceParenting from "../assets/service-parenting.jpg";

const ServiceParenting = () => {
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
          Conscious Parenting Coaching
        </h1>

        {/* Image */}

        <div className="flex justify-center mb-12">
          <img
            src={serviceParenting}
            alt="Conscious Parenting Coaching"
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
              Are you tired of feeling overwhelmed, stressed, disconnected and
              burnt out as a parent?
            </p>

            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Do you struggle with emotional reactivity, unconscious patterns,
              and feelings of guilt, shame, or inadequacy in your parenting
              journey?
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              Are you having self-doubt about your parenting styles, what if
              your past inner wounds effect your children or how to stop judging
              your kids?
            </p>

            <p className="text-gray-700 leading-relaxed text-lg mt-6">
              Let’s replace traditional parenting of controlling and punishment
              with conscious parenting approach that fosters deeper connection,
              atonement, Self-awareness, mindfulness, emotional regulation,
              emotional connections, unconditionally love, kindness, compassion
              with our children to raise confidence, resilience, joyful and
              empowered children.
            </p>

          </div>

          {/* Exploration List */}

          <div>

            <p className="text-pink-500 font-semibold text-lg mb-4">
              At the wisdom inside out we will explore:
            </p>

            <ul className="space-y-3 text-gray-700 text-lg">

              <li>- Letting go of the parental ego, fantasy perception, breaking unhealthy cycles and parenting without judgement</li>

              <li>- Practicing mindfulness and presence, Parents and children has deep connection</li>

              <li>- Embrace a growth mindset, setting healthy boundaries, focusing on effort and learning over end results</li>

              <li>- Viewing children as unique individual and they will have their own destiny</li>

              <li>- Cultivating self-awareness and self-acceptance, Parent themselves first to become better parents</li>

              <li>- Fostering healthier connections leading to more loving and fulfilment relationships</li>

              <li>- Strategies for empowering children to develop critical thinking skills, role plays, make healthy choices and cultivate confidence, self-beliefs and resilience</li>

            </ul>

          </div>

          {/* Quote */}

          <blockquote className="text-center text-pink-500 italic text-xl font-semibold mt-14 border-t border-pink-100 pt-10">
            “The greatest indicator of good parenting is how good a parent you
            are to your own inner child” – Dr Shefali
          </blockquote>

        </div>

        {/* CTA */}

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

export default ServiceParenting;