import React, { useState } from 'react';
import GalleryCard from './GalleryCard';
import GalleryModal from './GalleryModal';
import { galleryItems } from './galleryData';
import { GalleryItem } from './types';

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center mb-12">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <GalleryCard
              key={index}
              item={item}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>
      </div>
      {selectedItem && (
        <GalleryModal
          isOpen={true}
          onClose={() => setSelectedItem(null)}
          item={selectedItem}
        />
      )}
    </section>
  );
}