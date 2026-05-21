import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, Check } from 'lucide-react';
import { serviceCategories } from '../data/services';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Modal } from '../components/Modal';
import { Gallery } from '../components/Gallery';

export const SubcategoryPage = () => {
  const { id } = useParams();
  const [selectedFeature, setSelectedFeature] = useState<{title: string, detail: string, icon: string} | null>(null);
  
  let selectedSub = null;
  let parentCat = null;
  
  for (const cat of serviceCategories) {
    const sub = cat.subcategories.find(s => s.id === id);
    if (sub) {
      selectedSub = sub;
      parentCat = cat;
      break;
    }
  }

  if (!selectedSub || !parentCat) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 text-on-background">
        <h2 className="text-2xl">Service Subcategory not found</h2>
        <Link to="/" className="ml-4 text-primary-fixed underline">Go Home</Link>
      </div>
    );
  }

  return (
    <div className="w-full pt-32 pb-24 px-6 md:px-10 min-h-screen z-10 relative">
      <div className="max-w-5xl mx-auto">
        <Breadcrumbs items={[
          { label: 'Home', path: '/' },
          { label: parentCat.title, path: `/service/${parentCat.id}` },
          { label: selectedSub.title, path: `/subcategory/${selectedSub.id}` }
        ]} />
        <Link to={`/service/${parentCat.id}`} className="inline-flex items-center text-primary-fixed text-sm mb-12 hover:opacity-80 transition-opacity">
          <ChevronLeft className="w-4 h-4 mr-1" /> Back to {parentCat.title}
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-label-sm tracking-[0.3em] text-secondary mb-4 inline-block uppercase text-[10px]">{parentCat.title}</span>
          <h1 className="font-headline-lg text-4xl md:text-6xl text-on-background leading-[1] tracking-tighter italic mb-8">
            {selectedSub.title}
          </h1>
          <img 
            src={selectedSub.image} 
            srcSet={`${selectedSub.image.replace(/&w=\d+/, '')}&w=600 600w, ${selectedSub.image.replace(/&w=\d+/, '')}&w=1024 1024w, ${selectedSub.image.replace(/&w=\d+/, '')}&w=2048 2048w`}
            sizes="(max-width: 768px) 100vw, 1024px"
            alt={`Abstract visual representing ${selectedSub.title.toLowerCase()} service.`} 
            className="w-full h-96 object-cover rounded shadow-lg border dark:border-white/10 border-black/10 mb-12" 
            loading="lazy" 
            decoding="async"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop';
              target.srcset = '';
            }}
          />
          <p className="text-on-surface-variant text-lg md:text-xl font-light max-w-3xl mb-20">
            {selectedSub.description}
          </p>
        </motion.div>

        {/* Content for Case Studies & Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div>
            <h3 className="font-display-sm text-2xl text-on-background mb-6">Our Approach</h3>
            <p className="text-on-surface-variant text-sm font-light leading-relaxed mb-6">
              When delivering {selectedSub.title}, we focus on comprehensive analysis, strategic planning, and flawless execution. By leveraging modern frameworks and data-driven insights, we ensure that every solution deployed directly aligns with overarching business goals while maintaining maximum efficiency.
            </p>
            {selectedSub.features && (
              <ul className="space-y-4">
                {selectedSub.features.map((feature) => (
                  <li 
                    key={feature.id} 
                    className="flex items-start gap-4 cursor-pointer"
                    onClick={() => setSelectedFeature(feature as {title: string, detail: string, icon: string})}
                  >
                    <span className="material-symbols-outlined text-primary-fixed text-xl">check_circle</span>
                    <span className="text-sm font-light text-on-background hover:text-primary">{feature.title}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          <div className="dark:bg-[#0c0c0c] bg-neutral-100 border dark:border-white/5 border-black/10 p-8 relative overflow-hidden group">
            <h3 className="font-display-sm text-xl text-on-background mb-6 text-secondary relative z-10 flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse"></span>
              Featured Case Study
            </h3>
            
            <div className="relative aspect-video mb-8 overflow-hidden rounded border dark:border-white/10 border-black/10 group-hover:border-primary-fixed/30 transition-colors">
               <img 
                 src={parentCat.id === 'website-solution' 
                   ? 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop' 
                   : parentCat.id === 'branding-and-media-strategy'
                   ? 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop'
                   : 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop'
                 }
                 srcSet={parentCat.id === 'website-solution' 
                   ? 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=400&auto=format&fit=crop 400w, https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop 800w' 
                   : parentCat.id === 'branding-and-media-strategy'
                   ? 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=400&auto=format&fit=crop 400w, https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop 800w'
                   : 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=400&auto=format&fit=crop 400w, https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop 800w'
                 }
                 sizes="(max-width: 768px) 100vw, 50vw"
                 alt="Featured case study showcasing our commitment to structural excellence and performance." 
                 className="w-full h-full object-cover transform-gpu opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" 
                 loading="lazy"
                 decoding="async"
                 onError={(e) => {
                   const target = e.target as HTMLImageElement;
                   target.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop';
                   target.srcset = '';
                 }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            </div>

            <h4 className="font-bold text-on-background text-lg mb-2 relative z-10 italic uppercase tracking-tight">
              {parentCat.id === 'website-solution' ? 'Global Scale Expansion' : parentCat.id === 'branding-and-media-strategy' ? 'Identity Restructure' : 'Algorithmic Dominance'}
            </h4>
            <p className="text-sm text-on-surface-variant font-light mb-8 relative z-10 leading-relaxed">
              {parentCat.id === 'website-solution' 
                ? 'We partnered with an enterprise client to implement our high-performance web framework, resulting in a 150% increase in measurable conversions.' 
                : parentCat.id === 'branding-and-media-strategy'
                ? 'Establishing a cohesive, memorable identity that resonates across all digital channels and physical touchpoints.'
                : 'Data-driven marketing to expand reach and improve ROI through advanced distribution channels.'
              }
            </p>
            <Link 
              to={`/case-study/${parentCat.id === 'website-solution' ? 'global-scale-expansion' : parentCat.id === 'branding-and-media-strategy' ? 'identity-restructure' : 'algorithmic-dominance'}`} 
              className="text-[10px] text-primary-fixed hover:text-white uppercase tracking-[0.3em] transition-colors font-bold flex items-center gap-3 group/link w-fit"
            >
               Initiate Protocol <span className="material-symbols-outlined text-sm group-hover/link:translate-x-3 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </motion.div>
        
        {selectedSub.gallery && selectedSub.gallery.length > 0 && (
          <div className="mt-40">
            <h2 className="font-headline-lg text-4xl text-on-background mb-4 italic tracking-tighter">Project Artifacts</h2>
            <p className="text-on-surface-variant font-light text-sm mb-12 max-w-xl">
              Visual benchmarks and documentation from our successful implementations of {selectedSub.title}.
            </p>
            <Gallery items={selectedSub.gallery} />
          </div>
        )}
        
        <Modal 
          isOpen={!!selectedFeature} 
          onClose={() => setSelectedFeature(null)}
          title={selectedFeature?.title || ''}
          detail={selectedFeature?.detail || ''}
          icon={selectedFeature?.icon || ''}
        />
        
        {/* Contact Us */}
        <motion.div
           className="mt-32 p-10 border border-outline-variant/30 bg-surface/30 text-center"
        >
          <h2 className="font-headline-lg text-3xl md:text-4xl text-on-background mb-4">Ready to start?</h2>
          <p className="text-on-surface-variant mb-8 max-w-xl mx-auto font-light text-sm">
            Ready to implement {selectedSub.title} for your business? Connect with our experts today.
          </p>
          <button className="bg-primary-container text-on-primary px-8 py-3 rounded-sm font-label-sm uppercase tracking-widest text-[12px] hover:brightness-110 active:scale-95 transition-all w-fit mx-auto">
            Contact Us
          </button>
        </motion.div>
      </div>
    </div>
  );
};
