/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks-extra/no-direct-set-state-in-use-effect */
'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

function rand(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function AuthorBlock() {
  const [isReady, setIsReady] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    const r = requestAnimationFrame(() => setIsReady(true));
    return () => cancelAnimationFrame(r);
  }, []);

  const achievements = [
    { number: '01', title: 'Маркетолог. Growth Hacker' },
    { number: '02', title: 'Бывший топ-менеджер Meta ASP' },
    { number: '03', title: 'БОЛЕЕ $800M+', subtitle: 'Помог инвестировать своим клиентам в рекламу с положительным ROI' },
  ];

  const particles = useMemo(() => {
    if (reduceMotion) {
      return [];
    }
    return Array.from({ length: 4 }, (_, i) => {
      const r1 = rand(i * 3 + 1);
      const r2 = rand(i * 3 + 2);
      const r3 = rand(i * 3 + 3);
      return {
        id: i,
        size: i % 2 === 0 ? 4 : 2,
        isRed: i % 2 === 0,
        top: 20 + r1 * 60,
        left: 15 + r2 * 70,
        duration: 14 + r3 * 6,
        delay: i * 2,
        yOffset: -60 - r3 * 30,
        xOffset: (r2 - 0.5) * 40,
      };
    });
  }, [reduceMotion]);

  return (
    <section className="relative overflow-hidden bg-black py-16 md:py-20">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
      >
        <motion.div
          className="absolute -top-32 -left-32 h-80 w-80"
          style={{
            background: 'radial-gradient(circle, rgba(234,0,0,0.25) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          initial={{ opacity: 0 }}
          animate={isReady ? { opacity: reduceMotion ? 0.6 : [0.5, 0.8, 0.5] } : { opacity: 0 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute -right-32 -bottom-32 h-80 w-80"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
            filter: 'blur(70px)',
          }}
          initial={{ opacity: 0 }}
          animate={isReady ? { opacity: reduceMotion ? 0.7 : [0.6, 0.9, 0.6] } : { opacity: 0 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        <motion.div
          className="absolute top-[15%] left-[20%] h-80 w-[2px]"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(234,0,0,0.5) 25%, rgba(234,0,0,0.6) 50%, rgba(234,0,0,0.5) 75%, transparent 100%)',
            transform: 'rotate(-20deg) translateZ(0)',
          }}
          initial={{ opacity: 0 }}
          animate={isReady ? { opacity: reduceMotion ? 0.6 : [0.5, 0.8, 0.5] } : { opacity: 0 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        {isReady && particles.map(p => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              background: p.isRed ? 'rgba(234,0,0,0.7)' : 'rgba(255,255,255,0.5)',
              width: `${p.size}px`,
              height: `${p.size}px`,
              top: `${p.top}%`,
              left: `${p.left}%`,
              willChange: 'transform, opacity',
            }}
            initial={{ opacity: 0 }}
            animate={{
              y: [0, p.yOffset, 0],
              x: [0, p.xOffset, 0],
              opacity: [0, 0.7, 0],
            }}
            transition={{ duration: p.duration, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl px-6">

        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-5xl leading-[1.1] font-black text-white uppercase md:text-6xl lg:text-7xl"
            style={{ fontFamily: 'Geist, sans-serif', letterSpacing: '0.02em' }}
          >
            АВТОР КУРСА
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 items-center">

          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <div
              className="md:text-10xl absolute top-14 -left-6 -translate-y-1/2 text-9xl font-thin text-white/20 lg:left-1/4"
              style={{ fontFamily: 'system-ui, sans-serif' }}
            >
              (
            </div>

            <div className="relative ml-auto aspect-3/4 max-w-md overflow-hidden lg:mx-auto">

              <div
                className="absolute top-6 left-[35%] z-20 text-sm font-light tracking-[0.25em] text-white sm:left-6 sm:text-xs"
                style={{ fontFamily: 'Geist, sans-serif' }}
              >
                // about
              </div>

              <div
                className="absolute top-6 right-6 z-20 text-right leading-[1.1]"
                style={{ fontFamily: 'Geist, sans-serif' }}
              >
                <div className="text-2xl font-black tracking-[0.08em] text-white uppercase sm:text-4xl md:text-5xl">
                  СЕРЕГА
                </div>
                <div className="text-2xl font-black tracking-[0.08em] text-white uppercase sm:text-4xl md:text-5xl">
                  001К
                </div>
              </div>

              <div className="relative ml-auto h-full w-4/6 bg-gray-900 sm:h-full sm:w-full">
                <Image
                  src="/client.png"
                  alt="Серега 001к"
                  fill
                  className="object-cover opacity-50 transition-opacity duration-1000 ease-in-out sm:opacity-100"
                  style={{ objectPosition: 'center 20%', filter: 'grayscale(100%)' }}
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  priority
                />

                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 30%, transparent 50%)',
                  }}
                />
              </div>

              <div
                className="absolute top-0 left-2/6 h-20 w-20 sm:left-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(234,0,0,0.3) 0%, transparent 70%)',
                  clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)',
                }}
              />
              <div
                className="absolute right-0 bottom-0 h-20 w-20"
                style={{
                  background: 'linear-gradient(315deg, rgba(255,255,255,0.1) 0%, transparent 70%)',
                  clipPath: 'polygon(100% 100%, 100% 0%, 0% 100%)',
                }}
              />
            </div>

            <div
              className="absolute top-14 -right-6 -translate-y-1/2 text-9xl font-thin text-white/20 lg:right-1/4"
              style={{ fontFamily: 'system-ui, sans-serif' }}
            >
              )
            </div>

            {isReady && !reduceMotion && (
              <motion.div
                className="absolute -right-8 -bottom-8 h-28 w-28 rounded-full border-3 border-[#EA0000]/30"
                animate={{
                  rotate: 360,
                  scale: [1, 1.12, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                  opacity: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
              />
            )}
          </motion.div>

          <div className="absolute left-0
            z-100 order-1 w-full space-y-6 sm:left-2 lg:order-2  [@media(min-width:300px)]:bottom-0 [@media(min-width:420px)]:bottom-auto"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className={`group relative max-w-2/4 sm:max-w-sm ${index % 2 === 0 ? 'self-start' : 'self-end lg:-right-[67%]'}`}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
              >
                <div
                  className="relative flex items-center gap-2 sm:gap-5 overflow-hidden p-1 sm:p-6 md:p-8"
                  style={{
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    transition: 'border-color 0.3s ease, background-color 0.3s ease',
                  }}
                >

                  <div
                    className="mb-3 text-sm font-bold tracking-[0.3em] text-[#EA0000]/70"
                    style={{ fontFamily: 'Geist, sans-serif' }}
                  >
                    (
                    {achievement.number}
                    )
                  </div>

                  <div className="flex flex-col">
                    <h3
                      className="mb-1 text-xl leading-[1.1] font-black text-white uppercase sm:text-3xl md:text-xl"
                      style={{ fontFamily: 'Geist, sans-serif', letterSpacing: '0.02em' }}
                    >
                      {achievement.title}
                    </h3>
                    {achievement.subtitle && (
                      <p
                        className="text-white/70"
                        style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300 }}
                      >
                        {achievement.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
