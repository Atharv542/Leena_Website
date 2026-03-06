import React, { useState } from "react";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  X
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  const [activeModal, setActiveModal] = useState(null);

  const Modal = ({ title, children }) => (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6">
      <div className="bg-gray-900 text-gray-300 max-w-4xl w-full rounded-xl border border-gray-700 shadow-lg">

        <div className="flex justify-between items-center p-5 border-b border-gray-700">
          <h2 className="text-xl font-semibold text-white">{title}</h2>

          <button onClick={() => setActiveModal(null)}>
            <X className="text-gray-400 hover:text-white" />
          </button>
        </div>

        <div className="p-6 max-h-[80vh] overflow-y-auto space-y-4 leading-relaxed">
          {children}
        </div>

      </div>
    </div>
  );

  return (
    <>
      <footer className="bg-gray-900 text-white py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

            {/* Brand */}

            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent mb-4">
                Leena
              </div>

              <p className="text-gray-400 mb-6">
                Empowering you to discover your limitless potential and create
                the life you truly desire.
              </p>

              <div className="flex space-x-4">

                <a href="https://www.instagram.com/thewisdominsideout/" target="_blank" className="text-gray-400 hover:text-pink-400">
                  <Instagram size={20} />
                </a>

                <a href="https://www.facebook.com/" target="_blank" className="text-gray-400 hover:text-pink-400">
                  <Facebook size={20} />
                </a>

                <a href="https://www.linkedin.com/" target="_blank" className="text-gray-400 hover:text-pink-400">
                  <Linkedin size={20} />
                </a>

                <a href="https://www.youtube.com/" target="_blank" className="text-gray-400 hover:text-pink-400">
                  <Youtube size={20} />
                </a>

                <a href="https://www.tiktok.com/" target="_blank" className="text-gray-400 hover:text-pink-400">
                  <FaTiktok size={20} />
                </a>

              </div>
            </div>

            {/* Quick Links */}

            <div>

              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-pink-400">Home</a></li>
                <li><a href="#services" className="hover:text-pink-400">Services</a></li>
                <li><a href="#about" className="hover:text-pink-400">About</a></li>
                <li><a href="#testimonials" className="hover:text-pink-400">Testimonials</a></li>
                <li><a href="#podcast" className="hover:text-pink-400">Podcast</a></li>
                <li><a href="#booking" className="hover:text-pink-400">Book Session</a></li>
              </ul>

            </div>

            {/* Services */}

            <div>

              <h3 className="text-lg font-semibold mb-4">Coaching Services</h3>

              <ul className="space-y-2 text-gray-400">
                <li>Personal Development</li>
                <li>Spiritual Coaching</li>
                <li>Relationship Coaching</li>
                <li>Conscious Parenting</li>
                <li>Free Consultation</li>
              </ul>

            </div>

            {/* Contact */}

            <div>

              <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>

              <div className="space-y-3 text-gray-400">

                <div className="flex items-center">
                  <Mail size={16} className="mr-3 text-pink-400" />
                  thewisdominsideout@gmail.com
                </div>

                <div className="flex items-center">
                  <Phone size={16} className="mr-3 text-pink-400" />
                  +61 449 950 346
                </div>

                <div className="flex items-center">
                  <MapPin size={16} className="mr-3 text-pink-400" />
                  Sydney, NSW 2160 Australia
                </div>

              </div>

            </div>

          </div>

          {/* Bottom */}

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">

            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Leena Coaching. All rights reserved. Made with{" "}
              <Heart className="inline w-4 h-4 text-pink-400 mx-1" />
            </div>

            <div className="flex space-x-6 text-sm text-gray-400">

              <button onClick={() => setActiveModal("privacy")} className="hover:text-pink-400">
                Privacy Policy
              </button>

              <button onClick={() => setActiveModal("terms")} className="hover:text-pink-400">
                Terms of Service
              </button>

              <button onClick={() => setActiveModal("cookies")} className="hover:text-pink-400">
                Cookie Policy
              </button>

            </div>

          </div>

        </div>

      </footer>

      {/* TERMS */}

      {activeModal === "terms" && (
        <Modal title="Terms of Service">

          <p><strong>Effective Date:</strong> 2025</p>

          <p>
            Welcome to The Wisdom Inside Out, owned and operated by Leakhina (Leena) Sem.
            By accessing and using our website, services, and resources, you agree to comply
            with and be bound by the following Terms of Service.
          </p>

          <h3 className="text-white font-semibold">1. Introduction</h3>

          <p>
            At The Wisdom Inside Out, we guide you on a transformative journey to unlock
            your full potential and live a life of purpose, meaning, and fulfillment.
          </p>

          <h3 className="text-white font-semibold">2. Services</h3>

          <ul className="list-disc pl-6">
            <li>Personal Development and Mindset Coaching</li>
            <li>Spiritual Coaching</li>
            <li>Relationship Coaching</li>
            <li>Conscious Parenting Coaching</li>
          </ul>

          <p>
            Each service combines methods certified by Jay Shetty's Certification School
            and Neuro Transformation Therapy™ by Luke Hawkins.
          </p>

          <h3 className="text-white font-semibold">3. No Guarantees</h3>

          <p>
            Individual results may vary. Your success depends on your commitment and effort.
          </p>

          <h3 className="text-white font-semibold">4. Payment Terms</h3>

          <p>
            Payments must be made in full prior to services unless otherwise stated.
          </p>

          <h3 className="text-white font-semibold">5. Cancellation & Refund Policy</h3>

          <p>
            Appointments must be canceled or rescheduled at least 24 hours in advance.
          </p>

          <h3 className="text-white font-semibold">6. Intellectual Property</h3>

          <p>
            All materials provided remain the intellectual property of
            The Wisdom Inside Out.
          </p>

          <h3 className="text-white font-semibold">7. Confidentiality</h3>

          <p>
            All coaching sessions remain confidential unless disclosure is required by law.
          </p>

          <h3 className="text-white font-semibold">8. Code of Conduct</h3>

          <p>
            Harassment or inappropriate behavior may result in termination of services.
          </p>

          <h3 className="text-white font-semibold">9. Limitation of Liability</h3>

          <p>
            The Wisdom Inside Out is not liable for damages arising from use of services.
          </p>

          <h3 className="text-white font-semibold">10. Governing Law</h3>

          <p>
            These terms are governed by the laws of NSW, Australia.
          </p>

          <p>
            <strong>Contact:</strong> thewisdominsideout@gmail.com
          </p>

        </Modal>
      )}

      {/* PRIVACY */}

      {activeModal === "privacy" && (
        <Modal title="Privacy Policy">

          <p><strong>Effective Date:</strong> 2025</p>
          <p><strong>Last Updated:</strong> June 2025</p>

          <p>
            At The Wisdom Inside Out, your privacy is important to us.
          </p>

          <h3 className="text-white font-semibold">Information We Collect</h3>

          <ul className="list-disc pl-6">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Payment information</li>
          </ul>

          <h3 className="text-white font-semibold">How We Use Information</h3>

          <ul className="list-disc pl-6">
            <li>Provide services</li>
            <li>Process transactions</li>
            <li>Improve website experience</li>
          </ul>

          <h3 className="text-white font-semibold">Data Security</h3>

          <p>
            We implement measures to protect your personal data.
          </p>

          <p>
            Contact: thewisdominsideout@gmail.com
          </p>

        </Modal>
      )}

      {/* COOKIES */}

      {activeModal === "cookies" && (
        <Modal title="Cookie Policy">

          <p><strong>Effective Date:</strong> 2025</p>

          <h3 className="text-white font-semibold">What Are Cookies</h3>

          <p>
            Cookies are small files stored on your device that remember preferences.
          </p>

          <h3 className="text-white font-semibold">Types of Cookies</h3>

          <ul className="list-disc pl-6">
            <li>Necessary Cookies</li>
            <li>Analytics Cookies</li>
            <li>Functionality Cookies</li>
            <li>Marketing Cookies</li>
          </ul>

          <h3 className="text-white font-semibold">Your Choices</h3>

          <p>
            You can disable cookies via browser settings.
          </p>

          <p>
            Contact: thewisdominsideout@gmail.com
          </p>

        </Modal>
      )}

    </>
  );
};

export default Footer;