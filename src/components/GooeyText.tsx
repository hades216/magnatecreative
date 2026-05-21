import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useCallback } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';

const messages = [
  {
    id: 1,
    text: "FREE Strategy Consultation for New Enterprise Partners",
    subtext: "INITIATE_SYSTEM_AUDIT_PROTOCOL",
    style: "dark:bg-[#0a0a0a] bg-neutral-100/95 border-y border-primary-fixed/20",
    accent: "bg-primary-fixed",
    animation: {
      initial: { x: "-100%", opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: "100%", opacity: 0 }
    }
  },
  {
    id: 2,
    text: "AWS & Google Cloud Certified Node Operations",
    subtext: "MULTI_CLOUD_REDUNDANCY_ACTIVE",
    style: "dark:bg-[#0d0d0d] bg-neutral-200/90 border-y border-secondary/20",
    accent: "bg-secondary",
    animation: {
      initial: { scale: 0.9, opacity: 0, rotateX: 45 },
      animate: { scale: 1, opacity: 1, rotateX: 0 },
      exit: { scale: 1.1, opacity: 0, rotateX: -45 }
    }
  },
  {
    id: 3,
    text: "99.9% Uptime SLA Guaranteed for High-Traffic Nodes",
    subtext: "INFRASTRUCTURE_STABILITY_CONFIRMED",
    style: "dark:bg-[#050505] bg-neutral-100 border-y dark:border-white/10 border-black/10",
    accent: "bg-white dark:bg-white bg-black",
    animation: {
      initial: { y: 20, opacity: 0, filter: "blur(10px)" },
      animate: { y: 0, opacity: 1, filter: "blur(0px)" },
      exit: { y: -20, opacity: 0, filter: "blur(10px)" }
    }
  },
  {
    id: 4,
    text: "Advanced AI Data Protection & Distribution Layers",
    subtext: "NEURAL_ENCRYPTION_ENABLED",
    style: "dark:bg-background bg-surface border-y border-outline-variant/30",
    accent: "bg-primary-fixed",
    animation: {
      initial: { opacity: 0, letterSpacing: "1em" },
      animate: { opacity: 1, letterSpacing: "0.2em" },
      exit: { opacity: 0, letterSpacing: "0em" }
    }
  }
];

interface GooeyTextProps {
  morphTime?: number; // in seconds
  cooldownTime?: number; // in seconds
}

export const GooeyText = ({ 
  morphTime = 1.2, 
  cooldownTime = 5 
}: GooeyTextProps) => {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextMessage = useCallback(() => {
    setIndex((prev) => (prev + 1) % messages.length);
  }, []);

  const prevMessage = useCallback(() => {
    setIndex((prev) => (prev - 1 + messages.length) % messages.length);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(nextMessage, cooldownTime * 1000);
    return () => clearInterval(timer);
  }, [isPlaying, cooldownTime, nextMessage]);

  const currentMessage = messages[index];

  return (
    <div 
      className="relative w-full h-32 md:h-28 overflow-hidden dark:bg-[#050505] bg-neutral-50"
      aria-live={isPlaying ? "polite" : "off"}
      aria-atomic="true"
      role="status"
      aria-label={`System updates and partner information. Currently showing message ${index + 1} of ${messages.length}`}
    >
      {/* Gooey SVG Filter Definition - Optimized for fluid morphing */}
      <svg className="fixed pointer-events-none opacity-0" aria-hidden="true">
        <defs>
          <filter id="gooey" colorInterpolationFilters="sRGB">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="gooey" />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-fixed/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-fixed/30 to-transparent"></div>
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

      {/* Progress Bar (Visual Feedback for Animation State) */}
      {isPlaying && (
        <motion.div 
          key={`progress-${index}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: cooldownTime, ease: "linear" }}
          className="absolute bottom-0 left-0 h-[2px] bg-primary-fixed z-20 origin-left"
        ></motion.div>
      )}

      {/* Animation Controls */}
      <div className="absolute right-4 bottom-4 md:top-1/2 md:-translate-y-1/2 md:right-8 z-40 flex items-center gap-2">
        <button 
          onClick={() => { setIsPlaying(false); prevMessage(); }}
          className="p-2 rounded-full dark:bg-white/5 bg-black/5 hover:dark:bg-white/10 hover:bg-black/10 text-on-surface-variant transition-colors border dark:border-white/5 border-black/5"
          aria-label="Previous message"
        >
          <ChevronLeft size={14} />
        </button>
        
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-3 rounded-full bg-primary-fixed/10 hover:bg-primary-fixed/20 text-primary-fixed transition-all border border-primary-fixed/20 active:scale-95"
          aria-label={isPlaying ? "Pause animation" : "Play animation"}
        >
          {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
        </button>

        <button 
          onClick={() => { setIsPlaying(false); nextMessage(); }}
          className="p-2 rounded-full dark:bg-white/5 bg-black/5 hover:dark:bg-white/10 hover:bg-black/10 text-on-surface-variant transition-colors border dark:border-white/5 border-black/5"
          aria-label="Next message"
        >
          <ChevronRight size={14} />
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentMessage.id}
          initial={currentMessage.animation.initial}
          animate={currentMessage.animation.animate}
          exit={currentMessage.animation.exit}
          transition={{ 
            duration: morphTime, 
            ease: [0.16, 1, 0.3, 1] 
          }}
          style={{ 
            filter: "url(#gooey)",
            willChange: "transform, opacity",
            transform: "translateZ(0)"
          }}
          className={`absolute inset-0 z-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 px-6 md:px-24 py-6 ${currentMessage.style}`}
        >
          {/* SR-only text */}
          <span className="sr-only">
            Update: {currentMessage.text}. Protocol: {currentMessage.subtext}
          </span>
          
          <motion.div 
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            style={{ willChange: "transform" }}
            className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"
          ></motion.div>
          
          <div className="flex items-center gap-4 relative z-20">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1], 
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{ willChange: "transform, opacity" }}
              className={`w-2 h-2 rounded-full ${currentMessage.accent} shadow-[0_0_15px_rgba(255,255,255,0.5)]`}
            ></motion.div>
            <h3 className="font-headline-lg text-xl md:text-3xl tracking-tight italic uppercase font-extrabold text-on-background">
              {currentMessage.text}
            </h3>
          </div>

          <div className="hidden md:block w-16 h-[1px] bg-outline-variant/40"></div>

          <div className="flex flex-col items-center md:items-start group relative z-20">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1 h-1 bg-primary-fixed rounded-full animate-ping"></span>
              <span className="font-mono text-[8px] text-primary-fixed/60 tracking-[0.4em] uppercase">Security_Protocol_v4</span>
            </div>
            <p className="font-mono text-[10px] md:text-sm text-on-surface-variant tracking-[0.2em] font-medium group-hover:text-primary-fixed transition-colors">
              {currentMessage.subtext}
            </p>
          </div>

          <motion.div 
            animate={{ opacity: [0, 0.03, 0] }}
            transition={{ duration: 0.15, repeat: Infinity, repeatDelay: 5 }}
            className="absolute inset-0 bg-primary-fixed mix-blend-overlay pointer-events-none z-30"
          ></motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
