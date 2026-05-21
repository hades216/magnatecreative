export interface Feature {
  id: string;
  title: string;
  detail: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  description: string;
}

export interface Subcategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  features: Feature[];
  gallery: GalleryItem[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  subcategories: Subcategory[];
}
