/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks-extra/no-direct-set-state-in-use-effect */
'use client';

import { Landmark, Repeat } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import Revolut from './revolut.svg';

function rand(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function OldSolutionsSection() {
  const [isReady, setIsReady] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    const r = requestAnimationFrame(() => setIsReady(true));
    return () => cancelAnimationFrame(r);
  }, []);

  const solutions = [
    {
      name: 'Финтех-платформы',
      subtitle: 'Wise, Revolut',
      risk: 'Усиление мониторинга по сотням параметров (от device fingerprinting до частоты платежей). Ошибка в сумме может привести к блокировке капитала до 60 дней.',
      icon: <Image src={Revolut} className="size-5 invert" alt="Revolut" width={40} height={40} />,
    },
    {
      name: 'P2P-рынок',
      subtitle: 'Риски цепочек',
      risk: 'Схемы «треугольник» и чарджбэки эволюционировали. Получение средств от непроверенного лица в Европе — риск блокировки и уголовного дела.',
      icon: <Repeat className="size-5 text-white" />,
    },
    {
      name: 'SWIFT-переводы',
      subtitle: 'Банковские каналы',
      risk: 'Перевод незнакомому контрагенту при суммах от $10,000 — один из основных триггеров для запросов источника средств и заморозок капитала.',
      icon: <Landmark className="size-5 text-white" />,
    },
  ];

  const warningParticles = useMemo(() => {
    if (reduceMotion) {
      return [];
    }

    return Array.from({ length: 6 }, (_, i) => {
      const r1 = rand(i * 3 + 1);
      const r2 = rand(i * 3 + 2);
      const r3 = rand(i * 3 + 3);

      return {
        id: i,
        isRed: i % 2 === 0,
        top: 15 + r1 * 70,
        left: 15 + r2 * 70,
        duration: 12 + r3 * 6,
        delay: i * 1.5,
        yOffset: -60 - r3 * 40,
        xOffset: (r2 - 0.5) * 50,
      };
    });
  }, [reduceMotion]);

  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 md:px-12 md:py-32 lg:px-24">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
      >
        <motion.div
          className="absolute top-0 left-0 h-96 w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(234,0,0,0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(234,0,0,0.15) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          }}
          initial={{ opacity: 0 }}
          animate={isReady ? { opacity: reduceMotion ? 0.12 : [0.08, 0.2, 0.08] } : { opacity: 0 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute top-[15%] -left-10 h-80 w-80"
          style={{
            background: 'linear-gradient(135deg, rgba(234,0,0,0.08) 0%, rgba(234,0,0,0.03) 100%)',
            clipPath: 'polygon(0% 25%, 65% 0%, 100% 40%, 70% 100%, 0% 80%)',
            border: '1px solid rgba(234,0,0,0.12)',
          }}
          initial={{ opacity: 0 }}
          animate={isReady ? { opacity: reduceMotion ? 0.8 : [0.6, 1, 0.6] } : { opacity: 0 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute top-[50%] -right-10 h-72 w-72"
          style={{
            background: 'linear-gradient(225deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.02) 100%)',
            clipPath: 'polygon(25% 0%, 100% 5%, 100% 100%, 10% 85%)',
            border: '1px solid rgba(0,0,0,0.08)',
          }}
          initial={{ opacity: 0 }}
          animate={isReady ? { opacity: reduceMotion ? 0.7 : [0.5, 0.9, 0.5] } : { opacity: 0 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        {/* Red glow — статичный blur */}
        <motion.div
          className="absolute top-[30%] right-[15%] h-64 w-64"
          style={{
            background: 'radial-gradient(circle, rgba(234,0,0,0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          initial={{ opacity: 0 }}
          animate={isReady ? { opacity: reduceMotion ? 0.5 : [0.4, 0.8, 0.4] } : { opacity: 0 }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Diagonal line */}
        <motion.div
          className="absolute top-[20%] left-[25%] h-96 w-[2px]"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(234,0,0,0.35) 30%, rgba(234,0,0,0.5) 50%, rgba(234,0,0,0.35) 70%, transparent 100%)',
            transform: 'rotate(-18deg) translateZ(0)',
          }}
          initial={{ opacity: 0 }}
          animate={isReady ? { opacity: reduceMotion ? 0.5 : [0.4, 0.9, 0.4] } : { opacity: 0 }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Warning particles — треугольники */}
        {isReady && warningParticles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute"
            style={{
              width: 0,
              height: 0,
              borderLeft: '5px solid transparent',
              borderRight: '5px solid transparent',
              borderBottom: particle.isRed
                ? '8px solid rgba(234,0,0,0.5)'
                : '8px solid rgba(255,165,0,0.4)',
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              willChange: 'transform, opacity',
            }}
            initial={{ opacity: 0 }}
            animate={{
              y: [0, -particle.yOffset, 0],
              x: [0, particle.xOffset, 0],
              opacity: [0, 0.8, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* ─── ЗАГОЛОВОК ─── */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="mt-2 mb-6 text-3xl leading-tight font-bold text-black md:text-4xl lg:text-5xl"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            Блокировка — не риск, а
            {' '}
            <span className="relative inline-block">
              <span className="relative z-10">вопрос времени</span>
              <motion.span
                className="absolute bottom-0 left-0 h-4 w-full bg-[#c20000]/20"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{ transformOrigin: 'left' }}
              />
            </span>
          </h2>

          <motion.p
            className="mx-auto max-w-3xl text-lg text-black/70"
            style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Методы, которые казались безопасными два года назад, сегодня внесены в стоп-листы всех крупных финтех-компаний.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div
                className="relative h-full border-2 border-black/10 bg-gradient-to-br from-white to-gray-50 p-8"
                style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 100% 92%, 92% 100%, 0% 100%)',
                  boxShadow: '0 25px 70px rgba(0,0,0,0.1)',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) translateZ(0)';
                  e.currentTarget.style.boxShadow = '0 35px 90px rgba(234,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) translateZ(0)';
                  e.currentTarget.style.boxShadow = '0 25px 70px rgba(0,0,0,0.1)';
                }}
              >
                <div
                  className="absolute top-0 right-0 h-16 w-16"
                  style={{
                    background: 'linear-gradient(225deg, rgba(234,0,0,0.12) 0%, transparent 80%)',
                    clipPath: 'polygon(40% 0%, 100% 0%, 100% 100%)',
                  }}
                />

                <div className="mb-3 flex items-center gap-4">
                  <div className="rounded-xl border border-[#222] bg-[#c20000] p-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-black/15">
                      {solution.icon}
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-extrabold text-[#c20000]">{solution.name}</div>
                    <div className="mt-1 inline-block rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white">
                      {solution.subtitle}
                    </div>
                  </div>
                </div>

                {/* Risk description */}
                <p
                  className="text-sm leading-relaxed text-black/70"
                  style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300 }}
                >
                  {solution.risk}
                </p>

                {/* Hover overlay */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(234,0,0,0.04) 0%, transparent 70%)',
                  }}
                />
              </div>

              {/* 3D Shadow — статичный blur */}
              <div
                className="absolute inset-0 -z-10"
                style={{
                  background: 'linear-gradient(to bottom right, rgba(0,0,0,0.08), transparent)',
                  filter: 'blur(18px)',
                  transform: 'translate(10px, 10px)',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
