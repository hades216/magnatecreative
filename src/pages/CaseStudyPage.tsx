import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';
import { useEffect } from 'react';

export const CaseStudyPage = () => {
  const { id } = useParams();
  const study = caseStudies.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!study) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24 text-on-background">
        <h2 className="font-display-xl text-4xl mb-6">Case Study Not Found</h2>
        <Link to="/" className="text-primary-fixed hover:underline flex items-center gap-2">
          <ChevronLeft className="w-4 h-4" /> Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Hero Header */}
      <section className="relative pt-40 pb-24 px-10 border-b border-outline-variant/30">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/" className="inline-flex items-center text-primary-fixed text-xs tracking-[0.3em] uppercase mb-12 dark:hover:text-white hover:text-black transition-colors">
              <ChevronLeft className="w-4 h-4 mr-2" /> Protocol Overview
            </Link>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-primary-fixed rounded-full animate-pulse"></div>
              <span className="font-mono text-[10px] text-primary-fixed tracking-[0.4em] uppercase">Deployment_Success</span>
            </div>
            
            <h1 className="font-headline-lg text-5xl md:text-7xl text-on-background leading-[0.9] tracking-tighter italic uppercase mb-8">
              {study.title}
            </h1>
            
            <p className="text-on-surface-variant text-lg font-light leading-relaxed mb-12 max-w-xl">
              {study.description}
            </p>

            <div className="grid grid-cols-3 gap-8 py-8 border-y border-outline-variant/20">
              {study.stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-4xl font-display-xl text-on-background mb-2 tracking-tighter italic">{stat.value}</div>
                  <div className="font-mono text-[9px] text-on-surface-variant uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-square md:aspect-video lg:aspect-square"
          >
            <div className="absolute inset-0 bg-primary-fixed/20 blur-[100px] opacity-30 -z-10 rounded-full"></div>
            <div className="w-full h-full border border-outline-variant/30 overflow-hidden relative group">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 px-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-fixed/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* The Story */}
            <div className="lg:col-span-7">
              <h2 className="font-headline-lg text-3xl text-on-background mb-10 italic uppercase border-b border-outline-variant/20 pb-4">Executive Summary</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-on-surface-variant text-lg font-light leading-relaxed mb-8">
                  {study.fullStory}
                </p>
                
                <h3 className="font-headline-lg text-2xl text-on-background mb-6 italic uppercase mt-16">The Problem Statement</h3>
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop" 
                  alt="Systemic bottlenecks and data complexity" 
                  className="w-full h-64 object-cover rounded shadow-lg border border-white/10 mb-8"
                />
                <p className="text-on-surface-variant font-light leading-relaxed mb-8">
                  The client struggled with a fragmented digital identity and underperforming web infrastructure, which created friction in their conversion funnels. Their brand narrative was inconsistent, and significant technical debt hampered growth and market scalability.
                </p>
                
                <h3 className="font-headline-lg text-2xl text-on-background mb-6 italic uppercase mt-16">The Magnate Intervention</h3>
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415dee?q=80&w=1200&auto=format&fit=crop" 
                  alt="Architectural re-engineering and planning" 
                  className="w-full h-64 object-cover rounded shadow-lg border border-white/10 mb-8"
                />
                <p className="text-on-surface-variant font-light leading-relaxed mb-12">
                  We deployed a holistic digital transformation strategy, unifying their brand aesthetic with a high-performance web architecture. Through modular design systems and integrated marketing analytics, we rebuilt their platform for seamless scalability, driving visibility and measurable conversion growth.
                </p>
              </div>
            </div>

            {/* Side Results */}
            <div className="lg:col-span-5">
              <div className="sticky top-40 space-y-12">
                <div className="dark:bg-[#0f0f0f] bg-neutral-100 border dark:border-white/5 border-black/10 p-12 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-primary-fixed"></div>
                    <div className="absolute -right-4 -bottom-4 opacity-10 rotate-12">
                        <span className="material-symbols-outlined text-[120px]">analytics</span>
                    </div>
                    
                    <h3 className="font-mono text-[10px] tracking-[0.5em] text-primary-fixed mb-10 uppercase">KPIS :: DEPLOYMENT_RESULTS</h3>
                    <ul className="space-y-6 relative z-10">
                        {study.results.map((result, idx) => (
                            <motion.li 
                              key={idx}
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-start gap-4"
                            >
                                <CheckCircle2 className="w-5 h-5 text-primary-fixed mt-1 flex-shrink-0" />
                                <span className="text-on-background font-light leading-snug">{result}</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                <div className="p-10 border border-outline-variant/30 flex flex-col gap-6">
                    <div>
                        <div className="font-mono text-[9px] dark:text-white/30 text-black/45 uppercase tracking-[0.3em] mb-2">SYSTEM_CLIENT</div>
                        <div className="text-xl font-headline-lg italic text-on-background uppercase">{study.client}</div>
                    </div>
                    <div>
                        <div className="font-mono text-[9px] dark:text-white/30 text-black/45 uppercase tracking-[0.3em] mb-2">SECTOR</div>
                        <div className="text-sm font-light text-on-surface-variant uppercase tracking-widest">Enterprise Tech / Fintech</div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-40 dark:bg-[#070707] bg-neutral-100/40 border-t border-outline-variant text-center px-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-headline-lg text-4xl md:text-7xl text-on-background mb-10 italic uppercase leading-none">Ready for your <span className="text-stroke">Shift</span>?</h2>
            <p className="text-on-surface-variant text-lg font-light mb-16 max-w-xl mx-auto">
                Join the network of elite infrastructure. Let's architect your success story.
            </p>
            <div className="flex flex-col md:flex-row gap-8 justify-center">
                <button className="bg-primary-container text-on-primary px-12 py-5 rounded-sm font-label-sm uppercase tracking-[0.3em] text-[12px] hover:brightness-110 active:scale-95 transition-all animate-glow-pulse">
                    Initiate Connection
                </button>
                <Link to="/" className="flex items-center gap-4 text-on-background font-label-sm uppercase tracking-[0.3em] text-[10px] hover:text-primary-fixed transition-colors">
                    Explore More Protocols <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
          </motion.div>
      </section>
    </div>
  );
};
