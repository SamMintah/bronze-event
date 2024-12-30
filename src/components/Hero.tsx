import React from 'react';

export default function Hero() {
  return (
    <div id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80"
          alt="Elegant event decoration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Transforming Moments into Memories
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Crafting extraordinary events with elegance and sophistication
          </p>
          <a
            href="#contact"
            className="inline-block bg-gold-600 text-white px-8 py-3 rounded-md text-lg hover:bg-gold-700 transition-colors"
          >
            Plan Your Event
          </a>
        </div>
      </div>
    </div>
  );
}