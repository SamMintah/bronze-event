import { Flower2, PartyPopper, Sparkles } from 'lucide-react';
import { Service } from './types';

export const services: Service[] = [
  {
    icon: Flower2,
    title: 'Floral Design',
    description: 'Custom floral arrangements that bring life and color to your event space.',
    features: [
      'Custom centerpieces',
      'Archway decorations',
      'Bouquets and boutonnieres',
      'Seasonal flower selections',
      'Installation and setup',
      'Consultation and design planning'
    ],
    addons: [
      { name: 'Premium Flower Selection', price: 'From $200' },
      { name: 'Additional Arrangements', price: 'From $150' },
      { name: 'Flower Wall', price: 'From $500' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&q=80'
    ]
  },
  {
    icon: Sparkles,
    title: 'Lighting Design',
    description: 'Create the perfect ambiance with our professional lighting solutions.',
    features: [
      'Custom lighting plans',
      'LED uplighting',
      'String light installations',
      'Dance floor lighting',
      'Spotlight features',
      'Dimming control systems'
    ],
    addons: [
      { name: 'Color-changing LED Package', price: 'From $300' },
      { name: 'Custom Monogram Projection', price: 'From $200' },
      { name: 'Fairy Light Canopy', price: 'From $400' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80'
    ]
  },
  {
    icon: PartyPopper,
    title: 'Full Event Styling',
    description: 'Comprehensive event decoration from concept to execution.',
    features: [
      'Theme development',
      'Color scheme planning',
      'Furniture selection',
      'Table settings',
      'Backdrop design',
      'Full venue transformation'
    ],
    addons: [
      { name: 'Custom Backdrop Creation', price: 'From $600' },
      { name: 'Luxury Linen Package', price: 'From $400' },
      { name: 'Premium Tableware', price: 'From $300' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80'
    ]
  }
];