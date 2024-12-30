import React, { useState } from 'react';
import Modal from '../shared/Modal';
import { Service } from './types';
import { Check } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service;
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6">
        <div className="flex items-center mb-6">
          <div className="text-gold-600 mr-4">
            <service.icon className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-serif">{service.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <div className="mb-6">
              <h3 className="font-serif text-xl mb-3">What's Included</h3>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-gold-600 mr-2 mt-1" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="font-serif text-xl mb-4">Popular Add-ons</h3>
              <ul className="space-y-3">
                {service.addons.map((addon, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <span className="text-gray-600">{addon.name}</span>
                    <span className="text-sm text-gold-600">{addon.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            {zoomedImage && (
                <div className="mt-4 p-4 border rounded-lg bg-white shadow-md">
                  <img
                    src={zoomedImage}
                    alt="Zoomed"
                    className="w-full rounded-lg"
                  />
                  <button
                    className="mt-2 text-gold-600 underline"
                    onClick={() => setZoomedImage(null)} 
                  >
                    Close 
                  </button>
                </div>
              )}
            <div>
              <h3 className="font-serif text-xl mb-4">Gallery</h3>
              <div className="grid grid-cols-2 gap-4">
                {service.gallery.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${service.title} ${index + 1}`}
                    className={`rounded-lg shadow-md cursor-pointer ${
                      zoomedImage === image ? 'border-4 border-gold-600' : ''
                    }`}
                    onClick={() =>
                      setZoomedImage(zoomedImage === image ? null : image) // Toggle zoomed image
                    }
                  />
                ))}
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
