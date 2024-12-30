import { LucideIcon } from 'lucide-react';

export interface ServiceAddon {
  name: string;
  price: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  addons: ServiceAddon[];
  gallery: string[];
}