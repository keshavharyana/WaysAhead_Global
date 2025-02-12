import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Brain } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-500" />
              <span className="font-bold text-xl text-white">WaysAhead Global</span>
            </Link>
            <p className="text-sm">
              Leading the future of AI and data analytics with innovative solutions for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-blue-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-500 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/use-cases" className="hover:text-blue-500 transition-colors">Use Cases</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-blue-500 transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-blue-500 transition-colors">News</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>AI Shop Assist</li>
              <li>Geo-Spatial Analytics</li>
              <li>In-Store Analytics</li>
              <li>SCM Analytics</li>
              <li>Video Analytics</li>
              <li>Robotics Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-blue-500" />
                <span>contact@waysahead.global</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-blue-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={20} className="text-blue-500" />
                <span>123 Innovation Drive, Tech City, TC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {new Date().getFullYear()} WaysAhead Global. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm hover:text-blue-500 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm hover:text-blue-500 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-sm hover:text-blue-500 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;