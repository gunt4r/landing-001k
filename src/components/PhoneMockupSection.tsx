/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks-extra/no-direct-set-state-in-use-effect */
'use client';

import { Ban, CheckCircle, Search, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';

function rand(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function PhoneMockupSection() {
  const [isReady, setIsReady] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    const r = requestAnimationFrame(() => setIsReady(true));
    return () => cancelAnimationFrame(r);
  }, []);

  const benefits = [
    {
      icon: Shield,
      text: 'Как работают современные схемы, которые в 2025 году лишили пользователей миллиардов долларов',
      position: 'left',
      index: 0,
    },
    {
      icon: Search,
      text: 'Инструкцию, чтобы распознать мошенника, до перевода средств',
      position: 'left',
      index: 1,
    },
    {
      icon: Ban,
      text: 'Рассмотрим методы, которые исключают риск блокировок и чарджбэка',
      position: 'right',
      index: 0,
    },
    {
      icon: CheckCircle,
      text: 'Проверка чистоты кошелька вашего контрагента',
      position: 'right',
      index: 1,
    },
  ];

  // Оптимизированные частицы — меньше для Android
  const floatingParticles = useMemo(() => {
    if (reduceMotion) {
      return [];
    }

    return Array.from({ length: 6 }, (_, i) => {
      const r1 = rand(i * 3 + 1);
      const r2 = rand(i * 3 + 2);
      const r3 = rand(i * 3 + 3);

      return {
        id: i,
        size: i % 2 === 0 ? 6 : 3,
        isRed: i % 2 === 0,
        top: 15 + r1 * 70,
        left: 15 + r2 * 70,
        duration: 14 + r3 * 6,
        delay: i * 1.2,
        yOffset: -80 - r3 * 50,
        xOffset: (r2 - 0.5) * 60,
      };
    });
  }, [reduceMotion]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-24 md:py-32">
      {/* ─── ФОНОВЫЙ СЛОЙ ─── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
      >
        {/* Animated Grid */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.25) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.25) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
          initial={{ opacity: 0 }}
          animate={isReady ? { opacity: reduceMotion ? 0.02 : [0.015, 0.04, 0.015] } : { opacity: 0 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Red glow — статичный blur */}
        <motion.div
          className="absolute top-[10%] left-[20%] h-72 w-72"
          style={{
            background: 'radial-gradient(circle, rgba(234,0,0,0.1) 0%, transparent 70%)',
            filter: 'blur(70px)',
          }}
          initial={{ opacity: 0 }}
          animate={isReady ? { opacity: reduceMotion ? 0.5 : [0.4, 0.7, 0.4] } : { opacity: 0 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute right-[20%] bottom-[15%] h-80 w-80"
          style={{
            background: 'radial-gradient(circle, rgba(234,0,0,0.08) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          initial={{ opacity: 0 }}
          animate={isReady ? { opacity: reduceMotion ? 0.6 : [0.5, 0.8, 0.5] } : { opacity: 0 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />

        {/* Particles */}
        {isReady && floatingParticles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              background: particle.isRed ? 'rgba(234,0,0,0.5)' : 'rgba(0,0,0,0.2)',
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              willChange: 'transform, opacity',
            }}
            initial={{ opacity: 0 }}
            animate={{
              y: [0, particle.yOffset, 0],
              x: [0, particle.xOffset, 0],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: particle.delay,
            }}
          />
        ))}

        {/* Diagonal lines */}
        <motion.div
          className="absolute top-[20%] left-[15%] h-96 w-[2px]"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(234,0,0,0.25) 40%, rgba(234,0,0,0.4) 50%, rgba(234,0,0,0.25) 60%, transparent 100%)',
            transform: 'rotate(-20deg) translateZ(0)',
          }}
          initial={{ opacity: 0 }}
          animate={isReady ? { opacity: reduceMotion ? 0.4 : [0.3, 0.7, 0.3] } : { opacity: 0 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute top-[30%] right-[20%] h-80 w-[2px]"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(234,0,0,0.2) 40%, rgba(234,0,0,0.3) 50%, rgba(234,0,0,0.2) 60%, transparent 100%)',
            transform: 'rotate(20deg) translateZ(0)',
          }}
          initial={{ opacity: 0 }}
          animate={isReady ? { opacity: reduceMotion ? 0.5 : [0.4, 0.8, 0.4] } : { opacity: 0 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl px-6">
        {/* ─── ЗАГОЛОВОК ─── */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="mt-2 text-3xl leading-tight font-bold text-black md:text-4xl lg:text-5xl"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
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

        {/* ─── СЕТКА: Документы + Телефон ─── */}
        <div className="relative mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto_1fr]">
            {/* LEFT DOCUMENTS */}
            <div className="space-y-8">
              {benefits
                .filter(b => b.position === 'left')
                .map((benefit, index) => (
                  <motion.div
                    key={`left-${index}`}
                    className="group relative mx-auto max-w-md md:ml-auto"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    <div
                      className="relative border-2 border-black/10 bg-white p-6 shadow-2xl"
                      style={{
                        clipPath: 'polygon(0% 0%, 100% 0%, 100% 94%, 94% 100%, 0% 100%)',
                        transform: 'translateZ(0)',
                        backfaceVisibility: 'hidden',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px) translateZ(0)';
                        e.currentTarget.style.boxShadow = '0 30px 80px rgba(234,0,0,0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) translateZ(0)';
                        e.currentTarget.style.boxShadow = '';
                      }}
                    >
                      {/* Corner accent */}
                      <div
                        className="absolute top-0 right-0 h-16 w-16"
                        style={{
                          background: 'linear-gradient(225deg, rgba(234,0,0,0.1) 0%, transparent 70%)',
                          clipPath: 'polygon(40% 0%, 100% 0%, 100% 100%)',
                        }}
                      />

                      {/* Icon */}
                      <div
                        className="mb-4 inline-block"
                        style={{ transition: 'transform 0.2s ease' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.08) rotate(3deg)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                        }}
                      >
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#EA0000] to-[#c00000] shadow-xl">
                          <benefit.icon className="h-7 w-7 text-white" strokeWidth={2.5} />
                        </div>
                      </div>

                      {/* Text */}
                      <p
                        className="text-base leading-relaxed text-black/80"
                        style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300 }}
                      >
                        {benefit.text}
                      </p>

                      {/* Bullet point */}
                      <div className="absolute top-8 -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#EA0000] shadow-lg">
                        <div className="h-2 w-2 rounded-full bg-white" />
                      </div>

                      {/* Hover overlay */}
                      <div
                        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        style={{
                          background: 'radial-gradient(circle at 50% 50%, rgba(234,0,0,0.04) 0%, transparent 70%)',
                        }}
                      />
                    </div>

                    {/* 3D Shadow */}
                    <div
                      className="absolute inset-0 -z-10"
                      style={{
                        background: 'linear-gradient(to bottom right, rgba(234,0,0,0.06), transparent)',
                        filter: 'blur(18px)',
                        transform: 'translate(10px, 10px)',
                      }}
                    />
                  </motion.div>
                ))}
            </div>

            {/* CENTER PHONE */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative mx-auto w-[280px] md:w-[320px]">
                {/* Phone Frame */}
                <div
                  className="relative overflow-hidden rounded-[40px] border-8 border-black bg-black shadow-2xl"
                  style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
                >
                  {/* Screen */}
                  <div className="relative aspect-[9/19.5] overflow-hidden bg-white">
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                      <div className="text-center">
                        <Shield className="mx-auto mb-4 h-16 w-16 text-[#EA0000]" />
                      </div>
                      {/* Replace with: <Image src="/your-image.png" alt="..." fill /> */}
                    </div>

                    {/* Screen overlay — без анимации на Android */}
                    <div
                      className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-black/10"
                      style={{ opacity: 0.4 }}
                    />
                  </div>

                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-black" />
                </div>

                {/* Phone glow — статичный blur, только opacity анимация */}
                <motion.div
                  className="absolute inset-0 -z-10 rounded-[40px]"
                  style={{
                    background: 'radial-gradient(circle, rgba(234,0,0,0.25) 0%, transparent 70%)',
                    filter: 'blur(35px)',
                  }}
                  initial={{ opacity: 0 }}
                  animate={isReady && !reduceMotion ? { opacity: [0.4, 0.7, 0.4] } : { opacity: 0.5 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Rings — только если не reduced motion */}
                {isReady && !reduceMotion && [1, 2, 3].map(ring => (
                  <motion.div
                    key={ring}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      width: `${280 + ring * 60}px`,
                      height: `${580 + ring * 120}px`,
                      border: '2px solid rgba(234,0,0,0.08)',
                      borderRadius: '50px',
                    }}
                    initial={{ opacity: 0 }}
                    animate={{
                      scale: [1, 1.04, 1],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 4 + ring,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: ring * 0.5,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* RIGHT DOCUMENTS */}
            <div className="space-y-8">
              {benefits
                .filter(b => b.position === 'right')
                .map((benefit, index) => (
                  <motion.div
                    key={`right-${index}`}
                    className="group relative mx-auto max-w-md md:mr-auto"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    <div
                      className="relative border-2 border-black/10 bg-white p-6 shadow-2xl"
                      style={{
                        clipPath: 'polygon(0% 0%, 100% 0%, 100% 94%, 94% 100%, 0% 100%)',
                        transform: 'translateZ(0)',
                        backfaceVisibility: 'hidden',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px) translateZ(0)';
                        e.currentTarget.style.boxShadow = '0 30px 80px rgba(234,0,0,0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) translateZ(0)';
                        e.currentTarget.style.boxShadow = '';
                      }}
                    >
                      {/* Corner accent */}
                      <div
                        className="absolute top-0 left-0 h-16 w-16"
                        style={{
                          background: 'linear-gradient(135deg, rgba(234,0,0,0.1) 0%, transparent 70%)',
                          clipPath: 'polygon(0% 0%, 60% 0%, 0% 100%)',
                        }}
                      />

                      {/* Icon */}
                      <div
                        className="mb-4 inline-block"
                        style={{ transition: 'transform 0.2s ease' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.08) rotate(-3deg)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                        }}
                      >
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#EA0000] to-[#c00000] shadow-xl">
                          <benefit.icon className="h-7 w-7 text-white" strokeWidth={2.5} />
                        </div>
                      </div>

                      {/* Text */}
                      <p
                        className="text-base leading-relaxed text-black/80"
                        style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300 }}
                      >
                        {benefit.text}
                      </p>

                      {/* Bullet point */}
                      <div className="absolute top-8 -right-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#EA0000] shadow-lg">
                        <div className="h-2 w-2 rounded-full bg-white" />
                      </div>

                      {/* Hover overlay */}
                      <div
                        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        style={{
                          background: 'radial-gradient(circle at 50% 50%, rgba(234,0,0,0.04) 0%, transparent 70%)',
                        }}
                      />
                    </div>

                    {/* 3D Shadow */}
                    <div
                      className="absolute inset-0 -z-10"
                      style={{
                        background: 'linear-gradient(to bottom left, rgba(234,0,0,0.06), transparent)',
                        filter: 'blur(18px)',
                        transform: 'translate(-10px, 10px)',
                      }}
                    />
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
