import React from 'react';
import { motion } from 'motion/react';
import { 
  Diamond, 
  Rocket, 
  Globe, 
  Palette, 
  Search, 
  ShoppingCart, 
  Cloud, 
  Layers, 
  Code2,
  MousePointer2,
  Share2
} from 'lucide-react';

const expertises = [
  { title: "Brand Strategy", icon: Diamond },
  { title: "Visual Identity", icon: Palette },
  { title: "SEO Precision", icon: Search },
  { title: "Growth Marketing", icon: Rocket },
  { title: "UI/UX Architecture", icon: Code2 },
  { title: "Ecommerce Nodes", icon: ShoppingCart },
  { title: "Cloud Systems", icon: Cloud },
  { title: "System Blueprints", icon: Layers },
  { title: "PPC Networks", icon: MousePointer2 },
  { title: "Social Ecosystems", icon: Share2 },
  { title: "Web Solutions", icon: Globe },
];

export const ExpertiseCarousel = () => {
  return (
    <div className="w-full bg-transparent py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-10 mb-12">
        <h2 className="font-label-sm tracking-[0.3em] text-primary-fixed mb-4 text-center md:text-left uppercase text-[10px]">Our Expertise</h2>
      </div>
      
      <div className="w-full flex overflow-hidden">
        <motion.div 
          className="flex whitespace-nowrap min-w-max gap-8 md:gap-16 pr-8 md:pr-16 shrink-0"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ willChange: "transform" }}
        >
          {[...expertises, ...expertises].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={`a-${idx}`} className="flex flex-col items-center flex-shrink-0 w-28 md:w-36 group">
                <div className="mb-4 text-primary-fixed group-hover:text-secondary opacity-80 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                  <Icon size={46} strokeWidth={1.5} />
                </div>
                <span className="text-xs md:text-sm font-medium text-on-surface-variant group-hover:text-on-background transition-colors whitespace-normal text-center leading-tight">{item.title}</span>
              </div>
            );
          })}
        </motion.div>
        
        <motion.div 
          className="flex whitespace-nowrap min-w-max gap-8 md:gap-16 pr-8 md:pr-16 shrink-0"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ willChange: "transform" }}
        >
          {[...expertises, ...expertises].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={`b-${idx}`} className="flex flex-col items-center flex-shrink-0 w-28 md:w-36 group">
                <div className="mb-4 text-primary-fixed group-hover:text-secondary opacity-80 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                  <Icon size={46} strokeWidth={1.5} />
                </div>
                <span className="text-xs md:text-sm font-medium text-on-surface-variant group-hover:text-on-background transition-colors whitespace-normal text-center leading-tight">{item.title}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};
