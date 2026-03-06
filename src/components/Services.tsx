import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import serviceMindset from "../assets/service-mindset.jpg";
import serviceSpirituality from "../assets/service-spirituality.jpg";
import serviceRelationship from "../assets/service-relationship.jpg";
import serviceParenting from "../assets/service-parenting.jpg";

const Services = () => {
  const services = [
    {
      image: serviceMindset,
      title: "Personal Development Mindset Coaching",
      description:
        "Let’s unpack your bag and get ready to dive deep into your inner world",
      link: "/service-mindset",
    },
    {
      image: serviceSpirituality,
      title: "Spirituality Coaching",
      description:
        "Connect with your inner wisdom and spiritual essence to find deeper meaning and purpose in life.",
      link: "/service-spirituality",
    },
    {
      image: serviceRelationship,
      title: "Relationship Coaching",
      description:
        "Let’s unlock the secrets to building strong, meaningful sacred relationships.",
      link: "/service-relationship",
    },
    {
      image: serviceParenting,
      title: "Conscious Parenting Coaching",
      description:
        "Transform your parenting approach and cultivate a deeper connection with your child.",
      link: "/service-parenting",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-white to-pink-50/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">

          <p className="text-pink-500 font-semibold tracking-widest uppercase text-sm mb-3">
            What We Offer
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transform Your Life
          </h2>

          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Comprehensive coaching services designed to help you grow, heal,
            and thrive.
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-pink-100/60"
            >

              <div className="relative h-56 overflow-hidden">

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

              </div>

              <div className="p-6">

                <h3 className="text-md font-bold text-gray-900 mb-2 leading-snug">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {service.description}
                </p>

                <Link
                  to={service.link}
                  className="inline-flex items-center gap-1.5 text-pink-500 font-semibold text-sm hover:text-pink-600 transition-colors group/btn"
                >
                  Learn More

                  <ArrowRight
                    size={16}
                    className="group-hover/btn:translate-x-1 transition-transform duration-200"
                  />
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;