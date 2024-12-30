export interface PastEvent {
  name: string;
  description: string;
}

export interface GalleryItem {
  category: string;
  image: string;
  description: string;
  details: string[];
  additionalImages: string[];
  pastEvents: PastEvent[];
}