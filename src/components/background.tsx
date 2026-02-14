'use client';

import { motion } from 'motion/react';

export function Background3D() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-white">
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 30% 20%, rgba(255, 255, 255, 1) 0%, rgba(248, 248, 248, 1) 60%, rgba(240, 240, 240, 1) 100%)',
        }}
      />

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
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
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
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      <motion.div
        className="absolute -top-[15%] -left-[8%] h-[900px] w-[900px]"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.08) 50%, transparent 100%)',
          clipPath: 'polygon(0% 0%, 100% 0%, 75% 100%, 0% 80%)',
          boxShadow: `
            0 50px 150px rgba(0, 0, 0, 0.2),
            inset 0 2px 0 rgba(255, 255, 255, 0.5),
            inset -2px 0 0 rgba(0, 0, 0, 0.15)
          `,
          border: '2px solid rgba(0, 0, 0, 0.1)',
        }}
        animate={{
          y: [0, 40, 0],
          rotateZ: [0, 3, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute -top-[12%] -right-[6%] h-[850px] w-[850px]"
        style={{
          background: 'linear-gradient(225deg, rgba(234, 0, 0, 0.12) 0%, rgba(234, 0, 0, 0.06) 40%, transparent 100%)',
          clipPath: 'polygon(20% 0%, 100% 0%, 100% 75%, 80% 100%)',
          boxShadow: `
            0 60px 180px rgba(234, 0, 0, 0.25),
            inset 0 2px 2px rgba(255, 255, 255, 0.3),
            inset 0 0 150px rgba(234, 0, 0, 0.08)
          `,
          borderLeft: '3px solid rgba(234, 0, 0, 0.25)',
        }}
        animate={{
          y: [0, -35, 0],
          rotateZ: [0, -2.5, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
      />

      <motion.div
        className="absolute top-[25%] -left-[4%] h-[600px] w-[600px]"
        style={{
          background: 'linear-gradient(160deg, rgba(255, 255, 255, 0.85) 0%, rgba(245, 245, 245, 0.6) 60%, transparent 100%)',
          clipPath: 'polygon(0% 25%, 65% 0%, 100% 35%, 75% 100%, 0% 85%)',
          boxShadow: `
            0 70px 180px rgba(0, 0, 0, 0.15),
            inset 0 2px 0 rgba(255, 255, 255, 1),
            inset 0 0 120px rgba(234, 0, 0, 0.04)
          `,
          backdropFilter: 'blur(10px)',
          borderRight: '3px solid rgba(234, 0, 0, 0.15)',
          borderBottom: '2px solid rgba(0, 0, 0, 0.08)',
        }}
        animate={{
          y: [0, 50, 0],
          x: [0, 25, 0],
          rotateZ: [0, 4, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      <motion.div
        className="absolute top-[40%] -right-[6%] h-[550px] w-[700px]"
        style={{
          background: 'linear-gradient(240deg, rgba(255, 255, 255, 0.9) 0%, rgba(250, 250, 250, 0.6) 50%, transparent 100%)',
          clipPath: 'polygon(10% 0%, 100% 8%, 100% 100%, 0% 90%)',
          boxShadow: `
            0 80px 200px rgba(0, 0, 0, 0.12),
            inset 0 2px 4px rgba(255, 255, 255, 0.8),
            0 0 150px rgba(234, 0, 0, 0.08)
          `,
          backdropFilter: 'blur(20px)',
          borderLeft: '3px solid rgba(234, 0, 0, 0.2)',
          borderTop: '2px solid rgba(255, 255, 255, 0.6)',
        }}
        animate={{
          y: [0, -35, 0],
          rotateZ: [0, -3, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 5,
        }}
      />

      <motion.div
        className="absolute -bottom-[10%] -left-[5%] h-[750px] w-[750px]"
        style={{
          background: `
            linear-gradient(45deg, rgba(0, 0, 0, 0.14) 0%, rgba(0, 0, 0, 0.08) 50%, transparent 100%),
            linear-gradient(135deg, rgba(234, 0, 0, 0.06) 0%, transparent 60%)
          `,
          clipPath: 'polygon(0% 55%, 45% 0%, 100% 25%, 85% 100%, 0% 100%)',
          boxShadow: `
            0 -50px 150px rgba(234, 0, 0, 0.15),
            0 60px 180px rgba(0, 0, 0, 0.2),
            inset 0 -2px 0 rgba(255, 255, 255, 0.3)
          `,
          borderTop: '3px solid rgba(234, 0, 0, 0.2)',
        }}
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      <motion.div
        className="absolute -right-[5%] -bottom-[8%] h-[650px] w-[650px]"
        style={{
          background: 'linear-gradient(315deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.06) 45%, transparent 100%)',
          clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 75%)',
          boxShadow: `
            0 -70px 180px rgba(0, 0, 0, 0.15),
            inset 0 -2px 2px rgba(255, 255, 255, 0.2),
            inset 0 0 100px rgba(234, 0, 0, 0.04)
          `,
          borderTop: '2px solid rgba(234, 0, 0, 0.12)',
        }}
        animate={{
          y: [0, -45, 0],
          rotateZ: [0, 2.5, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 6,
        }}
      />

      <motion.div
        className="absolute top-0 left-[15%] h-[400px] w-[70%]"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(234, 0, 0, 0.15) 0%, rgba(234, 0, 0, 0.08) 40%, transparent 70%)',
          filter: 'blur(100px)',
        }}
        animate={{
          opacity: [0.6, 1, 0.6],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute right-[10%] bottom-0 h-[350px] w-[60%]"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(234, 0, 0, 0.12) 0%, rgba(234, 0, 0, 0.06) 40%, transparent 70%)',
          filter: 'blur(90px)',
        }}
        animate={{
          opacity: [0.7, 1, 0.7],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
      />

      <motion.div
        className="absolute top-[45%] left-[50%] h-[1400px] w-[1400px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.8) 0%, rgba(245, 245, 245, 0.4) 25%, transparent 55%)',
          filter: 'blur(120px)',
        }}
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* VERTICAL RED ACCENT LINE */}
      <motion.div
        className="absolute top-[15%] left-[38%] h-[70vh] w-[3px]"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(234, 0, 0, 0.4) 25%, rgba(234, 0, 0, 0.6) 50%, rgba(234, 0, 0, 0.4) 75%, transparent 100%)',
          transform: 'rotate(-12deg)',
          boxShadow: '0 0 50px rgba(234, 0, 0, 0.4), 0 0 100px rgba(234, 0, 0, 0.2)',
        }}
        animate={{
          opacity: [0.6, 1, 0.6],
          scaleY: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
      />

      {/* FLOATING PARTICLES */}
      {[...Array.from({ length: 20 })].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            background: i % 3 === 0 ? 'rgba(234, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.35)',
            boxShadow: i % 3 === 0
              ? '0 0 20px rgba(234, 0, 0, 0.6), 0 0 40px rgba(234, 0, 0, 0.3)'
              : '0 0 15px rgba(0, 0, 0, 0.3)',
            width: i % 3 === 0 ? '8px' : '4px',
            height: i % 3 === 0 ? '8px' : '4px',
            top: `${10 + Math.random() * 80}%`,
            left: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            y: [0, -150 - Math.random() * 100, 0],
            x: [0, (Math.random() - 0.5) * 100, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 12 + Math.random() * 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.8,
          }}
        />
      ))}

      {/* 3D ROTATING CUBE */}
      <motion.div
        className="absolute top-[12%] right-[22%] h-[280px] w-[280px]"
        style={{
          border: '2px solid rgba(0, 0, 0, 0.25)',
          borderRadius: '8px',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(240, 240, 240, 0.2) 100%)',
          transform: 'rotateX(50deg) rotateZ(45deg)',
          transformStyle: 'preserve-3d',
          boxShadow: `
            0 0 100px rgba(234, 0, 0, 0.15),
            inset 0 0 60px rgba(255, 255, 255, 0.4),
            0 30px 80px rgba(0, 0, 0, 0.2)
          `,
        }}
        animate={{
          rotateX: [50, 55, 50],
          rotateZ: [45, 52, 45],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* DIAGONAL LIGHT BEAM */}
      <motion.div
        className="absolute top-[8%] left-[58%] h-[700px] w-[4px]"
        style={{
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.6) 0%, rgba(234, 0, 0, 0.4) 45%, rgba(234, 0, 0, 0.2) 70%, transparent 100%)',
          transform: 'rotate(28deg)',
          boxShadow: '0 0 60px rgba(234, 0, 0, 0.4), 0 0 120px rgba(234, 0, 0, 0.2)',
        }}
        animate={{
          opacity: [0.5, 1, 0.5],
          scaleY: [1, 1.2, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* PULSING RING */}
      <motion.div
        className="absolute top-[58%] left-[18%] h-[500px] w-[500px]"
        style={{
          borderRadius: '50%',
          border: '3px solid rgba(234, 0, 0, 0.2)',
          background: 'radial-gradient(circle, transparent 60%, rgba(234, 0, 0, 0.05) 100%)',
          boxShadow: `
            0 0 120px rgba(234, 0, 0, 0.15),
            inset 0 0 80px rgba(255, 255, 255, 0.2)
          `,
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
      />

      {/* CORNER ACCENT - Top Right */}
      <motion.div
        className="absolute top-0 right-0 h-[450px] w-[450px]"
        style={{
          background: 'radial-gradient(circle at 100% 0%, rgba(234, 0, 0, 0.18) 0%, rgba(234, 0, 0, 0.08) 40%, transparent 70%)',
          clipPath: 'polygon(40% 0%, 100% 0%, 100% 100%)',
          filter: 'blur(60px)',
        }}
        animate={{
          opacity: [0.7, 1, 0.7],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* CORNER ACCENT - Bottom Left */}
      <motion.div
        className="absolute bottom-0 left-0 h-[500px] w-[500px]"
        style={{
          background: 'radial-gradient(circle at 0% 100%, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.08) 40%, transparent 70%)',
          clipPath: 'polygon(0% 100%, 0% 0%, 100% 100%)',
          filter: 'blur(70px)',
        }}
        animate={{
          opacity: [0.6, 1, 0.6],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* PREMIUM NOISE TEXTURE */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay',
        }}
      />

      {/* DIAGONAL RED STREAK */}
      <motion.div
        className="absolute top-[35%] right-[15%] h-[500px] w-[3px]"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(234, 0, 0, 0.5) 30%, rgba(234, 0, 0, 0.7) 50%, rgba(234, 0, 0, 0.5) 70%, transparent 100%)',
          transform: 'rotate(-35deg)',
          boxShadow: '0 0 50px rgba(234, 0, 0, 0.5), 0 0 100px rgba(234, 0, 0, 0.3)',
        }}
        animate={{
          opacity: [0.4, 0.9, 0.4],
          scaleY: [1, 1.15, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 5,
        }}
      />

      {/* SECONDARY RING */}
      <motion.div
        className="absolute top-[25%] right-[30%] h-[350px] w-[350px]"
        style={{
          borderRadius: '50%',
          border: '2px solid rgba(0, 0, 0, 0.15)',
          background: 'radial-gradient(circle, transparent 65%, rgba(0, 0, 0, 0.04) 100%)',
          boxShadow: `
            0 0 80px rgba(0, 0, 0, 0.1),
            inset 0 0 60px rgba(255, 255, 255, 0.15)
          `,
        }}
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.4, 0.8, 0.4],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
      />
    </div>
  );
}
