import React from 'react';
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent mb-4">
              Leena
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering you to discover your limitless potential and create the life you truly desire.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">About</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">Testimonials</a></li>
              <li><a href="#podcast" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">Podcast</a></li>
              <li><a href="#booking" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">Book Session</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Coaching Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">Personal Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">Spirituality Coaching</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">Relationship Coaching</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">Conscious Parenting</a></li>
              <li><a href="#booking" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">Free Consultation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail size={16} className="mr-3 text-pink-400" />
                hello@leenacoaching.com
              </div>
              <div className="flex items-center text-gray-400">
                <Phone size={16} className="mr-3 text-pink-400" />
                +61 xxx xxx xxx
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-3 text-pink-400" />
                Australia
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-pink-500/10 to-pink-600/10 rounded-lg border border-pink-500/20">
              <p className="text-sm text-gray-300">
                Ready to transform your life? Book your free 15-minute consultation today.
              </p>
              <button className="mt-2 text-pink-400 text-sm font-semibold hover:text-pink-300 transition-colors duration-200">
                Schedule Now →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Leena Coaching. All rights reserved. Made with <Heart className="inline w-4 h-4 text-pink-400 mx-1" /> in Australia.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;