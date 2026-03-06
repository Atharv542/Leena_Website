import React from 'react';
import { Star, Award, Users, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users size={24} />, number: '500+', label: 'Clients Transformed' },
    { icon: <Star size={24} />, number: '5+', label: 'Years Experience' },
    { icon: <Award size={24} />, number: '15+', label: 'Certifications' },
    { icon: <Heart size={24} />, number: '1000+', label: 'Lives Touched' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-pink-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet <span className="bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">Leena</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Welcome! I'm Leena, your dedicated life coach and spiritual guide. For over five years, 
                I've been passionate about helping individuals unlock their limitless potential and create 
                meaningful transformations in their lives.
              </p>
              
              <p>
                My journey began with my own transformation – from feeling lost and disconnected to 
                discovering the incredible power that lies within each of us. This personal awakening 
                ignited my mission to guide others on their path to self-discovery and empowerment.
              </p>
              
              <p>
                I believe that you already have everything you need within you. My role is simply to 
                help you remember who you truly are and guide you back to your authentic self. Through 
                personalized coaching, spiritual guidance, and practical tools, we'll work together to 
                remove the barriers holding you back.
              </p>
              
              <p className="text-pink-600 font-semibold">
                "Your transformation is not just possible – it's inevitable when you commit to the journey within."
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-pink-300 rounded-3xl transform -rotate-6 opacity-20"></div>
              <div className="relative">
                <img
                  src="About.png"
                  alt="Leena - Professional Life Coach"
                  className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
                />
                
              </div>
            </div>
          </div>

          {/* Stats Section - Now moved below on mobile */}
          <div className="lg:hidden order-3 mt-8">
            <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-3xl p-1">
              <div className="bg-white rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                      <div className="text-pink-500 mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-pink-50 to-pink-100 rounded-2xl">
                  <h3 className="font-semibold text-gray-900 mb-2">Certifications & Training</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Certified Life Coach (ICF)</li>
                    <li>• Mindfulness Meditation Teacher</li>
                    <li>• NLP Practitioner</li>
                    <li>• Relationship Therapy Specialist</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section - Desktop version */}
          <div className="hidden lg:block order-1 lg:order-3 lg:col-span-2 mt-12">
            <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-3xl p-1 max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl p-8">
                <div className="grid grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                      <div className="text-pink-500 mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-pink-50 to-pink-100 rounded-2xl">
                  <h3 className="font-semibold text-gray-900 mb-2 text-center">Certifications & Training</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div>
                      <li> Certified Life Coach (Jay Shetty Coaching)</li>
                      <li> Mindfulness Meditation Teacher</li>
                    </div>
                    <div>
                      <li> NLP Practitioner</li>
                      <li> Relationship Therapy Specialist</li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;