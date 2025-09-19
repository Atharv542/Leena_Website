import React, { useState } from 'react';
import { Mic, Play, Users, X } from 'lucide-react';

const Podcast = () => {
  const [showGuestForm, setShowGuestForm] = useState(false);
  const [guestForm, setGuestForm] = useState({
    name: '',
    email: '',
    expertise: '',
    story: '',
    experience: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Guest application submitted:', guestForm);
    alert('Thank you for your interest! We\'ll be in touch soon.');
    setShowGuestForm(false);
    setGuestForm({ name: '', email: '', expertise: '', story: '', experience: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setGuestForm({ ...guestForm, [e.target.name]: e.target.value });
  };

  return (
    <section id="podcast" className="py-20 bg-gradient-to-br from-pink-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-4 rounded-2xl">
              <Mic className="text-white" size={32} />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Limitless Life Podcast
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Join me every week for inspiring conversations about transformation, mindfulness, and discovering your unlimited potential. 
            Real stories, practical wisdom, and the tools you need to create your best life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100">
            <div className="text-pink-500 mb-4">
              <Play size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Weekly Episodes</h3>
            <p className="text-gray-600">
              New episodes every Tuesday featuring transformative conversations and practical insights for your journey.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100">
            <div className="text-pink-500 mb-4">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Inspiring Guests</h3>
            <p className="text-gray-600">
              Hear from thought leaders, healers, and everyday people who have created extraordinary transformations.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100">
            <div className="text-pink-500 mb-4">
              <Mic size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Practical Wisdom</h3>
            <p className="text-gray-600">
              Take away actionable strategies and tools that you can implement immediately in your daily life.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-12 rounded-3xl text-center">
          <h3 className="text-3xl font-bold mb-4">Share Your Transformation Story</h3>
          <p className="text-pink-100 mb-8 max-w-2xl mx-auto">
            Have you experienced a powerful transformation? We'd love to hear your story and share it with our community. 
            Your journey could inspire thousands of others to begin their own path to limitless living.
          </p>
          
          <button
            onClick={() => setShowGuestForm(true)}
            className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Become a Guest
          </button>
        </div>
      </div>

      {/* Guest Application Modal */}
      {showGuestForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Become a Podcast Guest</h3>
                <button
                  onClick={() => setShowGuestForm(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={guestForm.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={guestForm.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Area of Expertise</label>
                  <select
                    name="expertise"
                    value={guestForm.expertise}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select your area of expertise</option>
                    <option value="personal-development">Personal Development</option>
                    <option value="spirituality">Spirituality & Mindfulness</option>
                    <option value="relationships">Relationships</option>
                    <option value="parenting">Conscious Parenting</option>
                    <option value="entrepreneurship">Entrepreneurship</option>
                    <option value="health-wellness">Health & Wellness</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Transformation Story</label>
                  <textarea
                    name="story"
                    value={guestForm.story}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your transformation journey and what you'd like to share..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Speaking/Podcast Experience</label>
                  <textarea
                    name="experience"
                    value={guestForm.experience}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Any previous speaking or podcast experience (optional)..."
                  />
                </div>

                <div className="flex gap-4 pt-6">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Submit Application
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowGuestForm(false)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Podcast;