import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { serviceCategories } from '../data/services';
import { caseStudies } from '../data/caseStudies';

export const SEOManager = () => {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    let title = "Magnate Creative | Engineering Pure Supremacy";
    let description = "Magnate Creative is an elite digital agency architecting high-end solutions in creative engineering, bespoke software development, cloud systems, and strategic digital authority.";
    let image = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop";

    // Dynamic routes and lookup setups
    if (pathname === '/') {
      title = "Magnate Creative | Engineering Pure Supremacy";
      description = "Magnate Creative is an elite digital agency architecting high-end solutions in creative engineering, custom website development, cloud systems, and strategic digital authority.";
    } else if (pathname === '/architecture') {
      title = "System Architecture | Magnate Creative";
      description = "Explore our hyper-optimized infrastructure layouts, software architecture blueprints, and cloud orchestration layers.";
    } else if (pathname.startsWith('/service/')) {
      const id = pathname.split('/').pop();
      const category = serviceCategories.find(cat => cat.id === id);
      if (category) {
        title = `${category.title} Solutions | Magnate Creative`;
        description = `${category.description} Explore our tailored services, robust architecture, and elite creative engineering pipelines.`;
        if (category.image) image = category.image;
      }
    } else if (pathname.startsWith('/subcategory/')) {
      const id = pathname.split('/').pop();
      let subcategory = null;
      for (const cat of serviceCategories) {
        const found = cat.subcategories.find(sub => sub.id === id);
        if (found) {
          subcategory = found;
          break;
        }
      }
      if (subcategory) {
        title = `${subcategory.title} | Magnate Creative Services`;
        description = `${subcategory.description} Discover our state-of-the-art methodology, technical features, and elite capabilities in ${subcategory.title}.`;
        if (subcategory.image) image = subcategory.image;
      }
    } else if (pathname.startsWith('/case-study/')) {
      const id = pathname.split('/').pop();
      const study = caseStudies.find(cs => cs.id === id);
      if (study) {
        title = `Case Study: ${study.title} | ${study.client}`;
        description = `${study.description} Read the full success story of how we achieved pure digital dominance for ${study.client}.`;
        if (study.image) image = study.image;
      }
    }

    // Apply document title
    document.title = title;

    // Dynamically update DOM meta elements
    const updateMetaTag = (selector: string, content: string) => {
      const el = document.querySelector(selector);
      if (el) {
        el.setAttribute('content', content);
      }
    };

    updateMetaTag('meta[name="description"]', description);
    
    // Open Graph
    updateMetaTag('meta[property="og:title"]', title);
    updateMetaTag('meta[property="og:description"]', description);
    updateMetaTag('meta[property="og:image"]', image);
    updateMetaTag('meta[property="og:url"]', `https://magnate-creative.com${pathname}`);

    // Twitter Cards
    updateMetaTag('meta[name="twitter:title"]', title);
    updateMetaTag('meta[name="twitter:description"]', description);
    updateMetaTag('meta[name="twitter:image"]', image);

    // Canonical links update
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `https://magnate-creative.com${pathname}`);
    }

  }, [pathname]);

  return null;
};
