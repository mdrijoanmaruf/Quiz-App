import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Footer Content */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">BS Quiz App</h3>
          <p className="text-sm opacity-90">
            Challenge yourself with our Mughal Empire quiz and test your knowledge!
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 text-white">
            <a href="https://github.com/mdrijoanmaruf" aria-label="GitHub" className="hover:text-gray-400 transition">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/mdrijoanmaruf/" aria-label="LinkedIn" className="hover:text-gray-400 transition">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/md.rijoanmaruf" aria-label="Facebook" className="hover:text-gray-400 transition">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/rijoanmaruf/" aria-label="Instagram" className="hover:text-gray-400 transition">
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>

          {/* Contact and Developer Info */}
          <div className="text-sm mt-6 space-y-2 opacity-90">
            <p>Contact: rijoanmaruf@gmail.com | +8801813606468</p>
            <p>Developed by <a href="https://rijoan.com" className="font-bold hover:underline">Md Rijoan Maruf</a></p>
            <p>© 2024 BS Quiz App. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
