import React from 'react';
import { motion } from 'motion/react';

export const Logo = ({ className = "", width = "100%", height = "100%" }: { className?: string, width?: string|number, height?: string|number }) => (
  <motion.svg 
    viewBox="0 0 550 120" 
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    fill="none"
    whileHover={{ filter: "drop-shadow(0px 0px 25px rgba(0, 212, 255, 0.8))", scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff4d00" />
        <stop offset="100%" stopColor="#00d4ff" />
      </linearGradient>

      <linearGradient id="shimmerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(255,255,255,0)" />
        <stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
      </linearGradient>
      
      <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="1.5" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>

      <filter id="mcGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#ff4d00" floodOpacity="0.4" />
      </filter>
    </defs>
    
    <g>
      {/* Abstract Animated Orbits - Optimized for Performance */}
      <g transform="translate(100, 60)">
        {/* Outer Orbit */}
        <motion.circle
          cx="0" cy="0" r="70"
          stroke="url(#logoGradient)" strokeWidth="0.6" strokeDasharray="100 50"
          initial={{ rotate: 0 }} animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        {/* Middle Orbit */}
        <motion.circle
          cx="0" cy="0" r="55"
          stroke="url(#logoGradient)" strokeWidth="1.2" strokeDasharray="40 80"
          initial={{ rotate: 360 }} animate={{ rotate: 0 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        {/* Inner Orbit */}
        <motion.circle
          cx="0" cy="0" r="40"
          stroke="url(#logoGradient)" strokeWidth="2" strokeDasharray="30 20"
          initial={{ rotate: 0 }} animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </g>
      
      {/* MC Emblem - Combined Aesthetically & Brought Forward */}
      <g transform="translate(55, 38)" filter="url(#mcGlow)">
        {/* Glow Shadow Layer */}
        <motion.path 
          d="M 0,44 V 0 L 25,25 L 50,0 V 44" 
          stroke="#ff4d00" 
          strokeWidth="10" 
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.15"
          filter="blur(5px)"
        />
        <motion.path 
          d="M 80,5 A 22 22 0 1 0 80,39" 
          stroke="#ff4d00" 
          strokeWidth="10" 
          strokeLinecap="round"
          fill="none"
          opacity="0.15"
          filter="blur(5px)"
        />

        {/* Connection/Interlock Bar */}
        <motion.path
          d="M 50,22 H 68"
          stroke="url(#logoGradient)"
          strokeWidth="3"
          strokeDasharray="2 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />

        {/* Combined MC Main Path */}
        <motion.path 
          d="M 0,44 V 0 L 25,25 L 50,0 V 44" 
          stroke="url(#logoGradient)" 
          strokeWidth="7" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "circOut" }}
        />
        
        <motion.path 
          d="M 80,5 A 22 22 0 1 0 80,39" 
          stroke="url(#logoGradient)" 
          strokeWidth="7" 
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "circOut", delay: 0.3 }}
        />

        {/* Inner Highlight Layer for depth */}
        <motion.path 
          d="M 0,44 V 0 L 25,25 L 50,0 V 44 M 80,5 A 22 22 0 1 0 80,39" 
          stroke="white" 
          strokeWidth="1" 
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "linear", repeat: Infinity }}
        />

        {/* Tech Nodes at strategic junction points */}
        {[
          { x: 0, y: 0, d: 1.5 }, { x: 25, y: 25, d: 1.7 }, { x: 50, y: 0, d: 1.9 },
          { x: 0, y: 44, d: 2.1 }, { x: 50, y: 44, d: 2.3 }, { x: 60, y: 22, d: 2.4 }, { x: 92, y: 22, d: 2.6 }
        ].map((node, i) => (
          <g key={i}>
            <motion.circle
              cx={node.x} cy={node.y} r="2.5"
              fill="white"
              initial={{ scale: 0 }}
              animate={{ 
                scale: [0, 1.3, 1], 
                opacity: [0, 1, 0.7],
                boxShadow: "0 0 10px white"
              }}
              transition={{ duration: 1, delay: node.d, repeat: Infinity, repeatDelay: 4 }}
            />
          </g>
        ))}

        {/* Dynamic Scanning Line */}
        <motion.rect
          x="-15" y="-5" width="100" height="4"
          fill="url(#shimmerGradient)"
          animate={{ y: [-20, 60], opacity: [0, 0.8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </g>
    </g>

    <g transform="translate(170, 70)">
        <mask id="shimmerMaskMagnate">
          <motion.rect 
            x="-100%" y="0" width="100%" height="60" 
            fill="url(#shimmerGradient)"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
          />
        </mask>

        <mask id="shimmerMaskCreative">
          <motion.rect 
            x="-100%" y="0" width="100%" height="40" 
            fill="url(#shimmerGradient)"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1.5 }}
          />
        </mask>

        <motion.text 
            y="0" 
            fontFamily="'Sora', sans-serif" 
            fontSize="48" 
            fontWeight="800" 
            fill="#ffffff" 
            letterSpacing="6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              y: [-1, 1, -1]
            }}
            transition={{ 
              opacity: { duration: 1.5, delay: 0.8 },
              x: { duration: 1.2, delay: 0.8, type: "spring", stiffness: 100 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
        >
            MAGNATE
        </motion.text>
        {/* Shimmer Overlay for MAGNATE */}
        <motion.text 
            y="0" 
            fontFamily="'Sora', sans-serif" 
            fontSize="48" 
            fontWeight="800" 
            fill="white" 
            letterSpacing="6"
            mask="url(#shimmerMaskMagnate)"
            pointerEvents="none"
            animate={{ y: [-1, 1, -1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
            MAGNATE
        </motion.text>

        <motion.text 
            y="32" 
            fontFamily="sans-serif" 
            fontSize="22" 
            fontWeight="300" 
            fill="#d0d0d0" 
            letterSpacing="15"
            initial={{ opacity: 0, x: -30, letterSpacing: "25px" }}
            animate={{ 
              opacity: [0, 1, 0.8, 1], 
              x: 0,
              letterSpacing: "15px"
            }}
            transition={{ 
              opacity: { duration: 3, repeat: Infinity, repeatType: "mirror", delay: 1.5 },
              x: { duration: 1.5, delay: 1.2, type: "spring", stiffness: 100 },
              letterSpacing: { duration: 1.5, delay: 1.2 }
            }}
        >
            CREATIVE
        </motion.text>
        {/* Shimmer Overlay for CREATIVE */}
        <motion.text 
            y="32" 
            fontFamily="sans-serif" 
            fontSize="22" 
            fontWeight="300" 
            fill="white" 
            letterSpacing="15"
            mask="url(#shimmerMaskCreative)"
            pointerEvents="none"
        >
            CREATIVE
        </motion.text>
    </g>
  </motion.svg>
);
