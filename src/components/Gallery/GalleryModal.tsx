import { useState } from 'react';
import Modal from '../shared/Modal';
import { GalleryItem } from './types';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: GalleryItem;
}

export default function GalleryModal({ isOpen, onClose, item }: GalleryModalProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6">
        <h2 className="text-3xl font-serif mb-6">{item.category}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={selectedImage || item.image}
              alt={item.category}
              className={`w-full h-96 object-cover rounded-lg shadow-lg mb-4 ${
                selectedImage ? 'transition-all duration-300 transform scale-105' : ''
              }`}
            />
            <div className="grid grid-cols-3 gap-2">
              {item.additionalImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${item.category} ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg cursor-pointer"
                  onClick={() => setSelectedImage(image)} 
                />
              ))}
            </div>
          </div>
          <div>
            <p className="text-gray-600 mb-6">{item.description}</p>
            <div className="mb-6">
              <h3 className="font-serif text-xl mb-3">Features</h3>
              <ul className="space-y-2">
                {item.details.map((detail, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-3">Past Events</h3>
              <div className="space-y-4">
                {item.pastEvents.map((event, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold">{event.name}</h4>
                    <p className="text-sm text-gray-600">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
