import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Entrepreneur',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "Leena helped me break through years of self-doubt and limiting beliefs. Her approach is gentle yet powerful, and I've seen incredible changes in both my personal and professional life. I finally feel like I'm living my truth."
    },
    {
      name: 'Michael Chen',
      role: 'Executive',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "Working with Leena on my relationship challenges was transformative. She helped me understand myself better and communicate more effectively. My marriage is stronger than ever, and I have tools I use daily."
    },
    {
      name: 'Emma Davis',
      role: 'Mother of Two',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "The conscious parenting coaching changed everything for our family. Leena taught me how to parent from a place of awareness rather than reaction. My children and I are so much happier and connected now."
    },
    {
      name: 'David Rodriguez',
      role: 'Artist',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "I was spiritually searching for years before finding Leena. Her guidance helped me connect with my authentic self and discover my life's purpose. I'm now living with clarity and passion I never thought possible."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What My Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real transformations from real people who chose to unlock their limitless potential
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-pink-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-pink-100 relative"
            >
              <div className="absolute top-4 right-4 text-pink-200 opacity-50">
                <Quote size={32} />
              </div>
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-pink-100 group-hover:border-pink-200 transition-colors duration-300"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-pink-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Testimonials;