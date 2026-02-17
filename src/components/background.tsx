'use client';

import { easeInOut, motion, useReducedMotion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';

// Pre-generate particle data outside render to avoid Math.random() during render
const PARTICLE_DATA = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  isRed: i % 3 === 0,
  top: 10 + (i * 17 + i * i * 3) % 80,
  left: 10 + (i * 23 + i * i * 5) % 80,
  yOffset: 150 + (i * 13) % 100,
  xOffset: ((i * 7) % 100) - 50,
  duration: 12 + (i * 3) % 8,
  delay: i * 0.8,
}));

export function Background3D() {
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay initial render slightly to prioritize page content
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Memoize heavy style objects
  const staticStyles = useMemo(() => ({
    baseGradient: {
      background: 'radial-gradient(ellipse at 30% 20%, rgba(255, 255, 255, 1) 0%, rgba(248, 248, 248, 1) 60%, rgba(240, 240, 240, 1) 100%)',
    },
    noiseTexture: {
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      mixBlendMode: 'overlay' as const,
    },
  }), []);

  // Simplified animations for reduced motion
  const getTransition = (duration: number, delay: number = 0) => {
    if (shouldReduceMotion) {
      return { duration: 0 };
    }
    return {
      duration,
      repeat: Infinity,
      ease: easeInOut,
      delay,
    };
  };

  if (!isVisible) {
    return <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-white" />;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-white">

      <div className="absolute inset-0" style={staticStyles.baseGradient} />

      <motion.div
        className="absolute top-0 left-0 h-[700px] w-[700px]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.25) 2px, transparent 2px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.25) 2px, transparent 2px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(circle at 0% 0%, black 0%, transparent 60%)',
          WebkitMaskImage: 'radial-gradient(circle at 0% 0%, black 0%, transparent 60%)',
        }}
        animate={shouldReduceMotion ? {} : { opacity: [0.4, 0.8, 0.4] }}
        transition={getTransition(5)}
      />

      <motion.div
        className="absolute right-0 bottom-0 h-[800px] w-[800px]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(234, 0, 0, 0.3) 2px, transparent 2px),
            linear-gradient(to bottom, rgba(234, 0, 0, 0.3) 2px, transparent 2px)
          `,
          backgroundSize: '70px 70px',
          maskImage: 'radial-gradient(circle at 100% 100%, black 0%, transparent 60%)',
          WebkitMaskImage: 'radial-gradient(circle at 100% 100%, black 0%, transparent 60%)',
          boxShadow: '0 0 150px rgba(234, 0, 0, 0.3)',
        }}
        animate={shouldReduceMotion ? {} : { opacity: [0.5, 1, 0.5] }}
        transition={getTransition(6, 1)}
      />

      <motion.div
        className="absolute -top-[15%] -left-[8%] h-[900px] w-[900px]"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.08) 50%, transparent 100%)',
          clipPath: 'polygon(0% 0%, 100% 0%, 75% 100%, 0% 80%)',
          boxShadow: '0 50px 150px rgba(0, 0, 0, 0.2), inset 0 2px 0 rgba(255, 255, 255, 0.5)',
          border: '2px solid rgba(0, 0, 0, 0.1)',
        }}
        animate={shouldReduceMotion ? {} : { y: [0, 40, 0] }}
        transition={getTransition(20)}
      />

      <motion.div
        className="absolute -top-[12%] -right-[6%] h-[850px] w-[850px]"
        style={{
          background: 'linear-gradient(225deg, rgba(234, 0, 0, 0.12) 0%, rgba(234, 0, 0, 0.06) 40%, transparent 100%)',
          clipPath: 'polygon(20% 0%, 100% 0%, 100% 75%, 80% 100%)',
          boxShadow: '0 60px 180px rgba(234, 0, 0, 0.25), inset 0 2px 2px rgba(255, 255, 255, 0.3)',
          borderLeft: '3px solid rgba(234, 0, 0, 0.25)',
        }}
        animate={shouldReduceMotion ? {} : { y: [0, -35, 0] }}
        transition={getTransition(22, 3)}
      />

      <motion.div
        className="absolute top-[15%] -left-[4%] h-[600px] w-[600px]"
        style={{
          background: 'linear-gradient(160deg, rgba(255, 255, 255, 0.85) 0%, rgba(245, 245, 245, 0.6) 60%, transparent 100%)',
          clipPath: 'polygon(0% 25%, 65% 0%, 100% 35%, 75% 100%, 0% 85%)',
          boxShadow: '0 70px 180px rgba(0, 0, 0, 0.15), inset 0 2px 0 rgba(255, 255, 255, 1)',
          borderRight: '3px solid rgba(234, 0, 0, 0.15)',
        }}
        animate={shouldReduceMotion ? {} : { y: [0, 50, 0] }}
        transition={getTransition(25, 1)}
      />

      <motion.div
        className="absolute top-0 left-[15%] h-[400px] w-[70%]"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(234, 0, 0, 0.15) 0%, rgba(234, 0, 0, 0.08) 40%, transparent 70%)',
          filter: 'blur(100px)',
        }}
        animate={shouldReduceMotion ? {} : { opacity: [0.6, 1, 0.6] }}
        transition={getTransition(15)}
      />

      <motion.div
        className="absolute right-[10%] bottom-0 h-[350px] w-[60%]"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(234, 0, 0, 0.12) 0%, rgba(234, 0, 0, 0.06) 40%, transparent 70%)',
          filter: 'blur(90px)',
        }}
        animate={shouldReduceMotion ? {} : { opacity: [0.7, 1, 0.7] }}
        transition={getTransition(18, 4)}
      />

      <motion.div
        className="absolute top-[45%] left-[50%] h-[1400px] w-[1400px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.8) 0%, rgba(245, 245, 245, 0.4) 25%, transparent 55%)',
          filter: 'blur(120px)',
        }}
        animate={shouldReduceMotion ? {} : { opacity: [0.5, 0.9, 0.5] }}
        transition={getTransition(30, 2)}
      />

      <motion.div
        className="absolute top-[15%] left-[38%] h-[70vh] w-[3px]"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(234, 0, 0, 0.4) 25%, rgba(234, 0, 0, 0.6) 50%, rgba(234, 0, 0, 0.4) 75%, transparent 100%)',
          transform: 'rotate(-12deg)',
          boxShadow: '0 0 50px rgba(234, 0, 0, 0.4)',
        }}
        animate={shouldReduceMotion ? {} : { opacity: [0.6, 1, 0.6] }}
        transition={getTransition(12, 3)}
      />

      {!shouldReduceMotion && PARTICLE_DATA.map(particle => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute rounded-full"
          style={{
            background: particle.isRed ? 'rgba(234, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.35)',
            boxShadow: particle.isRed
              ? '0 0 20px rgba(234, 0, 0, 0.6)'
              : '0 0 15px rgba(0, 0, 0, 0.3)',
            width: particle.isRed ? '8px' : '4px',
            height: particle.isRed ? '8px' : '4px',
            top: `${particle.top}%`,
            left: `${particle.left}%`,
          }}
          animate={{
            y: [0, -particle.yOffset, 0],
            x: [0, particle.xOffset, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: particle.delay,
          }}
        />
      ))}

      <motion.div
        className="absolute top-[8%] left-[69%] h-[800px] w-[4px]"
        style={{
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.6) 0%, rgba(234, 0, 0, 0.4) 45%, transparent 100%)',
          transform: 'rotate(28deg)',
          boxShadow: '0 0 60px rgba(234, 0, 0, 0.4)',
        }}
        animate={shouldReduceMotion ? {} : { opacity: [0.5, 1, 0.5] }}
        transition={getTransition(14, 2)}
      />

      <motion.div
        className="absolute top-[58%] left-[18%] h-[500px] w-[500px]"
        style={{
          borderRadius: '50%',
          border: '3px solid rgba(234, 0, 0, 0.2)',
          background: 'radial-gradient(circle, transparent 60%, rgba(234, 0, 0, 0.05) 100%)',
          boxShadow: '0 0 120px rgba(234, 0, 0, 0.15)',
        }}
        animate={shouldReduceMotion ? {} : { opacity: [0.5, 1, 0.5] }}
        transition={getTransition(20, 3)}
      />

      <div
        className="absolute top-0 right-0 h-[450px] w-[450px]"
        style={{
          background: 'radial-gradient(circle at 100% 0%, rgba(234, 0, 0, 0.18) 0%, rgba(234, 0, 0, 0.08) 40%, transparent 70%)',
          clipPath: 'polygon(40% 0%, 100% 0%, 100% 100%)',
          filter: 'blur(60px)',
          opacity: 0.85,
        }}
      />

      <div
        className="absolute bottom-0 left-0 h-[500px] w-[500px]"
        style={{
          background: 'radial-gradient(circle at 0% 100%, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.08) 40%, transparent 70%)',
          clipPath: 'polygon(0% 100%, 0% 0%, 100% 100%)',
          filter: 'blur(70px)',
          opacity: 0.8,
        }}
      />

      <div className="absolute inset-0 opacity-[0.03]" style={staticStyles.noiseTexture} />

      <motion.div
        className="absolute top-[25%] right-[30%] h-[350px] w-[350px]"
        style={{
          borderRadius: '50%',
          border: '2px solid rgba(0, 0, 0, 0.15)',
          background: 'radial-gradient(circle, transparent 65%, rgba(0, 0, 0, 0.04) 100%)',
          boxShadow: '0 0 80px rgba(0, 0, 0, 0.1)',
        }}
        animate={shouldReduceMotion ? {} : { opacity: [0.4, 0.8, 0.4] }}
        transition={getTransition(25, 4)}
      />
    </div>
  );
}
