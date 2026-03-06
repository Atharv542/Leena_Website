import React, { useState, useRef } from "react";
import { Calendar, Clock, Video, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Booking = () => {

  const formRef = useRef();

  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    sessionType: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dja4r7f",
        "template_5hgnymu",
        formRef.current,
        "NlblmczVhV2Vxciv1"
      )
      .then(
        () => {
          toast.success("Booking request sent successfully!");

          setBookingForm({
            name: "",
            email: "",
            phone: "",
            service: "",
            sessionType: "",
            preferredDate: "",
            preferredTime: "",
            message: "",
          });
        },
        () => {
          toast.error("Failed to send booking request.");
        }
      );
  };

  const handleChange = (e) => {
    setBookingForm({
      ...bookingForm,
      [e.target.name]: e.target.value,
    });
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Session Options
            </h3>

            <div className="space-y-4">

              <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-2xl border border-pink-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-3">
                  <Video className="text-pink-500 mr-3" size={24} />
                  <h4 className="font-semibold text-gray-900">
                    Online Sessions
                  </h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Convenient video calls from anywhere in the world
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-2xl border border-pink-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-3">
                  <Phone className="text-pink-500 mr-3" size={24} />
                  <h4 className="font-semibold text-gray-900">
                    Phone Sessions
                  </h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Deep conversations over the phone
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-2xl border border-pink-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-3">
                  <MapPin className="text-pink-500 mr-3" size={24} />
                  <h4 className="font-semibold text-gray-900">
                    In-Person (Australia)
                  </h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Face-to-face sessions in select locations
                </p>
              </div>

            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-2xl shadow-lg border border-pink-100"
            >

              {/* UI SAME AS YOUR ORIGINAL FORM */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

                <input name="name" value={bookingForm.name} onChange={handleChange} placeholder="Full Name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg"/>

                <input type="email" name="email" value={bookingForm.email} onChange={handleChange} placeholder="Email Address" required className="w-full px-4 py-3 border border-gray-300 rounded-lg"/>

                <input name="phone" value={bookingForm.phone} onChange={handleChange} placeholder="Phone Number" required className="w-full px-4 py-3 border border-gray-300 rounded-lg"/>

                <select name="service" value={bookingForm.service} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg">
                  <option value="">Select a service</option>
                  <option value="Personal Development Mindset Coaching">Personal Development Mindset Coaching</option>
                  <option value="Spirituality Coaching">Spirituality Coaching</option>
                  <option value="Relationship Coaching">Relationship Coaching</option>
                  <option value="Conscious Parenting Coaching">Conscious Parenting Coaching</option>
                  <option value="Free Consultation">Free 15-min Consultation</option>
                </select>

                <select name="sessionType" value={bookingForm.sessionType} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg">
                  <option value="">Session Type</option>
                  <option value="Online">Online</option>
                  <option value="Phone">Phone</option>
                  <option value="In-Person">In Person</option>
                </select>

                <input type="date" name="preferredDate" value={bookingForm.preferredDate} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg"/>

              </div>

              <select name="preferredTime" value={bookingForm.preferredTime} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-6">
                <option value="">Preferred Time</option>
                <option>9:00 AM</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>2:00 PM</option>
                <option>3:00 PM</option>
                <option>4:00 PM</option>
              </select>

              <textarea name="message" value={bookingForm.message} onChange={handleChange} rows="4" placeholder="Message" className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-8"/>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
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