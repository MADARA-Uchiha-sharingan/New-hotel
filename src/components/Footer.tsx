import React from 'react';
import { Facebook, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Hotel Pathannapurna</h3>
            <p className="text-gray-400">
              Your perfect stay in the heart of the Annapurna region.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#rooms" className="text-gray-400 hover:text-white transition-colors">
                  Rooms
                </a>
              </li>
              <li>
                <a href="#menu" className="text-gray-400 hover:text-white transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="tel:9856045417" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Phone className="w-5 h-5 mr-2" />
                +977 985-6045417
              </a>
              <a href="mailto:contact@pathannapurna.com" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5 mr-2" />
                contact@pathannapurna.com
              </a>
              <a
                href="https://www.facebook.com/PatAnnapurnahotel/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5 mr-2" />
                Follow us on Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hotel Pathannapurna. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;