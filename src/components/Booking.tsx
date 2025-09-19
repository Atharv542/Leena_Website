import React, { useState } from 'react';
import { Calendar, Clock, Video, Phone, MapPin } from 'lucide-react';

const Booking = () => {
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    sessionType: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', bookingForm);
    alert('Thank you for booking! We\'ll confirm your session within 24 hours.');
    setBookingForm({
      name: '',
      email: '',
      phone: '',
      service: '',
      sessionType: '',
      preferredDate: '',
      preferredTime: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setBookingForm({ ...bookingForm, [e.target.name]: e.target.value });
  };

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Book Your Transformation Session
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to begin your journey? Let's schedule a session that fits your needs and preferences. 
            Your limitless life is just one session away.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Session Options */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Session Options</h3>
            
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-2xl border border-pink-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-3">
                  <Video className="text-pink-500 mr-3" size={24} />
                  <h4 className="font-semibold text-gray-900">Online Sessions</h4>
                </div>
                <p className="text-gray-600 text-sm">Convenient video calls from anywhere in the world</p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-2xl border border-pink-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-3">
                  <Phone className="text-pink-500 mr-3" size={24} />
                  <h4 className="font-semibold text-gray-900">Phone Sessions</h4>
                </div>
                <p className="text-gray-600 text-sm">Deep conversations over the phone</p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-2xl border border-pink-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-3">
                  <MapPin className="text-pink-500 mr-3" size={24} />
                  <h4 className="font-semibold text-gray-900">In-Person (Australia)</h4>
                </div>
                <p className="text-gray-600 text-sm">Face-to-face sessions in select locations</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-2xl">
              <h4 className="font-semibold mb-2">Investment in Yourself</h4>
              <ul className="text-pink-100 text-sm space-y-1">
                <li>• 60-minute session: $150 AUD</li>
                <li>• 90-minute deep dive: $200 AUD</li>
                <li>• 3-session package: $400 AUD</li>
                <li>• Free 15-min consultation</li>
              </ul>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-2xl shadow-lg border border-pink-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={bookingForm.name}
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
                    value={bookingForm.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={bookingForm.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                    placeholder="+61 xxx xxx xxx"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Coaching Service</label>
                  <select
                    name="service"
                    value={bookingForm.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a service</option>
                    <option value="personal-development">Personal Development Mindset Coaching</option>
                    <option value="spirituality">Spirituality Coaching</option>
                    <option value="relationship">Relationship Coaching</option>
                    <option value="parenting">Conscious Parenting Coaching</option>
                    <option value="consultation">Free 15-min Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Session Type</label>
                  <select
                    name="sessionType"
                    value={bookingForm.sessionType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select session type</option>
                    <option value="online">Online (Video Call)</option>
                    <option value="phone">Phone Session</option>
                    <option value="in-person">In-Person (Australia)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={bookingForm.preferredDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                <select
                  name="preferredTime"
                  value={bookingForm.preferredTime}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select preferred time</option>
                  <option value="9:00 AM">9:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                  <option value="5:00 PM">5:00 PM</option>
                  <option value="6:00 PM">6:00 PM</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                <textarea
                  name="message"
                  value={bookingForm.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us what you'd like to work on or any questions you have..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <Calendar size={20} />
                Book Your Session
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;