import { GalleryItem } from './types';

export const galleryItems: GalleryItem[] = [
  {
    category: 'Weddings',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80',
    description: 'Transform your special day into an unforgettable experience with our elegant wedding decorations and styling services.',
    details: [
      'Custom floral arrangements',
      'Elegant table settings',
      'Romantic lighting design',
      'Ceremony backdrop styling',
      'Aisle decorations',
      'Reception area design'
    ],
    additionalImages: [
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80'
    ],
    pastEvents: [
      {
        name: 'Emily & James Garden Wedding',
        description: 'A romantic garden wedding featuring blush and ivory florals with elegant drapery.'
      },
      {
        name: 'Sarah & Michael Beach Ceremony',
        description: 'Coastal-themed wedding with natural elements and seaside-inspired decorations.'
      }
    ]
  },
  {
    category: 'Birthday Parties',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80',
    description: 'Create magical celebrations with themed decorations that bring joy and excitement to birthday parties of all ages.',
    details: [
      'Custom theme design',
      'Balloon installations',
      'Dessert table styling',
      'Photo booth setups',
      'Party favor displays',
      'Entertainment area decoration'
    ],
    additionalImages: [
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1533294160622-d5c0a1dfce4d?auto=format&fit=crop&q=80'
    ],
    pastEvents: [
      {
        name: 'Sweet 16 Wonderland',
        description: 'Whimsical Alice in Wonderland themed celebration with interactive elements.'
      },
      {
        name: 'Superhero 5th Birthday',
        description: 'Action-packed party featuring custom superhero decorations and themed activities.'
      }
    ]
  },
  {
    category: 'Social Gatherings',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80',
    description: 'Transform any social occasion into an extraordinary experience with carefully curated decorative elements.',
    details: [
      'Themed party setups',
      'Outdoor event styling',
      'Cocktail party arrangements',
      'Holiday celebrations',
      'Reunion decorations',
      'Garden party settings'
    ],
    additionalImages: [
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80'
    ],
    pastEvents: [
      {
        name: 'Summer Garden Soirée',
        description: 'Elegant outdoor gathering with botanical themes and fairy lights.'
      },
      {
        name: 'New Years Eve Celebration',
        description: 'Glamorous gold and silver themed party with spectacular lighting effects.'
      }
    ]
  }
];