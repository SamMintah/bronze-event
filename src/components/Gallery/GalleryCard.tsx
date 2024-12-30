import React from 'react';
import { GalleryItem } from './types';

interface GalleryCardProps {
  item: GalleryItem;
  onClick: () => void;
}

export default function GalleryCard({ item, onClick }: GalleryCardProps) {
  return (
    <div
      className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <img
        src={item.image}
        alt={item.category}
        className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-center p-6">
          <h3 className="text-2xl font-serif text-white mb-2">{item.category}</h3>
          <p className="text-white/90 mb-4">{item.description}</p>
          <button className="bg-gold-600 text-white px-4 py-2 rounded-md hover:bg-gold-700 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}