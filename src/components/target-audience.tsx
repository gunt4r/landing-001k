'use client';

import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import { useMemo } from 'react';

function rand(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function TargetAudienceSection() {
  const benefits = [
    'Как работают современные схемы, которые в 2025 году лишили пользователей миллиардов долларов',
    'Инструкцию, чтобы распознать мошенника, до перевода средств',
    'Рассмотрим методы, которые исключают риск блокировок и чарджбэка',
    'Проверка чистоты кошелька вашего контрагента',
  ];

  const floatingParticles = useMemo(() => {
    const isReduced
      = typeof window !== 'undefined'
        && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const count = isReduced ? 0 : 8;

    return Array.from({ length: count }).map((_, i) => {
      const r1 = rand(i * 3 + 1);
      const r2 = rand(i * 3 + 2);
      const r3 = rand(i * 3 + 3);

      return {
        id: i,
        size: i % 2 === 0 ? 6 : 3,
        isRed: i % 2 === 0,
        top: 15 + r1 * 70,
        left: 10 + r2 * 80,
        duration: 12 + r3 * 6,
        delay: i * 1.2,
        yOffset: -90 - r3 * 50,
        xOffset: (r2 - 0.5) * 60,
      };
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 px-6 py-24 md:px-12 md:py-32 lg:px-24">

      <div className="pointer-events-none absolute inset-0">

        <motion.div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.3) 2px, transparent 2px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 2px, transparent 2px)
            `,
            backgroundSize: '60px 60px',
          }}
          animate={{
            opacity: [0.015, 0.03, 0.015],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute top-[20%] left-[15%] h-[250px] w-[250px]"
          style={{
            background: 'radial-gradient(circle, rgba(234, 0, 0, 0.1) 0%, rgba(234, 0, 0, 0.03) 50%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute right-[15%] bottom-[20%] h-[300px] w-[300px]"
          style={{
            background: 'radial-gradient(circle, rgba(234, 0, 0, 0.08) 0%, rgba(234, 0, 0, 0.02) 50%, transparent 70%)',
            filter: 'blur(90px)',
          }}
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
        />

        {floatingParticles.map(particle => (
          <motion.div
            key={particle.id}
            className="will-change-opacity absolute rounded-full will-change-transform"
            style={{
              background: particle.isRed ? 'rgba(234, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.2)',
              boxShadow: particle.isRed
                ? '0 0 12px rgba(234, 0, 0, 0.4)'
                : '0 0 8px rgba(0, 0, 0, 0.15)',
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              transform: 'translateZ(0)',
            }}
            animate={{
              y: [0, particle.yOffset, 0],
              x: [0, particle.xOffset, 0],
              opacity: [0, 0.7, 0],
              scale: [0.5, 1.2, 0.5],
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
          className="absolute top-[15%] left-[20%] h-[350px] w-[2px]"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(234, 0, 0, 0.25) 40%, rgba(234, 0, 0, 0.4) 50%, rgba(234, 0, 0, 0.25) 60%, transparent 100%)',
            transform: 'rotate(-18deg)',
            boxShadow: '0 0 25px rgba(234, 0, 0, 0.25)',
          }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scaleY: [1, 1.08, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute top-[25%] right-[25%] h-[300px] w-[2px]"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(234, 0, 0, 0.2) 40%, rgba(234, 0, 0, 0.35) 50%, rgba(234, 0, 0, 0.2) 60%, transparent 100%)',
            transform: 'rotate(20deg)',
            boxShadow: '0 0 20px rgba(234, 0, 0, 0.2)',
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scaleY: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">

        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <h2 className="text-4xl font-black text-black md:text-5xl lg:text-6xl">
            Что вы узнаете для
            {' '}
            <span className="relative inline-block">
              <span className="relative z-10">защиты капитала</span>
              <motion.span
                className="absolute bottom-0 left-0 h-4 w-full bg-[#EA0000]/20"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{ transformOrigin: 'left' }}
              />
            </span>
            ?
          </h2>
        </motion.div>

        <div className="mb-12 space-y-5">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group flex items-start gap-4 rounded-2xl border border-black/10 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#EA0000]/30 hover:shadow-[0_15px_40px_rgba(234,0,0,0.08)]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 8 }}
            >

              <motion.div
                className="mt-0.5 flex-shrink-0 rounded-full border-2 border-black/15 bg-white p-1.5 transition-colors duration-300 group-hover:border-[#EA0000] group-hover:bg-[#EA0000]"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Check className="h-5 w-5 text-black transition-colors duration-300 group-hover:text-white" strokeWidth={3} />
              </motion.div>

              <p className="text-lg leading-relaxed text-black/80 md:text-xl">
                {benefit}
              </p>

              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(234, 0, 0, 0.03) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
