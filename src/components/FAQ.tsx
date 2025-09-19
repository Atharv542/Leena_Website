import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is coaching, and how can it help me?",
      answer: "Coaching is a supportive and guided process that helps individuals achieve their personal and professional goals. It can help you gain clarity, build confidence, and develop strategies for success."
    },
    {
      question: "What is the difference between coaching and therapy?",
      answer: "Coaching focuses on personal growth, goal-setting, and future-oriented outcomes, whereas therapy typically addresses past traumas, mental health issues, or emotional challenges."
    },
    {
      question: "How do I know if coaching is right for me?",
      answer: "Coaching is right for you if you're motivated to make positive changes in your life, willing to take action, and open to guidance and support."
    },
    {
      question: "How can I overcome negative self-talk and build confidence?",
      answer: "Practice self-compassion, challenge negative thoughts, and focus on your strengths. Celebrate small wins, and surround yourself with positive influences."
    },
    {
      question: "What is the importance of mindfulness in personal growth?",
      answer: "Mindfulness helps you stay present, focused, and aware of your thoughts, emotions, and actions. Regular mindfulness practice can lead to reduced stress, increased self-awareness, and improved emotional regulation."
    },
    {
      question: "How can I develop a growth mindset?",
      answer: "Embrace challenges, view failures as opportunities for growth, and focus on learning and progress rather than perfection."
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-pink-50 via-white to-pink-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about starting your transformation journey
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-pink-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-pink-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="text-pink-500 flex-shrink-0">
                  {openFAQ === index ? <Minus size={24} /> : <Plus size={24} />}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-pink-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default FAQ;