import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center mb-12">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" className="mt-1 block w-full  p-2 rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Event Type</label>
                <select className="mt-1 block w-full p-2 rounded-md border-gold-600 shadow-sm focus:border-gold-200 focus:ring-gold-200">
                  <option>Wedding</option>
                  <option>Corporate Event</option>
                  <option>Birthday Party</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-100 shadow-sm focus:border-gold-500 focus:ring-gold-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-gold-600 text-white px-4 py-2 rounded-md hover:bg-gold-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-gold-600" />
              <span>(+233) 123-4567</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-gold-600" />
              <span>contact@ebronze_events.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-gold-600" />
              <span>123 Elegance Street, Accra Ghana, DC 12345</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}