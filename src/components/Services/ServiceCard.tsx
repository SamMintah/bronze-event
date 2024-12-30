import React from 'react';
import { Service } from './types';

interface ServiceCardProps {
  service: Service;
  onClick: () => void;
}

export default function ServiceCard({ service, onClick }: ServiceCardProps) {
  return (
    <div
      className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="text-gold-600 mb-4">
        <service.icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-serif mb-4">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <ul className="space-y-2">
        {service.features.slice(0, 4).map((feature, index) => (
          <li key={index} className="text-sm text-gray-500">• {feature}</li>
        ))}
      </ul>
      <button className="mt-6 text-gold-600 hover:text-gold-700 text-sm font-medium">
        View Details →
      </button>
    </div>
  );
}