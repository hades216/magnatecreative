import { GalleryItem } from '../types';

interface GalleryProps {
  items: GalleryItem[];
}

export const Gallery = ({ items }: GalleryProps) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      {items.map((item) => (
        <div key={item.id} className="border border-outline-variant/20 dark:bg-[#0c0c0c] bg-neutral-100/90 group hover:border-primary-fixed/30 transition-all duration-500 overflow-hidden">
          <div className="relative aspect-video overflow-hidden">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
              loading="lazy" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
          </div>
          <div className="p-6">
            <h4 className="font-headline-sm text-lg text-on-background mb-2 italic tracking-tight uppercase group-hover:text-primary transition-colors">{item.title}</h4>
            <p className="text-on-surface-variant text-xs font-light leading-relaxed">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
