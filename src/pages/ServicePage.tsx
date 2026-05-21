import { useParams, Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, Check } from 'lucide-react';
import { serviceCategories } from '../data/services';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Modal } from '../components/Modal';
import { Gallery } from '../components/Gallery';

export const ServicePage = () => {
  const { id } = useParams();
  const [selectedFeature, setSelectedFeature] = useState<{title: string, detail: string, icon: string} | null>(null);
  
  const category = serviceCategories.find(cat => cat.id === id);

  const galleryItems = useMemo(() => {
    return category ? category.subcategories.flatMap(sub => sub.gallery) : [];
  }, [category]);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 text-on-background">
        <h2 className="text-2xl">Service not found</h2>
        <Link to="/" className="ml-4 text-primary-fixed underline">Go Home</Link>
      </div>
    );
  }

  return (
    <div className="w-full pt-32 pb-24 px-6 md:px-10 min-h-screen z-10 relative">
      <div className="max-w-5xl mx-auto">
        <Breadcrumbs items={[
          { label: 'Home', path: '/' },
          { label: category.title, path: `/service/${category.id}` }
        ]} />
        <Link to="/" className="inline-flex items-center text-primary-fixed text-sm mb-12 hover:opacity-80 transition-opacity">
          <ChevronLeft className="w-4 h-4 mr-1" /> Back to Home
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="material-symbols-outlined text-primary-fixed text-5xl" style={{fontVariationSettings: "'FILL' 0"}}>{category.icon}</span>
            <h1 className="font-headline-lg text-4xl md:text-6xl text-on-background leading-[1] tracking-tighter italic">
              {category.title}
            </h1>
          </div>
          <img 
            src={category.image} 
            srcSet={`${category.image.replace(/&w=\d+/, '')}&w=600 600w, ${category.image.replace(/&w=\d+/, '')}&w=1024 1024w, ${category.image.replace(/&w=\d+/, '')}&w=2048 2048w`}
            sizes="(max-width: 768px) 100vw, 1024px"
            alt={`Visual interpretation of ${category.title} services. An abstract representation of our professional offerings.`} 
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
            {category.description}
          </p>
          
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {category.subcategories.map((sub, idx) => (
            <motion.div
              key={sub.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
              className="border border-outline-variant/30 flex flex-col h-full bg-surface/30 hover:bg-surface/50 hover:border-primary/50 transition-all duration-300 relative group hover:scale-[1.02]"
            >
              <div className="overflow-hidden mb-6">
                <img 
                  src={sub.image} 
                  srcSet={`${sub.image.replace(/&w=\d+/, '')}&w=400 400w, ${sub.image.replace(/&w=\d+/, '')}&w=800 800w`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  alt={`Abstract visual representing ${sub.title.toLowerCase()} service.`} 
                  className="w-full h-48 object-cover transition-all duration-500 transform-gpu group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                  loading="lazy" 
                  decoding="async"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop';
                    target.srcset = '';
                  }}
                />
              </div>
              <div className="p-8 pb-8 pt-0">
                <h3 className="font-display-sm text-2xl text-on-background mb-4 tracking-tight leading-none group-hover:text-primary transition-colors flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary-fixed text-2xl" style={{fontVariationSettings: "'FILL' 0"}}>
                    {
                      {
                        'layout': 'web',
                        'code': 'code',
                        'shopping-cart': 'shopping_cart',
                        'shopping-bag': 'local_mall',
                        'server': 'dns',
                        'compass': 'explore',
                        'award': 'workspace_premium',
                        'pen-tool': 'draw',
                        'book': 'menu_book',
                        'search': 'search',
                        'users': 'group',
                        'mouse-pointer-2': 'ads_click',
                        'bar-chart': 'query_stats',
                        'mail': 'mail'
                      }[sub.icon] || 'label'
                    }
                  </span>
                  {sub.title}
                </h3>
                <p className="text-on-surface-variant text-sm font-light flex-grow mb-6">
                  {sub.description}
                </p>
                {sub.features && (
                  <ul className="space-y-2 mb-6">
                    {sub.features.map((feature) => (
                      <li 
                        key={feature.id} 
                        className="flex items-center text-xs text-on-surface-variant/80 font-mono cursor-pointer hover:text-primary"
                        onClick={() => setSelectedFeature(feature as {title: string, detail: string, icon: string})}
                      >
                        <Check className="w-3 h-3 mr-2 text-primary-fixed" />
                        {feature.title}
                      </li>
                    ))}
                  </ul>
                )}
                <Link to={`/subcategory/${sub.id}`} className="mt-auto inline-flex items-center text-[10px] tracking-widest uppercase hover:text-primary transition-colors text-on-background/80">
                  Explore Details <span className="material-symbols-outlined text-sm ml-2">arrow_forward</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <Modal 
          isOpen={!!selectedFeature} 
          onClose={() => setSelectedFeature(null)}
          title={selectedFeature?.title || ''}
          detail={selectedFeature?.detail || ''}
          icon={selectedFeature?.icon || ''}
        />
        
        {galleryItems.length > 0 && (
          <div className="mt-40">
            <h2 className="font-headline-lg text-4xl text-on-background mb-4 italic tracking-tighter">Strategic Visuals</h2>
            <p className="text-on-surface-variant font-light text-sm mb-12 max-w-xl">
              A curated selection of artifacts representing our methodology and successful implementations across various digital landscapes.
            </p>
            <Gallery items={galleryItems} />
          </div>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32 p-10 border border-outline-variant/30 bg-surface/30 text-center"
        >
          <h2 className="font-headline-lg text-3xl md:text-4xl text-on-background mb-4">Start your journey with us</h2>
          <p className="text-on-surface-variant mb-8 max-w-xl mx-auto font-light text-sm">
            Ready to implement {category.title} strategies for your business? Connect with our experts today.
          </p>
          <button className="bg-primary-container text-on-primary px-8 py-3 rounded-sm font-label-sm uppercase tracking-widest text-[12px] hover:brightness-110 active:scale-95 transition-all w-fit mx-auto">
            Contact Us
          </button>
        </motion.div>
      </div>
    </div>
  );
};
