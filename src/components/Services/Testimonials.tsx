import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Emily & James',
    event: 'Wedding',
    text: 'They transformed our venue into an absolute fairy tale. Every detail was perfect!',
    rating: 5
  },
  {
    name: 'Corporate Solutions Inc.',
    event: 'Annual Conference',
    text: 'Professional, punctual, and exceeded our expectations. Highly recommended!',
    rating: 5
  },
  {
    name: 'Sarah Thompson',
    event: 'Sweet 16 Party',
    text: 'Created the most magical setting for my daughters special day. Absolutely wonderful!',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <div className="mt-20">
      <h3 className="text-3xl font-serif text-center mb-12">What Our Clients Say</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex text-gold-400 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
            <div className="text-sm">
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-gray-500">{testimonial.event}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}