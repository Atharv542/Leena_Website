import React from 'react';
import { Brain, Heart, Users, Baby } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Brain className="text-pink-500" size={48} />,
      title: 'Personal Development Mindset Coaching',
      description: 'Transform your limiting beliefs and unlock your full potential through personalized mindset coaching techniques.',
      features: ['Goal Setting & Achievement', 'Confidence Building', 'Overcoming Mental Blocks', 'Success Mindset Development']
    },
    {
      icon: <Heart className="text-pink-500" size={48} />,
      title: 'Spirituality Coaching',
      description: 'Connect with your inner wisdom and spiritual essence to find deeper meaning and purpose in your life.',
      features: ['Meditation Guidance', 'Spiritual Awakening', 'Inner Peace Practices', 'Purpose Discovery']
    },
    {
      icon: <Users className="text-pink-500" size={48} />,
      title: 'Relationship Coaching',
      description: 'Build stronger, more fulfilling relationships with others and most importantly, with yourself.',
      features: ['Communication Skills', 'Conflict Resolution', 'Emotional Intelligence', 'Boundary Setting']
    },
    {
      icon: <Baby className="text-pink-500" size={48} />,
      title: 'Conscious Parenting Coaching',
      description: 'Nurture your children with awareness, empathy, and mindful parenting approaches for their holistic development.',
      features: ['Mindful Parenting', 'Emotional Support', 'Child Development', 'Family Harmony']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Life
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover your inner strength and create lasting positive change through our comprehensive coaching services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-pink-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-pink-100 hover:border-pink-200"
            >
              <div className="flex items-center mb-6">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 ml-4">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 text-pink-500 font-semibold hover:text-pink-600 transition-colors duration-200 group-hover:translate-x-1 transform inline-flex items-center">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;