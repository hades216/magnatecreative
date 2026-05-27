import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Banner } from '../components/Banner';
import { GooeyText } from '../components/GooeyText';
import { ExpertiseCarousel } from '../components/ExpertiseCarousel';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { serviceCategories } from '../data/services';
import { caseStudies } from '../data/caseStudies';

const testimonials = [
  { text: "The architectural precision Magnate brought to our digital flagship redefined our market presence. They don't just build websites; they craft digital monuments.", initials: "MK", name: "Marcus Kael", title: "CEO, Obsidian Lab" },
  { text: "Our rebranding was atmospheric, mysterious, and ultimately transformative. Magnate’s vision for our identity felt less like a project and more like a rebirth.", initials: "ER", name: "Elias Thorne", title: "Director, Neon Media" },
  { text: "Their digital marketing strategy is pure engineering supremacy. Organic growth scaled beyond our projections, grounded in data-driven dominance.", initials: "XN", name: "Xenon Nash", title: "Growth Lead, Cipher Systems" },
  { text: "The absolute synthesis of bleeding-edge technical capabilities with an elite cinematic finish. Our brand authority was cemented overnight.", initials: "LC", name: "Lucian Cross", title: "Founder, Aether Corp" },
  { text: "They approached our digital platform the way a master architect plans a monolith. The structural beauty and raw performance are unparalleled.", initials: "FS", name: "Freya Sterling", title: "MD, Helix Ventures" },
  { text: "Magnate created an atmospheric, obsidian-infused digital pipeline that captivates our clients. It's not design—it's high craftsmanship.", initials: "TV", name: "Thorne Vance", title: "Creative Lead, Spectral Arts" },
  { text: "Their computational design approach solved our interaction depth issues. The interface performs with flawless fluid speed and absolute precision.", initials: "SR", name: "Sonya Reyes", title: "Head of AI, Apex Analytics" },
  { text: "Unbelievable fidelity. Every micro-interaction is polished, and the dark-mode narrative structure is incredibly compelling to our high-net-worth investors.", initials: "AT", name: "Alistair Thorne", title: "Partner, Zenith Capital" },
  { text: "From the layout animations to the custom shader pipelines, Magnate is the pinnacle of creative engineering. They didn't just meet our specs; they set a new industry benchmark.", initials: "JC", name: "Jaxen Cole", title: "Chief Architect, Chronos Systems" }
];

const faqs = [
  {
    question: "Which digital services do you specialize in?",
    answer: "At Magnate Creative, we orchestrate high-performance digital ecosystems, ranging from high-end front-end applications with complex real-time shader networks and interactive 3D motion systems to scalable, robust cloud infrastructures and data-driven marketing authority pipelines."
  },
  {
    question: "How does your design and development process operate?",
    answer: "Our pipeline combines structural narrative design with strict custom-tailored creative engineering. We operate under an architectural methodology, creating detailed prototypes, highly optimized web layouts, and continuous server configurations before finalizing any build in the production ecosystem."
  },
  {
    question: "What technologies constitute your core technical setup?",
    answer: "We deploy robust modern setups comprising React 18+, Vite, Tailwind CSS, customized TypeScript, and low-latency Node.js API services, alongside cloud container deployment engines (such as Docker, Cloud Run) and edge networks to guarantee absolute performance and peak reliability."
  },
  {
    question: "Can you optimize or scale our existing infrastructure?",
    answer: "Yes. We specialize in computational audits and refactoring processes. Our engineering team can analyze your database configurations, asset pipelines, and interface responsiveness to scale systems beyond initial projections and establish true organic growth."
  },
  {
    question: "Does Magnate Creative engage in long-term partnerships?",
    answer: "Absolutely. We treat project deliverables as starting points for sustained authority. We offer structural support tiers, operational maintenance nodes, and analytical optimization rounds to continuously advance your platform as technology trends shift."
  },
  {
    question: "How do we initiate a project with your engineering team?",
    answer: "Engagement begins with a system assessment protocol. By clicking 'Connect Now,' you can input your enterprise parameters and start a dedicated architectural brief with our Creative Director and Senior Engineers to define your digital supremacy pipeline."
  }
];

const headingContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    }
  }
};

const headingLineVariants = {
  hidden: { 
    y: "110%", 
    opacity: 0,
    rotateX: 10,
  },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      damping: 18,
      stiffness: 80,
      duration: 1.0,
    }
  }
};

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const cardItemVariants = {
  hidden: { 
    opacity: 0, 
    y: 45,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 22,
      stiffness: 75,
      duration: 0.85
    }
  }
};

const Shimmer = () => (
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-fixed/5 to-transparent -translate-x-full"
    animate={{
      x: ["-100%", "100%"]
    }}
    transition={{
      repeat: Infinity,
      duration: 1.8,
      ease: "linear"
    }}
  />
);

const ServiceCategorySkeleton = () => (
  <div className="relative overflow-hidden flex flex-col w-[85vw] max-w-[320px] md:max-w-none md:w-[420px] h-[480px] md:h-[580px] dark:bg-[#080808]/80 bg-neutral-200/50 border dark:border-white/5 border-black/5 p-6 md:p-10 flex-shrink-0 shadow-xl select-none">
    <Shimmer />
    <div className="flex items-start justify-between mb-4 md:mb-6">
      <div className="w-16 h-16 md:w-18 md:h-18 dark:bg-white/[0.04] bg-black/[0.02] border dark:border-white/5 border-black/5 rounded-xs" />
      <div className="flex flex-col items-end gap-2">
        <div className="w-12 h-2.5 dark:bg-white/[0.04] bg-black/[0.02]" />
        <div className="w-16 h-2 dark:bg-white/[0.04] bg-black/[0.02]" />
      </div>
    </div>
    <div className="mb-4 md:mb-6 flex-grow">
      <div className="h-8 w-3/4 dark:bg-white/[0.05] bg-black/[0.03] mb-4 animate-pulse rounded-xs" />
      <div className="h-[1px] w-12 dark:bg-white/[0.05] bg-black/[0.03] mb-4" />
      <div className="space-y-2">
        <div className="h-3 w-full dark:bg-white/[0.03] bg-black/[0.02] rounded-xs" />
        <div className="h-3 w-5/6 dark:bg-white/[0.03] bg-black/[0.02] rounded-xs" />
        <div className="h-3 w-4/5 dark:bg-white/[0.03] bg-black/[0.02] rounded-xs" />
      </div>
    </div>
    <div className="space-y-3 mb-6">
      <div className="h-2 w-1/2 dark:bg-white/[0.03] bg-black/[0.02] rounded-xs animate-pulse" />
      <div className="h-2 w-1/3 dark:bg-white/[0.03] bg-black/[0.02] rounded-xs animate-pulse" />
      <div className="h-2 w-2/5 dark:bg-white/[0.03] bg-black/[0.02] rounded-xs animate-pulse" />
    </div>
    <div className="pt-4 md:pt-6 border-t dark:border-white/5 border-black/5 flex justify-between items-center">
      <div className="h-3 w-24 dark:bg-white/[0.04] bg-black/[0.02] rounded-xs" />
      <div className="w-2.5 h-2.5 dark:bg-white/[0.04] bg-black/[0.02] rounded-none rotate-45" />
    </div>
  </div>
);

const CaseStudySkeleton = () => (
  <div className="relative flex flex-col h-[520px] dark:bg-[#0a0a0a]/60 bg-neutral-200/40 dark:border-white/5 border-black/10 overflow-hidden shadow-xl select-none">
    <Shimmer />
    <div className="relative aspect-[16/10] dark:bg-neutral-900/40 bg-neutral-300/40 overflow-hidden">
      <div className="absolute top-6 left-6 w-16 h-2 dark:bg-white/[0.04] bg-black/[0.02] rounded-xs" />
    </div>
    <div className="p-10 flex flex-col flex-grow">
      <div className="w-24 h-2 dark:bg-white/[0.05] bg-black/[0.03] mb-4 rounded-xs animate-pulse" />
      <div className="h-6 w-5/6 dark:bg-white/[0.06] bg-black/[0.04] mb-3 rounded-xs animate-pulse" />
      <div className="h-6 w-2/3 dark:bg-white/[0.06] bg-black/[0.04] mb-6 rounded-xs animate-pulse" />
      <div className="mt-auto pt-8 border-t dark:border-white/5 border-black/10 flex justify-between">
        <div className="h-3 w-28 dark:bg-white/[0.04] bg-black/[0.02] rounded-xs" />
        <div className="w-3.5 h-3.5 dark:bg-white/[0.04] bg-black/[0.02] rounded-xs" />
      </div>
    </div>
  </div>
);

export const Home = ({ setIsContactModalOpen }: { setIsContactModalOpen: (open: boolean) => void }) => {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <header className="relative h-[85vh] md:h-screen w-full flex items-center justify-center z-10 transition-colors overflow-hidden">
        {/* Ambient Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(255,77,0,0.1)_0%,transparent_70%)] -translate-x-1/4 -translate-y-1/4 rounded-full pointer-events-none transform-gpu" />
          <div className="absolute bottom-[20%] right-[10%] w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.08)_0%,transparent_70%)] translate-x-1/4 translate-y-1/4 rounded-full pointer-events-none transform-gpu" />
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>

        <motion.div 
          className="relative z-10 flex flex-col items-center text-center px-6 md:px-10 max-w-7xl pt-20"
        >
          <motion.h1 
            className="font-headline-lg text-[34px] sm:text-[54px] md:text-[84px] lg:text-[96px] leading-[0.85] md:leading-[0.8] tracking-[-0.04em] uppercase italic mb-12 flex flex-col items-center text-center select-none -space-y-2.5 sm:-space-y-5 md:-space-y-8 lg:-space-y-10"
            variants={headingContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="block overflow-hidden w-full flex justify-center py-3 md:py-6 -my-3 md:-my-6">
              <motion.span 
                variants={headingLineVariants}
                className="font-black tracking-tighter glass-text inline-block origin-bottom shrink-0 pb-1"
              >
                CRAFTING
              </motion.span>
            </span>
            <span className="block overflow-hidden w-full flex justify-center py-3 md:py-6 -my-3 md:-my-6">
              <motion.span 
                variants={headingLineVariants}
                className="font-black tracking-tighter glass-text-accent inline-block origin-bottom shrink-0 pb-1.5"
              >
                NOBLE
              </motion.span>
            </span>
            <span className="block overflow-hidden w-full flex justify-center py-3 md:py-6 -my-3 md:-my-6">
              <motion.span 
                variants={headingLineVariants}
                className="font-black tracking-tighter glass-text inline-block origin-bottom shrink-0 pb-1"
              >
                EXCELLENCE.
              </motion.span>
            </span>
          </motion.h1>
          <motion.p 
            className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            Clear strategies, honest work, and a creative team fully invested in your everyday progress.
          </motion.p>
          <motion.div 
            className="flex flex-col md:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="bg-primary-container text-on-primary px-10 py-4 rounded-sm font-label-sm font-bold shadow-lg hover:brightness-110 transition-all uppercase tracking-widest animate-glow-pulse"
            >
              Connect Now
            </button>
            <a href="#services" className="border border-outline text-on-background px-10 py-4 rounded-sm font-label-sm font-bold hover:bg-white/5 transition-all uppercase tracking-widest text-center flex items-center justify-center cursor-pointer">
              Access Services
            </a>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <span className="material-symbols-outlined text-primary text-4xl opacity-70 hover:opacity-100 transition-opacity cursor-pointer">keyboard_double_arrow_down</span>
        </div>
      </header>

      {/* Banner & Expertise Container */}
      <section className="relative z-20 bg-background border-t border-b border-outline-variant overflow-hidden">
        <ExpertiseCarousel />
        <Banner />
        <GooeyText />
      </section>

      {/* The Stitch Advantage */}
      <section id="technology" className="py-24 md:py-40 px-10 relative overflow-hidden z-10 border-t border-outline-variant">
        <div 
          className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(255,77,0,0.06)_0%,transparent_60%)] -translate-x-1/4 -translate-y-1/4 rounded-full pointer-events-none transform-gpu"
        ></div>
        
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-outline-variant pb-8">
            <div className="text-left">
              <span className="font-label-sm tracking-[0.3em] text-primary-fixed mb-4 inline-block">THE PHILOSOPHY</span>
              <h2 className="font-headline-lg text-headline-lg text-on-background m-0 leading-[0.8] tracking-tighter italic">
                The Magnate<br/><span className="text-stroke">Advantage</span>
              </h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="glass-panel p-10 rounded-sm group hover:glass-panel-active transition-all duration-500 border border-outline-variant bg-surface/50"
            >
              <span className="material-symbols-outlined text-primary-fixed text-4xl mb-12 block group-hover:scale-110 transition-transform">pentagon</span>
              <h3 className="font-label-sm text-base text-on-background mb-4 tracking-widest leading-tight">Identity<br/>Engineering</h3>
              <p className="text-on-surface-variant leading-relaxed font-light text-sm">We engineer robust identities and narrative architectures that resonate at scale and maintain structural integrity.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="glass-panel p-10 rounded-sm group hover:glass-panel-active transition-all duration-500 md:translate-y-12 border border-outline-variant bg-surface/50"
            >
              <span className="material-symbols-outlined text-secondary text-4xl mb-12 block group-hover:scale-110 transition-transform">show_chart</span>
              <h3 className="font-label-sm text-base text-on-background mb-4 tracking-widest leading-tight">Algorithmic<br/>Growth</h3>
              <p className="text-on-surface-variant leading-relaxed font-light text-sm">Leveraging data-driven optimizations and advanced distribution channels to ensure your expansion meets peak ROI requirements.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-panel p-10 rounded-sm group hover:glass-panel-active transition-all duration-500 md:translate-y-24 border border-outline-variant bg-surface/50"
            >
              <span className="material-symbols-outlined text-on-background text-4xl mb-12 block group-hover:scale-110 transition-transform">polyline</span>
              <h3 className="font-label-sm text-base text-on-background mb-4 tracking-widest leading-tight">Digital<br/>Infrastructures</h3>
              <p className="text-on-surface-variant leading-relaxed font-light text-sm mb-6">Designing high-performance web ecosystems and custom eCommerce nodes with a focus on speed, scalability, and security.</p>
              <a href="#services" className="mt-auto text-[9px] tracking-[0.3em] uppercase text-primary-fixed dark:hover:text-white hover:text-black transition-colors flex items-center cursor-pointer">
                Review Services <span className="material-symbols-outlined text-sm ml-2">architecture</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Nodes (Solutions) */}
      <section id="services" className="py-32 border-t border-outline-variant relative overflow-hidden bg-transparent z-10">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 relative z-10 gap-8">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="font-label-sm tracking-[0.5em] text-primary-fixed mb-4 inline-block uppercase text-[10px]">ENGINEERING_PORTFOLIO</span>
                <h2 className="font-headline-lg text-5xl sm:text-6xl md:text-8xl text-on-background m-0 leading-[0.85] tracking-tighter italic">
                  Digital<br/><span className="text-stroke text-4xl sm:text-6xl md:text-8xl">Solutions</span>
                </h2>
              </motion.div>
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-on-surface-variant max-w-sm text-sm font-light leading-relaxed border-l-2 md:border-l border-primary-fixed md:border-outline-variant pl-6 md:pl-8"
            >
              We don't just build products; we architect high-performance digital ecosystems engineered for absolute reliability and market dominance.
            </motion.p>
          </div>
          
          {/* Continuous Slide Motion for Services */}
          <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-10 z-10">
            {loading ? (
              <div className="flex gap-8 px-10 overflow-x-auto w-full justify-start md:justify-center scrollbar-none pb-4">
                {[1, 2, 3, 4].map((n) => (
                  <ServiceCategorySkeleton key={n} />
                ))}
              </div>
            ) : (
              <motion.div 
                 className="flex gap-8 whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ 
                  x: { duration: 50, repeat: Infinity, ease: "linear" }
                }}
                style={{ width: "fit-content", willChange: "transform" }}
              >
                {/* Duplicate categories for infinite effect */}
                {[...serviceCategories, ...serviceCategories].map((category, idx) => {
                  return (
                    <motion.div 
                      key={`${category.id}-${idx}`}
                      className="group relative overflow-hidden flex flex-col w-[85vw] max-w-[320px] md:max-w-none md:w-[420px] h-[480px] md:h-[580px] dark:bg-neutral-950/90 bg-neutral-100/90 border dark:border-white/[0.15] border-black/[0.12] hover:border-primary-fixed/80 dark:hover:bg-black/95 hover:bg-white transition-all duration-500 shadow-[0_4px_30px_rgba(0,0,0,0.15)] dark:shadow-[0_0_60px_rgba(0,0,0,0.8)] backdrop-blur-xl p-6 md:p-10 flex-shrink-0"
                    >
                      {/* Simplified Background Pattern */}
                      <div className="absolute inset-0 opacity-10 pointer-events-none dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                      
                      {/* Hover Accent Glow Line - Top only for speed */}
                      <div className="absolute top-0 left-0 w-0 h-[1px] bg-primary-fixed group-hover:w-full transition-all duration-700 ease-out"></div>
                      
                      {/* Technical Background Elements - Simplified */}
                      <div className="absolute -right-16 -bottom-16 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-1000 rotate-12 pointer-events-none overflow-hidden">
                        <span className="material-symbols-outlined text-[300px]" style={{fontVariationSettings: "'FILL' 0"}}>{category.icon}</span>
                      </div>

                      <div className="relative z-10 flex flex-col h-full whitespace-normal">
                        <div className="flex items-start justify-between mb-4 md:mb-6">
                          <div className="relative">
                            <div className="relative w-16 h-16 md:w-18 md:h-18 dark:bg-white/[0.08] bg-black/[0.04] border dark:border-white/10 border-black/10 flex items-center justify-center rounded-xs group-hover:bg-primary-fixed/10 group-hover:border-primary-fixed/40 transition-all duration-500">
                              <span className="material-symbols-outlined text-primary-fixed text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-500" style={{fontVariationSettings: "'FILL' 0"}}>{category.icon || 'terminal'}</span>
                            </div>
                          </div>
                          <div className="flex flex-col items-end">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.6)]"></span>
                              <span className="font-mono text-[9px] text-green-400/80 tracking-widest uppercase">Active</span>
                            </div>
                            <div className="font-mono text-[10px] text-primary-fixed/40 tracking-[0.4em] uppercase">SYSTEM_NODE</div>
                          </div>
                        </div>

                        <div className="mb-4 md:mb-6">
                          <h4 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-on-background mb-3 md:mb-4 tracking-tighter leading-tight italic uppercase group-hover:text-primary-fixed transition-colors duration-500 whitespace-normal">{category.title}</h4>
                          <div className="h-[1px] w-12 bg-primary-fixed group-hover:w-full transition-all duration-700 mb-4 md:mb-6 opacity-50"></div>
                          <p className="text-on-surface-variant text-xs sm:text-sm md:text-base mb-4 md:mb-6 font-light leading-relaxed line-clamp-3 opacity-90 whitespace-normal">{category.description}</p>
                        </div>

                        {/* Detail List - Simplified */}
                        <div className="space-y-2 md:space-y-3 mb-6 md:mb-8 overflow-hidden">
                          {category.subcategories.slice(0, 3).map((sub, sIdx) => (
                             <div key={sIdx} className="flex items-center gap-4 group/item">
                               <div className="w-1.5 h-1.5 bg-primary-fixed/30 group-hover/item:bg-primary-fixed transition-all duration-300"></div>
                               <span className="text-[11px] tracking-[0.15em] text-on-background/60 group-hover/item:text-on-background transition-colors duration-300 uppercase font-medium">{sub.title}</span>
                             </div>
                          ))}
                        </div>

                        <div className="mt-auto flex items-center justify-between border-t dark:border-white/[0.08] border-black/[0.08] pt-4 md:pt-6">
                          <Link to={`/service/${category.id}`} className="group/btn flex items-center gap-4 text-[11px] tracking-[0.4em] uppercase text-on-background/70 dark:group-hover:text-white group-hover:text-black transition-all font-bold">
                            <span>Initialize</span>
                            <span className="material-symbols-outlined text-base group-hover:translate-x-2 transition-transform text-primary-fixed">arrow_forward</span>
                          </Link>
                          
                          <div className="flex items-center gap-3">
                            <motion.div 
                              animate={{ opacity: [0.3, 0.8, 0.3] }}
                              transition={{ duration: 3, repeat: Infinity }}
                              className="w-2.5 h-2.5 bg-primary-fixed rounded-none rotate-45"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
            
            {/* Gradient Overlays for smooth entry/exit */}
            <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Data in Motion */}
      <section id="metrics" className="py-32 border-t border-outline-variant bg-transparent relative overflow-hidden z-10">
        <div className="max-w-[1200px] mx-auto text-center relative z-10 px-10">
          <h2 className="font-label-sm text-primary-fixed mb-24 tracking-[0.5em] text-[10px]">SYSTEM_PERFORMANCE_METRICS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-x-12">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center border border-outline-variant/30 bg-surface/30 p-10"
            >
              <div className="text-5xl lg:text-[100px] font-display-xl text-on-background leading-[0.8] mb-8 tracking-tighter italic">
                <AnimatedCounter value={99.9} decimals={1} suffix="%" />
              </div>
              <div className="w-full h-1 bg-on-surface-variant/20 rounded-full overflow-hidden mb-6 relative">
                <motion.div 
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "-0.1%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.5, ease: "easeOut", delay: 0.2 }}
                  className="absolute inset-0 w-full h-full bg-primary-fixed"
                ></motion.div>
              </div>
              <p className="font-label-sm text-on-surface-variant text-[10px] tracking-widest uppercase">Infrastructure Uptime</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center border border-outline-variant/30 bg-surface/30 p-10"
            >
              <div className="text-5xl lg:text-[100px] font-display-xl text-on-background leading-[0.8] mb-8 tracking-tighter italic">
                <AnimatedCounter value={50} suffix="+" />
              </div>
              <div className="w-full h-1 bg-on-surface-variant/20 rounded-full overflow-hidden mb-6 relative">
                <motion.div 
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "0%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.5, ease: "easeOut", delay: 0.4 }}
                  className="absolute inset-0 w-full h-full bg-on-background"
                ></motion.div>
              </div>
              <p className="font-label-sm text-on-surface-variant text-[10px] tracking-widest uppercase">Projects Successfully Launched</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center border border-outline-variant/30 bg-surface/30 p-10"
            >
              <div className="text-5xl lg:text-[100px] font-display-xl text-on-background leading-[0.8] mb-8 tracking-tighter italic">
                <AnimatedCounter value={100} suffix="k+" />
              </div>
              <div className="w-full h-1 bg-on-surface-variant/20 rounded-full overflow-hidden mb-6 relative">
                <motion.div 
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "-15%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.5, ease: "easeOut", delay: 0.6 }}
                  className="absolute inset-0 w-full h-full bg-outline"
                ></motion.div>
              </div>
              <p className="font-label-sm text-on-surface-variant text-[10px] tracking-widest uppercase">Monthly Impressions Managed</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recent Success Stories */}
      <section className="py-32 border-t border-outline-variant bg-transparent relative overflow-hidden z-10">
        <div className="max-w-[1300px] mx-auto px-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div className="max-w-2xl">
              <span className="font-label-sm tracking-[0.5em] text-secondary mb-4 inline-block uppercase text-[10px]">DEPLOYMENT_ARCHIVE</span>
              <h2 className="font-headline-lg text-6xl md:text-8xl text-on-background m-0 leading-[0.85] tracking-tighter italic uppercase">
                Recent<br/><span className="text-stroke">Success</span>
              </h2>
            </div>
            <a href="#services" className="text-primary-fixed hover:text-white uppercase tracking-[0.3em] font-bold text-[10px] flex items-center gap-4 transition-all group/view cursor-pointer">
              Review Full Registry <span className="material-symbols-outlined text-sm group-hover/view:translate-x-2 transition-transform">arrow_forward</span>
            </a>
          </div>

          <motion.div 
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {loading ? (
              [1, 2, 3].map((n) => (
                <CaseStudySkeleton key={n} />
              ))
            ) : (
              caseStudies.slice(0, 3).map((study, idx) => (
                <motion.div
                  key={study.id}
                  variants={cardItemVariants}
                  className="group relative flex flex-col h-[520px] dark:bg-[#0a0a0a] bg-neutral-100 dark:border-white/5 border-black/10 overflow-hidden shadow-2xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={`Visual showcase of case study: ${study.title}`} 
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 transform-gpu group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t dark:from-[#0a0a0a] from-neutral-100 via-transparent to-transparent"></div>
                    <div className="absolute top-6 left-6 font-mono text-[9px] dark:text-white/40 text-black/45 tracking-[0.3em] uppercase group-hover:text-primary-fixed transition-colors">Case_00{idx + 1}</div>
                  </div>
                  
                  <div className="p-10 flex flex-col flex-grow">
                    <div className="font-mono text-[9px] text-primary-fixed/60 tracking-[0.4em] uppercase mb-4">{study.client}</div>
                    <h3 className="font-headline-lg text-2xl text-on-background mb-6 italic uppercase group-hover:text-primary-fixed transition-colors leading-tight">{study.title}</h3>
                    
                    <div className="mt-auto pt-8 border-t dark:border-white/[0.05] border-black/[0.08]">
                      <Link to={`/case-study/${study.id}`} className="group/btn flex items-center justify-between text-[10px] tracking-[0.4em] uppercase text-on-background/70 dark:group-hover:text-white group-hover:text-black transition-all font-bold">
                          Access Protocol
                          <span className="material-symbols-outlined text-[14px] transform group-hover/btn:translate-x-2 transition-transform text-primary-fixed">login</span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="insights" className="py-32 border-t border-outline-variant bg-transparent relative overflow-hidden z-10">
        <div className="max-w-[1200px] mx-auto px-10">
          <div className="flex flex-col justify-center items-center text-center mb-16 border-b border-outline-variant pb-8">
            <span className="font-label-sm tracking-[0.3em] text-secondary mb-4 inline-block">CLIENT SENTIMENT</span>
            <h2 className="font-headline-lg text-headline-lg text-on-background m-0 leading-[0.8] tracking-tighter italic">
              Trusted by <span className="text-stroke">Visionaries</span>
            </h2>
          </div>
          
          <div className="relative max-w-4xl mx-auto px-12 md:px-16">
            <div className="overflow-hidden">
              <motion.div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${testimonialIdx * 100}%)` }}
              >
                {testimonials.map((item, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 px-2 md:px-8">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="p-8 md:p-12 border border-outline-variant/30 flex flex-col justify-between bg-background hover:border-primary-fixed/30 transition-colors h-full min-h-[300px]"
                    >
                      <div>
                        <div className="flex text-primary-fixed mb-6">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span key={i} className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                          ))}
                        </div>
                        <p className="text-on-surface-variant text-lg lg:text-xl mb-8 font-light italic">
                          "{item.text}"
                        </p>
                      </div>
                      <div className="border-t border-outline-variant/30 pt-4 flex gap-4 items-center mt-auto">
                        <div className="w-12 h-12 bg-outline-variant flex items-center justify-center rounded-full text-on-surface-variant font-bold text-lg">
                          {item.initials}
                        </div>
                        <div className="text-left">
                          <h5 className="font-body-md text-base text-on-background">{item.name}</h5>
                          <p className="font-label-sm text-[10px] tracking-widest text-on-surface uppercase mt-1">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Carousel Navigation */}
            <button 
              onClick={() => setTestimonialIdx(i => Math.max(0, i - 1))}
              disabled={testimonialIdx === 0}
              className="absolute top-1/2 -left-6 md:-left-12 -translate-y-1/2 w-12 h-12 bg-primary-fixed text-white rounded-full flex items-center justify-center shadow-lg hover:brightness-110 disabled:opacity-30 disabled:cursor-not-allowed transition-all z-20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => setTestimonialIdx(i => Math.min(testimonials.length - 1, i + 1))}
              disabled={testimonialIdx === testimonials.length - 1}
              className="absolute top-1/2 -right-6 md:-right-12 -translate-y-1/2 w-12 h-12 bg-primary-fixed text-white rounded-full flex items-center justify-center shadow-lg hover:brightness-110 disabled:opacity-30 disabled:cursor-not-allowed transition-all z-20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="max-w-2xl mx-auto mt-32 p-8 border border-outline-variant/30 bg-surface/30 text-left">
            <h3 className="font-headline-lg text-2xl text-on-background mb-2">Share Your Experience</h3>
            <p className="text-sm font-light text-on-surface-variant mb-6">We value your feedback. Submit a testimonial to be featured on our site.</p>
            <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); alert('Testimonial submitted successfully!'); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Full Name" className="bg-transparent border-b border-outline-variant pb-2 focus:border-primary-fixed outline-none text-on-background font-light text-base md:text-sm transition-colors" required />
                <input type="text" placeholder="Initials (e.g. JD)" className="bg-transparent border-b border-outline-variant pb-2 focus:border-primary-fixed outline-none text-on-background font-light text-base md:text-sm transition-colors" required maxLength={3} />
              </div>
              <input type="text" placeholder="Title & Company (e.g. CTO, FinTech Global)" className="bg-transparent border-b border-outline-variant pb-2 mt-2 focus:border-primary-fixed outline-none text-on-background font-light text-base md:text-sm transition-colors" required />
              <textarea placeholder="Your Testimonial..." rows={4} className="bg-transparent border border-outline-variant p-4 mt-4 focus:border-primary-fixed outline-none text-on-background font-light text-base md:text-sm resize-none transition-colors" required></textarea>
              <button type="submit" className="mt-4 bg-primary-container text-on-primary px-8 py-4 md:py-3 rounded-sm font-label-sm uppercase tracking-widest text-[10px] hover:brightness-110 active:scale-95 transition-all w-full md:w-fit">
                Submit Testimonial
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section id="faq" className="py-32 border-t border-outline-variant bg-transparent relative overflow-hidden z-10">
        <div className="max-w-[1250px] mx-auto px-10">
          <div className="flex flex-col justify-center items-center text-center mb-24 border-b border-outline-variant pb-8">
            <span className="font-label-sm tracking-[0.3em] text-secondary mb-4 inline-block uppercase text-[10px]">KNOWLEDGE PROTOCOL</span>
            <h2 className="font-headline-lg text-4xl sm:text-5xl md:text-7xl text-on-background m-0 leading-[0.8] tracking-tighter italic uppercase text-center">
              Frequently Asked <span className="text-stroke">Questions</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div 
                  key={idx}
                  className="border border-outline-variant/30 bg-surface/10 hover:bg-surface/20 transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full text-left py-6 px-8 flex justify-between items-center gap-6 group cursor-pointer border-none bg-transparent"
                  >
                    <span className="font-headline-lg text-sm sm:text-base md:text-lg text-on-background uppercase tracking-wider group-hover:text-primary-fixed transition-colors font-medium">
                      {faq.question}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-outline-variant/30 bg-background/50 flex items-center justify-center shrink-0 text-on-surface-variant group-hover:text-primary-fixed group-hover:border-primary-fixed/30 transition-all">
                      <motion.div
                        animate={{ rotate: isOpen ? 135 : 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      >
                        <Plus className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{
                      height: { type: "spring", stiffness: 150, damping: 20 },
                      opacity: { duration: 0.25 }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 pt-2 border-t border-outline-variant/10 text-on-surface-variant text-sm md:text-base font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-40 relative z-10 bg-transparent border-t border-outline-variant px-4 md:px-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto border border-outline-variant bg-surface-variant/80 p-10 md:p-20 text-center relative overflow-hidden group"
        >
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(255,77,0,0.15)_0%,transparent_60%)] rounded-full group-hover:scale-125 transition-transform duration-700 pointer-events-none transform-gpu"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.15)_0%,transparent_60%)] rounded-full group-hover:scale-125 transition-transform duration-700 pointer-events-none transform-gpu"></div>
          
          <div className="relative z-10">
            <h2 className="font-headline-lg text-[40px] sm:text-[64px] md:text-[96px] text-on-background mb-8 leading-[0.9] md:leading-[0.8] italic tracking-tighter">Ready to <span className="text-stroke">Architect</span><br/>your digital<br/>infrastructure?</h2>
            <p className="text-on-surface-variant mb-12 text-sm max-w-xl mx-auto font-light">Join the ecosystem of elite tech leaders leveraging MagnateCreative to build scalable web services.</p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="bg-primary-container text-on-primary px-12 py-5 rounded-sm font-label-sm text-[12px] font-extrabold hover:brightness-110 active:scale-95 transition-all tracking-widest uppercase animate-glow-pulse"
              >
                Connect Now
              </button>
              <div className="text-on-surface-variant font-label-sm flex items-center gap-2 tracking-widest text-[10px]">
                <span className="material-symbols-outlined text-primary-fixed text-base">verified</span>
                SYSTEMS_ONLINE
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
