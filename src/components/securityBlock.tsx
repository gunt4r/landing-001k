'use client';

import { motion } from 'motion/react';
import { useMemo } from 'react';

function rand(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function SecurityBlock() {
  const stats = [
    { value: '$17 млрд', label: 'Общий объем нелегальных потоков — $158 млрд, что на 145% выше показателей прошлого года.', highlight: 'убытки в 2025 году' },
    { value: 'В 4,5 раза', label: 'Схемы с применением нейросетей стали эффективней. Использование Deepfake выросло на 1400%.', highlight: 'ИИ-агрессия' },
    { value: 'Контроли', label: 'При операциях от $10 000 вероятность запроса происхождения средств составляет 80%.', highlight: 'происхождение средств' },
    { value: 'Блокировки', label: 'Британские банки блокируют 40% транзакций, связанных с крипто-активами.', highlight: 'AML-риск' },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <motion.div
        className="absolute top-0 left-0 h-[400px] w-full opacity-20"
        style={{
          backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.15) 1px, transparent 1px)
            `,
          backgroundSize: '50px 50px',
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
        }}
        animate={{
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-[10%] -left-[5%] h-[300px] w-[300px]"
        style={{
          background: 'linear-gradient(135deg, rgba(234, 0, 0, 0.08) 0%, rgba(234, 0, 0, 0.03) 100%)',
          clipPath: 'polygon(0% 20%, 70% 0%, 100% 30%, 80% 100%, 0% 85%)',
          boxShadow: '0 30px 80px rgba(234, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
          border: '1px solid rgba(234, 0, 0, 0.1)',
        }}
        animate={{
          y: [0, 30, 0],
          rotateZ: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-[40%] -right-[4%] h-[250px] w-[250px]"
        style={{
          background: 'linear-gradient(225deg, rgba(0, 0, 0, 0.06) 0%, rgba(0, 0, 0, 0.02) 100%)',
          clipPath: 'polygon(20% 0%, 100% 10%, 100% 100%, 10% 90%)',
          boxShadow: '0 40px 100px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
          border: '1px solid rgba(0, 0, 0, 0.08)',
        }}
        animate={{
          y: [0, -25, 0],
          rotateZ: [0, -4, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-[20%] right-[15%] h-[200px] w-[200px]"
        style={{
          background: 'radial-gradient(circle, rgba(234, 0, 0, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-[15%] left-[30%] h-[400px] w-[2px]"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(234, 0, 0, 0.3) 40%, rgba(234, 0, 0, 0.5) 50%, rgba(234, 0, 0, 0.3) 60%, transparent 100%)',
          transform: 'rotate(-15deg)',
          boxShadow: '0 0 30px rgba(234, 0, 0, 0.3)',
        }}
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scaleY: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {useMemo(() => {
        const isReduced
          = typeof window !== 'undefined'
            && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const count = isReduced ? 0 : 6; // reduce from 8 → 6

        return Array.from({ length: count }).map((_, i) => {
          const r1 = rand(i * 3 + 1);
          const r2 = rand(i * 3 + 2);
          const r3 = rand(i * 3 + 3);

          const size = i % 2 === 0 ? 6 : 3;

          return (
            <motion.div
              key={`particle-${i}`}
              className="will-change-opacity absolute rounded-full will-change-transform"
              style={{
                background:
            i % 2 === 0
              ? 'rgba(234, 0, 0, 0.6)'
              : 'rgba(0, 0, 0, 0.3)',
                boxShadow:
            i % 2 === 0
              ? '0 0 12px rgba(234,0,0,0.4)'
              : '0 0 8px rgba(0,0,0,0.2)',
                width: `${size}px`,
                height: `${size}px`,
                top: `${20 + r1 * 60}%`,
                left: `${10 + r2 * 80}%`,
                transform: 'translateZ(0)',
              }}
              animate={{
                y: [0, -60 - r3 * 30, 0],
                x: [0, (r2 - 0.5) * 40, 0],
                opacity: [0, 1, 0],
                scale: [0.5, 1.1, 0.5],
              }}
              transition={{
                duration: 9 + r1 * 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.8,
              }}
            />
          );
        });
      }, [])}

      <div className="relative container mx-auto max-w-7xl px-6">

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative inline-block">

            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-black/5 to-transparent"
              style={{
                clipPath: 'polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)',
                filter: 'blur(10px)',
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>

          <h2 className="mt-8 max-w-4xl text-5xl leading-tight font-bold text-black md:text-6xl">
            Почему старые правила безопасности
            {' '}
            <span className="relative inline-block">
              <span className="relative z-10">больше не защищают</span>
              <motion.span
                className="absolute bottom-0 left-0 h-3 w-full bg-[#EA0000]/20"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{ transformOrigin: 'left' }}
              />
            </span>
            {' '}
            ваш капитал?
          </h2>
        </motion.div>

        <motion.div
          className="mb-16 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative border-l-4 border-[#EA0000] pl-8">
            <motion.div
              className="absolute top-0 left-0 h-full w-1 bg-[#EA0000]"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              style={{ transformOrigin: 'top' }}
            />
            <p className="text-xl leading-relaxed text-black/80 md:text-2xl">
              В 2026 году индустрия перешла на этап тотального комплаенса. То, что раньше считалось «безопасной сделкой»,
              сегодня попадает под автоматические фильтры мониторинга.
            </p>
          </div>
        </motion.div>

        <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >

              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white to-gray-50"
                style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 100% 95%, 95% 100%, 0% 100%)',
                  boxShadow: '0 20px 30px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                }}
                whileHover={{
                  y: -5,
                  boxShadow: `
                    0 10px 30px rgba(234, 0, 0, 0.6),
                    0 20px 60px rgba(234, 0, 0, 0.4),
                    0 30px 100px rgba(234, 0, 0, 0.3)
                  `,
                }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="absolute top-0 right-0 h-20 w-20"
                style={{
                  background: 'linear-gradient(225deg, rgba(234, 0, 0, 0.1) 0%, transparent 70%)',
                  clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%)',
                }}
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.5,
                }}
              />

              <div className="relative p-8">
                <div className="mb-4">
                  <motion.div
                    className="text-4xl font-bold text-[#EA0000]"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    {stat.value}
                  </motion.div>
                  <motion.div
                    className="mt-2 inline-block rounded-full bg-[#EA0000] px-3 py-1 text-xs font-semibold text-white"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  >
                    {stat.highlight}
                  </motion.div>
                </div>
                <p className="text-sm leading-relaxed text-black/70">{stat.label}</p>
              </div>

              <motion.div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(234, 0, 0, 0.05) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="relative mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <div
            className="absolute inset-0 -z-10 translate-y-4"
            style={{
              background: 'linear-gradient(to bottom, rgba(234, 0, 0, 0.3), transparent)',
              filter: 'blur(30px)',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
