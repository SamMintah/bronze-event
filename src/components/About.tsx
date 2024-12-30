import React from 'react';
import { Heart, Users, Trophy, Clock } from 'lucide-react';

const stats = [
  { icon: <Heart className="w-6 h-6" />, value: '200+', label: 'Events Decorated' },
  { icon: <Users className="w-6 h-6" />, value: '100+', label: 'Happy Clients' },
  { icon: <Trophy className="w-6 h-6" />, value: '5+', label: 'Years Experience' },
  { icon: <Clock className="w-6 h-6" />, value: '24/7', label: 'Support' },
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif mb-6">Crafting Dreams Into Reality</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2020, Bronze Events has been transforming ordinary spaces into extraordinary experiences. 
              Our passion for design and attention to detail has made us the premier choice for event decoration 
              across the country.
            </p>
            <p className="text-gray-600 mb-6">
              Led by Lydia Kpikpitse, our team of creative professionals brings together years of experience in 
              event design, floral arrangements, and spatial aesthetics. We believe every event tells a unique 
              story, and we're here to help tell yours.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-gold-600 flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80"
              alt="Our team in action"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-gold-50 p-6 rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
                alt="Lydia Kpikpitse - Founder"
                className="w-24 h-24 rounded-full border-4 border-white"
              />
              <div className="mt-4">
                <h4 className="font-serif text-lg">Lydia Kpikpitse</h4>
                <p className="text-sm text-gray-600">Founder & Creative Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}