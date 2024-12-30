import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import ServiceModal from './ServiceModal';
import Testimonials from './Testimonials';
import { services } from './servicesData';
import { Service } from './types';

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              onClick={() => setSelectedService(service)}
            />
          ))}
        </div>
        <Testimonials />
      </div>
      {selectedService && (
        <ServiceModal
          isOpen={true}
          onClose={() => setSelectedService(null)}
          service={selectedService}
        />
      )}
    </section>
  );
}