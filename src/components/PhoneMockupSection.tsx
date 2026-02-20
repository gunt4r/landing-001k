/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks-extra/no-direct-set-state-in-use-effect */
'use client';

import { Ban, CheckCircle, Search, SendHorizontal, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';

function rand(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const items = [
  {
    icon: Shield,
    badge: 'СХЕМЫ МОШЕННИЧЕСТВА',
    text: 'Разбор схем: которые в 2025 году лишили пользователей миллиардов долларов',
  },
  {
    icon: Search,
    badge: 'РАЗБОР КЕЙСОВ',
    text: 'Как пользователи теряли доступ к активам, и пошаговый план, как этого избежать в 2026 году',
  },
  {
    icon: Ban,
    badge: 'ЗАЩИТА ОТ БЛОКИРОВОК',
    text: 'Разбор методов: которые исключают риск блокировок и чарджбэка',
  },
  {
    icon: SendHorizontal,
    badge: 'AML-АУДИТ',
    text: 'Как самостоятельно проверять «чистоту» кошельков контрагентов перед отправкой средств',
  },
  {
    icon: CheckCircle,
    badge: 'ЧЕК-ЛИСТ',
    text: 'Как распознать мошенника ещё на этапе обсуждения условий сделки',
  },
];

export function PhoneMockupSection() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    try {
      setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
      setIsDesktop(window.matchMedia('(min-width: 1024px)').matches);
    } catch {
      // keep defaults
    }
  }, []);

  const floatingParticles = useMemo(() => {
    if (reduceMotion || !isDesktop) {
      return [];
    }
    return Array.from({ length: 3 }, (_, i) => {
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
  }, [reduceMotion, isDesktop]);

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">

      {/* ─── BACKGROUND — GPU-composited layer ─── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
      >
        {/* Static diagonal texture */}
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

        {/* Ambient glow — always rendered, loops only when motion ok */}
        <motion.div
          className="absolute top-[20%] left-[15%] h-96 w-96"
          style={{
            background: 'radial-gradient(circle, rgba(194,0,0,0.07) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={!reduceMotion ? { opacity: [0.3, 0.65, 0.3] } : { opacity: 0.4 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Particles — desktop + motion ok only */}
        {floatingParticles.map(p => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              background: 'rgba(194,0,0,0.22)',
              width: `${p.size}px`,
              height: `${p.size}px`,
              top: `${p.top}%`,
              left: `${p.left}%`,
              willChange: 'transform, opacity',
            }}
            initial={{ opacity: 0 }}
            animate={{ y: [0, p.yOffset, 0], x: [0, p.xOffset, 0], opacity: [0, 0.5, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6">

        {/* ─── HEADING ─── */}
        <div className="mb-10 text-center md:mb-16">
          <motion.h2
            className="mt-2 text-2xl leading-tight font-bold text-black sm:text-3xl md:text-4xl lg:text-5xl"
            style={{ fontFamily: 'Geist, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            Что вы получите для
            {' '}
            <span className="relative inline-block">
              <span className="relative z-10">защиты капитала</span>
              <motion.span
                className="absolute bottom-0 left-0 h-3 w-full md:h-4"
                style={{ background: 'rgba(194,0,0,0.15)', transformOrigin: 'left' }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.35, ease: 'easeOut' }}
              />
            </span>
            ?
          </motion.h2>
        </div>

        {/* ─── MAIN LAYOUT — always flex-row ─── */}
        <div className="relative mx-auto max-w-6xl">
          <div className="flex flex-row items-center gap-3 sm:gap-6 md:gap-10 lg:gap-14">

            {/* LEFT — Cards */}
            <div className="min-w-0 flex-1 space-y-2 sm:space-y-3">
              {items.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    /* Always fade in. Slide only on desktop where GPU can handle it cleanly */
                    initial={{ opacity: 0, x: isDesktop && !reduceMotion ? -16 : 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.45, delay: i * 0.07, ease: 'easeOut' }}
                  >
                    <div
                      className="group flex items-stretch overflow-hidden rounded-lg bg-white shadow-[0_2px_10px_rgba(0,0,0,0.07)] transition-shadow duration-200 hover:shadow-[0_6px_24px_rgba(194,0,0,0.11)] sm:rounded-xl"
                      style={{ border: '1px solid rgba(0,0,0,0.07)' }}
                    >
                      {/* Icon block */}
                      <div
                        className="relative flex w-[44px] flex-shrink-0 items-center justify-center overflow-hidden sm:w-[58px] md:w-[68px] lg:w-[76px]"
                        style={{ background: 'linear-gradient(150deg, #c20000 0%, #7d0000 100%)' }}
                      >
                        <div
                          className="pointer-events-none absolute inset-0"
                          style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 55%)' }}
                        />
                        <Icon
                          className="relative z-10 text-white drop-shadow-sm"
                          style={{ width: 'clamp(14px, 3vw, 26px)', height: 'clamp(14px, 3vw, 26px)' }}
                          strokeWidth={1.75}
                        />
                      </div>

                      {/* Content */}
                      <div className="flex min-w-0 flex-1 flex-col justify-center px-2.5 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-4">
                        <div className="mb-1">
                          <span
                            className="inline-block rounded-sm px-1.5 py-[2px] text-[8px] font-extrabold tracking-[0.1em] text-white uppercase sm:px-2.5 sm:py-[3px] sm:text-[9px] sm:tracking-[0.13em] md:text-[10px]"
                            style={{ background: '#c20000', fontFamily: 'Geist, sans-serif' }}
                          >
                            {item.badge}
                          </span>
                        </div>
                        <p
                          className="text-[10px] leading-snug text-black/60 sm:text-xs md:text-sm"
                          style={{ fontFamily: 'Geist, sans-serif', fontWeight: 400 }}
                        >
                          {item.text}
                        </p>
                      </div>

                      {/* Hover right accent — pure CSS, zero JS */}
                      <div
                        className="w-[2px] flex-shrink-0 self-stretch opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:w-[3px]"
                        style={{ background: 'linear-gradient(180deg, #c20000, transparent)' }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* RIGHT — Phone — always visible */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
            >
              <div
                className="relative"
                style={{ width: 'clamp(150px, 26vw, 310px)' }}
              >
                {/* Phone glow — opacity only, always GPU layer due to filter */}
                {!reduceMotion && (
                  <motion.div
                    className="pointer-events-none absolute inset-0 -z-10 rounded-[44px]"
                    style={{
                      background: 'radial-gradient(circle, rgba(194,0,0,0.15) 0%, transparent 70%)',
                      filter: 'blur(30px)',
                    }}
                    animate={{ opacity: [0.3, 0.65, 0.3] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  />
                )}

                {/* Frame */}
                <div
                  className="relative overflow-hidden bg-black"
                  style={{
                    borderRadius: 'clamp(18px, 4vw, 44px)',
                    border: 'clamp(5px, 1.2vw, 12px) solid black',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.38)',
                  }}
                >
                  <div
                    className="relative overflow-hidden"
                    style={{
                      aspectRatio: '9 / 19.5',
                      background: 'linear-gradient(135deg, #1a1a1a 0%, #050505 60%, #111 100%)',
                    }}
                  >
                    <div className="flex h-full w-full flex-col items-center justify-center p-[8%] text-center">

                      {/* App icon */}
                      <div className="mb-[5%]">
                        <div
                          className="mx-auto flex items-center justify-center rounded-xl"
                          style={{
                            width: 'clamp(36px, 8vw, 68px)',
                            height: 'clamp(36px, 8vw, 68px)',
                            background: 'linear-gradient(135deg, #c20000, #7a0000)',
                            boxShadow: '0 8px 24px rgba(194,0,0,0.4)',
                          }}
                        >
                          <Shield
                            className="text-white"
                            style={{ width: 'clamp(18px, 4vw, 34px)', height: 'clamp(18px, 4vw, 34px)' }}
                            strokeWidth={1.75}
                          />
                        </div>
                      </div>

                      <h3
                        className="mb-[2%] font-black text-white uppercase"
                        style={{
                          fontFamily: 'Geist, sans-serif',
                          fontSize: 'clamp(8px, 2vw, 15px)',
                          letterSpacing: '0.15em',
                        }}
                      >
                        Чек-лист
                      </h3>
                      <p
                        className="text-white/45"
                        style={{
                          fontFamily: 'Geist, sans-serif',
                          fontSize: 'clamp(6px, 1.4vw, 11px)',
                          marginBottom: '5%',
                        }}
                      >
                        Защита капитала
                      </p>

                      {/* Checklist */}
                      <div
                        className="mb-[6%] w-full"
                        style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(4px, 1vw, 10px)' }}
                      >
                        {items.map((item, i) => {
                          const ItemIcon = item.icon;
                          return (
                            <div key={i} className="flex items-center gap-[6%] text-left">
                              <div
                                className="flex flex-shrink-0 items-center justify-center rounded-sm"
                                style={{
                                  width: 'clamp(12px, 2.5vw, 20px)',
                                  height: 'clamp(12px, 2.5vw, 20px)',
                                  minWidth: 'clamp(12px, 2.5vw, 20px)',
                                  background: 'rgba(194,0,0,0.18)',
                                  border: '1px solid rgba(194,0,0,0.32)',
                                }}
                              >
                                <ItemIcon
                                  className="text-[#c20000]"
                                  style={{ width: 'clamp(6px, 1.4vw, 11px)', height: 'clamp(6px, 1.4vw, 11px)' }}
                                  strokeWidth={2.5}
                                />
                              </div>
                              <span
                                className="text-white/65 uppercase"
                                style={{
                                  fontFamily: 'Geist, sans-serif',
                                  fontSize: 'clamp(5px, 1.1vw, 9px)',
                                  fontWeight: 500,
                                  letterSpacing: '0.06em',
                                  lineHeight: 1.2,
                                }}
                              >
                                {item.badge}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      {/* CTA */}
                      <a
                        href="https://001k.exchange/your_bot"
                        className="block w-full rounded-lg text-white transition-opacity duration-300 hover:opacity-70"
                        style={{
                          background: 'linear-gradient(135deg, #c20000, #8a0000)',
                          boxShadow: '0 6px 18px rgba(194,0,0,0.38)',
                          fontFamily: 'Geist, sans-serif',
                          fontSize: 'clamp(6px, 1.3vw, 10px)',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          padding: 'clamp(5px, 1.1vw, 12px) clamp(6px, 1.5vw, 16px)',
                          textAlign: 'center',
                        }}
                      >
                        Получить бесплатно
                      </a>
                    </div>
                  </div>

                  {/* Notch */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl bg-black"
                    style={{
                      height: 'clamp(10px, 2vw, 28px)',
                      width: 'clamp(40px, 10vw, 144px)',
                    }}
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* ─── BOTTOM CTA ─── */}
        <motion.div
          className="mt-10 text-center md:mt-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <a
            href="https://001k.exchange/your_bot"
            className="relative inline-block w-full max-w-2xl overflow-hidden rounded-xl px-6 py-4 text-sm font-extrabold tracking-[0.14em] text-white uppercase transition-all duration-200 hover:opacity-90 hover:shadow-2xl active:scale-[0.99] sm:px-8 sm:py-5 sm:text-base md:text-lg md:tracking-[0.16em]"
            style={{
              background: '#c20000',
              boxShadow: '0 8px 40px rgba(194,0,0,0.38)',
              fontFamily: 'Geist, sans-serif',
            }}
          >
            <span
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{ background: 'linear-gradient(105deg, transparent 38%, rgba(255,255,255,0.8) 50%, transparent 62%)' }}
            />
            ПОЛУЧИТЬ ЧЕК-ЛИСТ БЕСПЛАТНО
          </a>
        </motion.div>

      </div>
    </section>
  );
}
