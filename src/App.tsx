/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Moon, Sun, ArrowUp } from 'lucide-react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Logo } from './components/Logo';
import { useShaderBackground } from './components/ui/animated-shader-hero';
import { Home } from './pages/Home';
import { ServicePage } from './pages/ServicePage';
import { SubcategoryPage } from './pages/SubcategoryPage';
import { ArchitecturePage } from './pages/ArchitecturePage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { serviceCategories } from './data/services';
import { Link } from 'react-router-dom';

// A component to handle scroll restoration
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const shaderCanvasRef = useShaderBackground();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const theme = 'dark';
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    document.documentElement.classList.remove('light');
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-background text-on-background font-body-md overflow-x-hidden min-h-screen relative selection:bg-primary-fixed selection:text-black pb-24 md:pb-0">
        {/* Global Background Layers */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <canvas
            ref={shaderCanvasRef}
            className="w-full h-full object-cover opacity-35"
            style={{ background: '#080808' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/95"></div>
        </div>

        {/* Top Navigation Bar */}
        <nav className={`fixed top-0 left-0 w-full transition-all duration-500 flex justify-between items-center px-6 md:px-10 z-[100] border-b backdrop-blur-md ${
          isScrolled 
            ? "h-20 bg-background/80 border-outline-variant/20 shadow-2xl" 
            : "h-24 bg-transparent border-transparent"
        }`}>
          <Link to="/" className="flex items-center gap-2 cursor-pointer">
            <Logo className="h-8 md:h-16 lg:h-20 w-auto" />
          </Link>
          <div className="hidden md:flex gap-10 text-[10px] tracking-[0.2em] font-medium uppercase text-on-background/80">
            <a className="relative group hover:text-on-background cursor-pointer transition-colors pb-1" href="/#technology">
              Home Center
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-on-background transition-all duration-300 group-hover:w-full"></span>
            </a>
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesHovered(true)}
              onMouseLeave={() => setIsServicesHovered(false)}
            >
              <a className="relative hover:text-on-background cursor-pointer transition-colors pb-1" href="/#services">
                Solutions
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-on-background transition-all duration-300 group-hover:w-full"></span>
              </a>
              <AnimatePresence>
                {isServicesHovered && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                    exit={{ opacity: 0, y: 10, x: "-50%" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute top-full left-1/2 mt-6 bg-surface border border-outline-variant/50 rounded-xs shadow-2xl w-[850px] grid grid-cols-3 gap-0 overflow-hidden divide-x divide-outline-variant/30 z-50 p-2"
                  >
                    {serviceCategories.map((cat) => (
                      <div key={cat.id} className="p-8 dark:hover:bg-white/[0.03] hover:bg-black/[0.03] transition-all duration-500 rounded-xs flex flex-col h-full group/cat">
                        <div className="flex items-center gap-3 mb-6 border-b border-outline-variant/20 pb-4">
                          <span className="material-symbols-outlined text-primary-fixed text-lg group-hover/cat:scale-110 transition-transform">{cat.icon}</span>
                          <Link to={`/service/${cat.id}`} className="text-primary-fixed dark:hover:text-white hover:text-black block font-black tracking-[0.15em] text-[11px] uppercase transition-colors">
                            {cat.title}
                          </Link>
                        </div>
                        <div className="flex flex-col gap-4">
                          {cat.subcategories.map(sub => (
                            <Link 
                              key={sub.id} 
                              to={`/subcategory/${sub.id}`} 
                              className="group/sub flex flex-col gap-1 transition-all"
                            >
                              <span className="text-on-surface hover:text-primary-fixed transition-colors text-[10px] block tracking-[0.05em] uppercase font-bold leading-tight">
                                {sub.title}
                              </span>
                              <span className="text-on-surface-variant/40 text-[9px] line-clamp-1 font-light tracking-wide group-hover/sub:text-on-surface-variant/70 transition-colors">
                                {sub.description}
                              </span>
                            </Link>
                          ))}
                        </div>
                        <Link to={`/service/${cat.id}`} className="mt-10 pt-6 border-t border-outline-variant/10 text-[9px] tracking-[0.4em] uppercase text-on-surface-variant/60 hover:text-primary-fixed transition-all inline-flex items-center font-bold">
                          INITIALIZE_SUITE <span className="material-symbols-outlined text-[12px] ml-2 group-hover/cat:translate-x-1 transition-transform">arrow_right_alt</span>
                        </Link>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <a className="relative group hover:text-on-background cursor-pointer transition-colors pb-1" href="/#metrics">
              Success
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-on-background transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a className="relative group hover:text-on-background cursor-pointer transition-colors pb-1" href="/#insights">
              Insights
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-on-background transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          <div className="flex gap-4 items-center">
            <motion.button 
              onClick={() => setIsContactModalOpen(true)}
              className="hidden sm:block bg-primary-container relative overflow-hidden text-on-primary px-6 py-2 rounded-sm font-label-sm uppercase tracking-[0.2em] transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700 hover:text-white"
              animate={{ 
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 10px rgba(255, 77, 0, 0.4)",
                  "0 0 25px rgba(255, 77, 0, 0.8)",
                  "0 0 10px rgba(255, 77, 0, 0.4)"
                ],
                filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              whileHover={{ 
                scale: 1.1, 
                boxShadow: "0px 0px 50px rgba(255, 77, 0, 1), 0px 0px 30px rgba(255, 77, 0, 0.5)",
                filter: "brightness(1.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Connect Now</span>
            </motion.button>
            
            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex md:hidden flex-col gap-1.5 p-2 z-50 group"
            >
              <motion.span 
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-on-background rounded-full transition-all"
              />
              <motion.span 
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-on-background rounded-full transition-all"
              />
              <motion.span 
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-on-background rounded-full transition-all"
              />
            </button>
          </div>
        </nav>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-40 bg-background md:hidden flex flex-col pt-32 px-10 pb-20 overflow-y-auto"
            >
              <div className="flex flex-col gap-8">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-headline-lg uppercase italic tracking-tighter text-on-background">Home Center</Link>
                
                <div className="flex flex-col gap-6">
                  <div className="text-[10px] tracking-[0.5em] text-primary-fixed uppercase font-bold opacity-50 mb-2">Systems Registry</div>
                  {serviceCategories.map((cat) => (
                    <div key={cat.id} className="flex flex-col gap-3 mb-2">
                       <Link to={`/service/${cat.id}`} onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-headline-lg uppercase italic text-on-background border-l-2 border-primary-fixed pl-4 py-1 leading-tight">{cat.title}</Link>
                       <div className="flex flex-col gap-4 pl-8 border-l border-outline-variant/30 ml-[1px] mt-1">
                         {cat.subcategories.map(sub => (
                           <Link 
                            key={sub.id} 
                            to={`/subcategory/${sub.id}`} 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-on-surface-variant/80 hover:text-primary-fixed transition-colors font-medium leading-relaxed"
                           >
                             {sub.title}
                           </Link>
                         ))}
                       </div>
                    </div>
                  ))}
                </div>

                <a href="#metrics" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-headline-lg uppercase italic tracking-tighter text-on-background">Success Archive</a>
                <a href="#insights" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-headline-lg uppercase italic tracking-tighter text-on-background">Intelligence</a>
                
                <button 
                   onClick={() => { setIsContactModalOpen(true); setIsMobileMenuOpen(false); }}
                   className="mt-10 bg-primary-container text-on-primary py-5 rounded-sm font-label-sm uppercase tracking-[0.5em] text-center animate-glow-pulse"
                >
                  Initiate Connection
                </button>
              </div>
              
              <div className="mt-auto pt-20 border-t border-outline-variant/30 flex justify-between items-center text-[10px] font-mono tracking-widest text-on-background/50">
                 <span className="text-glow-primary">v.4.0.2_MAGNATE</span>
                 <div className="flex gap-4">
                  </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Routing Content */}
        <Routes>
          <Route path="/" element={<Home setIsContactModalOpen={setIsContactModalOpen} />} />
          <Route path="/service/:id" element={<ServicePage />} />
          <Route path="/subcategory/:id" element={<SubcategoryPage />} />
          <Route path="/architecture" element={<ArchitecturePage />} />
          <Route path="/case-study/:id" element={<CaseStudyPage />} />
        </Routes>

        {/* Mobile Navigation Dock (Menu Bar on Phone) */}
        <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-[420px] bg-[#0c0c0cec] border border-outline-variant/35 backdrop-blur-xl rounded-full h-16 z-[95] flex justify-around items-center px-6 shadow-[0_12px_45px_rgba(0,0,0,0.9)] border-primary-fixed/20">
          <Link 
            to="/" 
            className="flex flex-col items-center gap-1 justify-center text-on-background/70 hover:text-primary-fixed active:scale-95 transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">home</span>
            <span className="text-[7.5px] font-mono tracking-widest uppercase font-black">Portal</span>
          </Link>
          <a 
            href="/#services" 
            className="flex flex-col items-center gap-1 justify-center text-on-background/70 hover:text-primary-fixed active:scale-95 transition-all cursor-pointer"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span className="material-symbols-outlined text-[20px]">architecture</span>
            <span className="text-[7.5px] font-mono tracking-widest uppercase font-black">Solutions</span>
          </a>
          <a 
            href="/#metrics" 
            className="flex flex-col items-center gap-1 justify-center text-on-background/70 hover:text-primary-fixed active:scale-95 transition-all cursor-pointer"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                document.getElementById('metrics')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span className="material-symbols-outlined text-[20px]">analytics</span>
            <span className="text-[7.5px] font-mono tracking-widest uppercase font-black">Success</span>
          </a>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`flex flex-col items-center gap-1 justify-center active:scale-95 transition-all cursor-pointer ${isMobileMenuOpen ? 'text-primary-fixed' : 'text-on-background/70'}`}
          >
            <span className="material-symbols-outlined text-[20px]">{isMobileMenuOpen ? 'close' : 'menu'}</span>
            <span className="text-[7.5px] font-mono tracking-widest uppercase font-black">Index</span>
          </button>
          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="flex flex-col items-center gap-1 justify-center text-primary-fixed hover:text-primary-fixed-dim active:scale-95 transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px] text-primary-fixed animate-pulse">chat</span>
            <span className="text-[7.5px] font-mono tracking-widest uppercase font-black">Connect</span>
          </button>
        </div>

        {/* Footer */}
        <footer className="w-full border-t border-outline-variant bg-transparent backdrop-blur-md h-auto md:h-24 py-12 md:py-0 px-10 flex flex-col md:flex-row justify-between items-center gap-8 z-10 relative overflow-hidden">
          {/* Subtle Wave Animation Background */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <motion.svg 
              viewBox="0 0 1440 120" 
              className="absolute bottom-0 left-0 w-full h-full"
              preserveAspectRatio="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 3 }}
            >
              <motion.path
                initial={{ d: "M0 120 V60 Q360 58 720 60 T1440 60 V120 H0 Z" }}
                animate={{ 
                  d: [
                    "M0 120 V60 Q360 58 720 60 T1440 60 V120 H0 Z",
                    "M0 120 V60 Q360 62 720 60 T1440 60 V120 H0 Z",
                    "M0 120 V60 Q360 58 720 60 T1440 60 V120 H0 Z"
                  ] 
                }}
                transition={{ 
                  duration: 15, // Slower Speed
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                fill="url(#footerWaveGradient)"
              />
              <defs>
                <linearGradient id="footerWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff4d00" stopOpacity="0.15" />
                  <stop offset="50%" stopColor="#ff4d00" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#ff4d00" stopOpacity="0.15" />
                </linearGradient>
              </defs>
            </motion.svg>
          </div>

          <Link to="/" className="flex flex-col md:flex-row items-center gap-3 relative z-10 cursor-pointer">
            <Logo className="h-8 md:h-12 w-auto opacity-100" />
            <span className="text-on-background/50 text-[10px] font-mono tracking-widest mt-2 md:mt-0 text-glow-primary">© 2026 V4.0</span>
          </Link>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-10 text-center md:text-left">
            {['Privacy_Architecture', 'Service_Level_Agreement', 'Global_Nodes'].map((link, i) => (
              <motion.a
                key={link}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="font-label-sm text-[9px] text-on-background/80 hover:text-primary-fixed tracking-widest uppercase transition-colors duration-300 relative group text-glow-primary"
                href="#"
              >
                {link.replace(/_/g, ' ')}
                <motion.div 
                    className="absolute -bottom-1 left-1/2 h-[1px] bg-primary-fixed"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%', left: 0 }}
                    transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>
          
          <div className="flex gap-4 relative z-10">
            <motion.button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-primary-container/20 border border-primary-fixed/30 text-on-background px-6 py-2 rounded-sm font-label-sm text-[10px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary-container hover:text-on-primary hover:border-primary-fixed"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </div>
        </footer>

        {/* Contact Modal */}
        <AnimatePresence>
          {isContactModalOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsContactModalOpen(false)}
                className="absolute inset-0 bg-background/80 backdrop-blur-md"
              ></motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl bg-background border border-outline-variant p-6 sm:p-8 md:p-12 shadow-2xl flex flex-col max-h-[90vh] overflow-y-auto"
              >
                <button 
                  onClick={() => setIsContactModalOpen(false)}
                  className="absolute top-4 sm:top-6 right-4 sm:right-6 text-on-background/70 hover:text-on-background transition-colors z-10"
                  aria-label="Close Contact Modal"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="mb-6 md:mb-10">
                  <span className="font-label-sm tracking-[0.3em] text-primary-fixed mb-2 md:mb-4 inline-block text-[9px] sm:text-[10px]">INITIATE COMMUNICATION</span>
                  <h3 className="font-headline-lg text-3xl sm:text-4xl md:text-5xl text-on-background m-0 leading-tight tracking-tighter italic">
                    Partner with <span className="text-stroke">Magnate</span>
                  </h3>
                </div>
                
                <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); setIsContactModalOpen(false); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="font-label-sm text-[10px] text-on-background/80 tracking-widest uppercase">Name</label>
                      <input type="text" className="bg-transparent border-b border-outline-variant pb-2 focus:border-primary-fixed outline-none transition-colors text-on-background font-light text-base md:text-sm" placeholder="John Doe" required />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-label-sm text-[10px] text-on-background/80 tracking-widest uppercase">Email</label>
                      <input type="email" className="bg-transparent border-b border-outline-variant pb-2 focus:border-primary-fixed outline-none transition-colors text-on-background font-light text-base md:text-sm" placeholder="john@example.com" required />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="font-label-sm text-[10px] text-on-background/80 tracking-widest uppercase">Objective</label>
                    <div className="relative">
                      <select className="w-full bg-transparent border-b border-outline-variant pb-2 focus:border-primary-fixed outline-none transition-colors text-on-background font-light text-base md:text-sm appearance-none rounded-none">
                        {serviceCategories.map((cat) => (
                          <option key={cat.id} value={cat.id} className="bg-background text-on-background">
                            {cat.title}
                          </option>
                        ))}
                      </select>
                      <span className="material-symbols-outlined absolute right-0 bottom-2 pointer-events-none text-on-background/60 text-sm">expand_more</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 mt-2 md:mt-4">
                    <label className="font-label-sm text-[10px] text-on-background/80 tracking-widest uppercase">Message</label>
                    <textarea rows={3} className="bg-transparent border-b border-outline-variant pb-2 focus:border-primary-fixed outline-none transition-colors text-on-background font-light text-base md:text-sm resize-none" placeholder="Tell us about your project..."></textarea>
                  </div>
                  
                  <button type="submit" className="mt-4 md:mt-6 bg-primary-container text-on-primary px-8 py-5 md:py-4 rounded-sm font-label-sm font-bold shadow-lg hover:brightness-110 transition-all uppercase tracking-widest w-full md:w-fit">
                    Transmit Message
                  </button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-8 left-8 md:bottom-12 md:left-12 z-[90] w-12 h-12 bg-primary-fixed text-white rounded-full flex items-center justify-center shadow-lg hover:brightness-110 active:scale-95 transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}

