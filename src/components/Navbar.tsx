import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <h1 className="text-2xl font-serif font-bold text-gray-900">Bronz Events</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-gold-600 transition-colors">Home</a>
            <a href="#gallery" className="text-gray-700 hover:text-gold-600 transition-colors">Gallery</a>
            <a href="#services" className="text-gray-700 hover:text-gold-600 transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-gold-600 transition-colors">About</a>
            <a href="#contact" className="bg-gold-600 text-white px-4 py-2 rounded-md hover:bg-gold-700 transition-colors">
              Contact Us
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-gold-600">Home</a>
            <a href="#gallery" className="block px-3 py-2 text-gray-700 hover:text-gold-600">Gallery</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-gold-600">Services</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-gold-600">About</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-gold-600">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}