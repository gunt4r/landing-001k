/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks-extra/no-direct-set-state-in-use-effect */
'use client';

import { Ban, CheckCircle, FileText, Search, Shield } from 'lucide-react';
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

  const documents = [
    {
      icon: Shield,
      title: 'Anti-Scam Guide 2025',
      badge: 'Схемы мошенничества',
      text: 'Разбор схем: которые в 2025 году лишили пользователей миллиардов долларов',
      position: 'left',
      gradient: 'from-[#EA0000] to-[#c00000]',
    },
    {
      icon: Search,
      title: 'Case Studies 2026',
      badge: 'Разбор кейсов',
      text: 'Разбор кейсов: как пользователи теряли доступ к активам, и пошаговый план, как этого избежать в 2026 году',
      position: 'left',
      gradient: 'from-[#EA0000] to-[#b00000]',
    },
    {
      icon: Ban,
      title: 'Risk Prevention Protocol',
      badge: 'Защита от блокировок',
      text: 'Разбор методов: которые исключают риск блокировок и чарджбэка',
      position: 'right',
      gradient: 'from-[#EA0000] to-[#d00000]',
    },
    {
      icon: CheckCircle,
      title: 'AML Audit Framework',
      badge: 'Проверка контрагентов',
      text: 'AML-аудит: как самостоятельно проверять «чистоту» кошельков контрагентов перед отправкой средств',
      position: 'right',
      gradient: 'from-[#EA0000] to-[#a00000]',
    },
  ];

  const checklistItems = [
    'Разбор схем 2025',
    'Разбор кейсов 2026',
    'Методы защиты от блокировок',
    'AML-аудит контрагентов',
    'Распознавание мошенников',
  ];

  const floatingParticles = useMemo(() => {
    if (reduceMotion) {
      return [];
    }
    return Array.from({ length: 4 }, (_, i) => {
      const r1 = rand(i * 3 + 1);
      const r2 = rand(i * 3 + 2);
      const r3 = rand(i * 3 + 3);
      return {
        id: i,
        size: 3,
        top: 20 + r1 * 60,
        left: 20 + r2 * 60,
        duration: 18 + r3 * 8,
        delay: i * 2.5,
        yOffset: -60 - r3 * 40,
        xOffset: (r2 - 0.5) * 40,
      };
    });
  }, [reduceMotion]);

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* ─── ФОНОВЫЙ СЛОЙ ─── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
      >
        {/* Subtle diagonal lines */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 60px,
              rgba(0,0,0,0.5) 60px,
              rgba(0,0,0,0.5) 61px
            )`,
          }}
        />

        {/* Red accent glow */}
        <motion.div
          className="absolute top-[20%] left-[15%] h-96 w-96"
          style={{
            background: 'radial-gradient(circle, rgba(234,0,0,0.06) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          initial={{ opacity: 0 }}
          animate={isReady ? { opacity: reduceMotion ? 0.5 : [0.3, 0.6, 0.3] } : { opacity: 0 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Particles */}
        {isReady && floatingParticles.map(p => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              background: 'rgba(234,0,0,0.25)',
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
              opacity: [0, 0.5, 0],
            }}
            transition={{ duration: p.duration, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
          />
        ))}
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
            Что вы получите для
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
            <div className="space-y-10">
              {documents
                .filter(d => d.position === 'left')
                .map((doc, index) => (
                  <motion.div
                    key={`left-${index}`}
                    className="group relative mx-auto max-w-md md:ml-auto"
                    initial={{ opacity: 0, x: -60, rotateY: 20 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: index * 0.15 }}
                    style={{ perspective: '1500px' }}
                  >
                    {/* Main document card */}
                    <div
                      className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white p-8 shadow-2xl"
                      style={{
                        transform: 'translateZ(0) rotateY(-3deg)',
                        backfaceVisibility: 'hidden',
                        transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                        border: '1px solid rgba(0,0,0,0.06)',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.12), 0 0 1px rgba(0,0,0,0.1)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateZ(25px) rotateY(-1deg) translateY(-8px)';
                        e.currentTarget.style.boxShadow = '0 30px 80px rgba(234,0,0,0.18)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateZ(0) rotateY(-3deg)';
                        e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.12)';
                      }}
                    >
                      {/* Red accent corner */}
                      <div
                        className="absolute top-0 right-0 h-24 w-24 opacity-60"
                        style={{
                          background: 'linear-gradient(225deg, rgba(234,0,0,0.08) 0%, transparent 70%)',
                        }}
                      />

                      {/* Icon container */}
                      <div className="mb-6 flex items-center gap-4">
                        <div
                          className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${doc.gradient} shadow-xl`}
                          style={{
                            boxShadow: '0 8px 24px rgba(234,0,0,0.3)',
                            transform: 'translateZ(0)',
                            transition: 'transform 0.2s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.08) translateZ(0)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1) translateZ(0)';
                          }}
                        >
                          <doc.icon className="h-8 w-8 text-white" strokeWidth={2.5} />
                        </div>

                        {/* Title */}
                        <div className="flex-1">
                          <h3
                            className="text-sm font-black tracking-wider text-black uppercase"
                            style={{ fontFamily: 'Geist, sans-serif', letterSpacing: '0.05em' }}
                          >
                            {doc.title}
                          </h3>
                        </div>
                      </div>

                      {/* Badge */}
                      <div className="mb-5">
                        <div
                          className="inline-block rounded-md bg-black px-3 py-1.5 text-xs font-bold tracking-widest text-white uppercase"
                          style={{ fontFamily: 'Geist, sans-serif' }}
                        >
                          {doc.badge}
                        </div>
                      </div>

                      {/* Description */}
                      <p
                        className="text-sm leading-relaxed text-black/70"
                        style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300 }}
                      >
                        {doc.text}
                      </p>

                      {/* Bottom red line */}
                      <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-[#EA0000] via-[#EA0000] to-transparent" />

                      {/* Subtle texture overlay */}
                      <div
                        className="pointer-events-none absolute inset-0 opacity-[0.015]"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                        }}
                      />
                    </div>

                    {/* Paper stack shadow layers */}
                    <div
                      className="absolute inset-0 -z-10 bg-white"
                      style={{
                        transform: 'translateZ(-8px) translateX(6px) translateY(6px) rotateY(-3deg)',
                        border: '1px solid rgba(0,0,0,0.04)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                      }}
                    />
                    <div
                      className="absolute inset-0 -z-20 bg-gray-50"
                      style={{
                        transform: 'translateZ(-16px) translateX(12px) translateY(12px) rotateY(-3deg)',
                        border: '1px solid rgba(0,0,0,0.03)',
                      }}
                    />
                  </motion.div>
                ))}
            </div>

            {/* CENTER PHONE */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <div className="relative mx-auto w-[280px] md:w-[320px]">
                {/* Phone frame */}
                <div
                  className="relative overflow-hidden rounded-[44px] border-[12px] border-black bg-black shadow-2xl"
                  style={{
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    boxShadow: '0 30px 90px rgba(0,0,0,0.4)',
                  }}
                >
                  {/* Screen content - ЧЕКЛИ��Т */}
                  <div className="relative aspect-[9/19.5] overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
                    <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
                      {/* Icon */}
                      <div className="mb-6">
                        <div
                          className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EA0000] to-[#c00000] shadow-xl"
                          style={{ boxShadow: '0 12px 32px rgba(234,0,0,0.4)' }}
                        >
                          <FileText className="h-10 w-10 text-white" strokeWidth={2.5} />
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        className="mb-2 text-lg font-black tracking-wide text-white uppercase"
                        style={{ fontFamily: 'Geist, sans-serif' }}
                      >
                        Чек-лист
                      </h3>
                      <p
                        className="mb-8 text-xs font-light text-white/60"
                        style={{ fontFamily: 'Geist, sans-serif' }}
                      >
                        Защита капитала
                      </p>

                      {/* Checklist items */}
                      <div className="mb-8 w-full space-y-3">
                        {checklistItems.map((item, i) => (
                          <div key={i} className="flex items-center gap-3 text-left">
                            <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded bg-[#EA0000]/20">
                              <svg
                                className="h-4 w-4 text-[#EA0000]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={3}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span
                              className="text-xs font-light text-white/80"
                              style={{ fontFamily: 'Geist, sans-serif' }}
                            >
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <button
                        className="w-full rounded-lg bg-[#EA0000] px-6 py-3.5 text-xs font-bold tracking-wide text-white uppercase shadow-lg"
                        style={{
                          fontFamily: 'Geist, sans-serif',
                          boxShadow: '0 8px 24px rgba(234,0,0,0.4)',
                        }}
                      >
                        Получить бесплатно
                      </button>
                    </div>
                  </div>

                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 h-7 w-36 -translate-x-1/2 rounded-b-3xl bg-black" />
                </div>

                {/* Phone glow */}
                <motion.div
                  className="absolute inset-0 -z-10 rounded-[44px]"
                  style={{
                    background: 'radial-gradient(circle, rgba(234,0,0,0.15) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                  }}
                  initial={{ opacity: 0 }}
                  animate={isReady && !reduceMotion ? { opacity: [0.3, 0.6, 0.3] } : { opacity: 0.4 }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </motion.div>

            {/* RIGHT DOCUMENTS */}
            <div className="space-y-10">
              {documents
                .filter(d => d.position === 'right')
                .map((doc, index) => (
                  <motion.div
                    key={`right-${index}`}
                    className="group relative mx-auto max-w-md md:mr-auto"
                    initial={{ opacity: 0, x: 60, rotateY: -20 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: index * 0.15 }}
                    style={{ perspective: '1500px' }}
                  >
                    {/* Main document card */}
                    <div
                      className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white p-8 shadow-2xl"
                      style={{
                        transform: 'translateZ(0) rotateY(3deg)',
                        backfaceVisibility: 'hidden',
                        transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                        border: '1px solid rgba(0,0,0,0.06)',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.12), 0 0 1px rgba(0,0,0,0.1)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateZ(25px) rotateY(1deg) translateY(-8px)';
                        e.currentTarget.style.boxShadow = '0 30px 80px rgba(234,0,0,0.18)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateZ(0) rotateY(3deg)';
                        e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.12)';
                      }}
                    >
                      {/* Red accent corner */}
                      <div
                        className="absolute top-0 left-0 h-24 w-24 opacity-60"
                        style={{
                          background: 'linear-gradient(135deg, rgba(234,0,0,0.08) 0%, transparent 70%)',
                        }}
                      />

                      {/* Icon container */}
                      <div className="mb-6 flex items-center gap-4">
                        <div
                          className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${doc.gradient} shadow-xl`}
                          style={{
                            boxShadow: '0 8px 24px rgba(234,0,0,0.3)',
                            transform: 'translateZ(0)',
                            transition: 'transform 0.2s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.08) translateZ(0)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1) translateZ(0)';
                          }}
                        >
                          <doc.icon className="h-8 w-8 text-white" strokeWidth={2.5} />
                        </div>

                        {/* Title */}
                        <div className="flex-1">
                          <h3
                            className="text-sm font-black tracking-wider text-black uppercase"
                            style={{ fontFamily: 'Geist, sans-serif', letterSpacing: '0.05em' }}
                          >
                            {doc.title}
                          </h3>
                        </div>
                      </div>

                      {/* Badge */}
                      <div className="mb-5">
                        <div
                          className="inline-block rounded-md bg-[#EA0000] px-3 py-1.5 text-xs font-bold tracking-widest text-white uppercase"
                          style={{ fontFamily: 'Geist, sans-serif' }}
                        >
                          {doc.badge}
                        </div>
                      </div>

                      {/* Description */}
                      <p
                        className="text-sm leading-relaxed text-black/70"
                        style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300 }}
                      >
                        {doc.text}
                      </p>

                      {/* Bottom red line */}
                      <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-[#EA0000] via-[#EA0000] to-transparent" />

                      {/* Subtle texture overlay */}
                      <div
                        className="pointer-events-none absolute inset-0 opacity-[0.015]"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                        }}
                      />
                    </div>

                    {/* Paper stack shadow layers */}
                    <div
                      className="absolute inset-0 -z-10 bg-white"
                      style={{
                        transform: 'translateZ(-8px) translateX(-6px) translateY(6px) rotateY(3deg)',
                        border: '1px solid rgba(0,0,0,0.04)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                      }}
                    />
                    <div
                      className="absolute inset-0 -z-20 bg-gray-50"
                      style={{
                        transform: 'translateZ(-16px) translateX(-12px) translateY(12px) rotateY(3deg)',
                        border: '1px solid rgba(0,0,0,0.03)',
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
