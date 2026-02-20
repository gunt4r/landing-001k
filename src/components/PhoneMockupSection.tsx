/* eslint-disable react/no-array-index-key */

/* eslint-disable react-hooks-extra/no-direct-set-state-in-use-effect */
'use client';

import { Ban, CheckCircle, Search, SendHorizontal, Shield } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useMemo, useRef, useState } from 'react';

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

function PhoneMockup({ activeIndex, size = 'desktop' }: { activeIndex: number; size?: 'mobile' | 'desktop' }) {
  const isMobile = size === 'mobile';
  return (
    <div
      className="relative shrink-0"
      style={{ width: isMobile ? 'min(326px, 52vw)' : 'clamp(200px, 26vw, 310px)' }}
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(194,0,0,0.18) 0%, transparent 70%)',
          filter: 'blur(24px)',
          borderRadius: '9999px',
        }}
      />
      <div
        className="relative overflow-hidden bg-black"
        style={{
          borderRadius: isMobile ? 'clamp(16px, 5vw, 32px)' : 'clamp(18px, 4vw, 44px)',
          border: isMobile ? 'clamp(4px, 1vw, 8px) solid black' : 'clamp(5px, 1.2vw, 12px) solid black',
          boxShadow: '0 24px 64px rgba(0,0,0,0.45)',
        }}
      >
        <div
          style={{
            aspectRatio: '9 / 19.5',
            background: 'linear-gradient(160deg, #1a1a1a 0%, #050505 55%, #0e0e0e 100%)',
          }}
        >
          <div className="flex h-full w-full flex-col items-center justify-center p-[9%] text-center">

            <div
              className="mx-auto mb-[5%] flex items-center justify-center rounded-2xl"
              style={{
                width: isMobile ? 'min(52px, 11vw)' : 'clamp(40px, 8vw, 68px)',
                height: isMobile ? 'min(52px, 11vw)' : 'clamp(40px, 8vw, 68px)',
                background: 'linear-gradient(135deg, #c20000, #7a0000)',
                boxShadow: '0 8px 24px rgba(194,0,0,0.45)',
              }}
            >
              <Shield
                className="text-white"
                style={{
                  width: isMobile ? 'min(26px, 5.5vw)' : 'clamp(20px, 4vw, 34px)',
                  height: isMobile ? 'min(26px, 5.5vw)' : 'clamp(20px, 4vw, 34px)',
                }}
                strokeWidth={1.75}
              />
            </div>

            <p
              className="mb-[2%] font-black text-white uppercase"
              style={{
                fontSize: isMobile ? 'min(13px, 2.8vw)' : 'clamp(9px, 2vw, 15px)',
                letterSpacing: '0.15em',
                fontFamily: 'Geist, sans-serif',
              }}
            >
              Чек-лист
            </p>
            <p
              className="text-white/40"
              style={{
                fontSize: isMobile ? 'min(10px, 2vw)' : 'clamp(7px, 1.4vw, 11px)',
                marginBottom: '6%',
                fontFamily: 'Geist, sans-serif',
              }}
            >
              Защита капитала
            </p>

            <div
              className="mb-[7%] w-full"
              style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 'min(8px, 1.6vw)' : 'clamp(4px, 1vw, 10px)' }}
            >
              {items.map((item, i) => {
                const ItemIcon = item.icon;
                const isActive = i === activeIndex;
                return (
                  <div
                    key={i}
                    className="flex items-center text-left"
                    style={{ gap: '8%', opacity: isActive ? 1 : 0.35, transition: 'opacity 0.35s ease' }}
                  >
                    <div
                      className="flex shrink-0 items-center justify-center rounded-sm"
                      style={{
                        width: isMobile ? 'min(16px, 3.2vw)' : 'clamp(12px, 2.5vw, 20px)',
                        height: isMobile ? 'min(16px, 3.2vw)' : 'clamp(12px, 2.5vw, 20px)',
                        minWidth: isMobile ? 'min(16px, 3.2vw)' : 'clamp(12px, 2.5vw, 20px)',
                        background: isActive ? 'rgba(194,0,0,0.35)' : 'rgba(194,0,0,0.15)',
                        border: `1px solid ${isActive ? 'rgba(194,0,0,0.7)' : 'rgba(194,0,0,0.28)'}`,
                        transition: 'background 0.35s ease, border-color 0.35s ease',
                      }}
                    >
                      <ItemIcon
                        className="text-[#c20000]"
                        style={{
                          width: isMobile ? 'min(8px, 1.6vw)' : 'clamp(6px, 1.3vw, 11px)',
                          height: isMobile ? 'min(8px, 1.6vw)' : 'clamp(6px, 1.3vw, 11px)',
                        }}
                        strokeWidth={2.5}
                      />
                    </div>
                    <span
                      className="uppercase"
                      style={{
                        fontFamily: 'Geist, sans-serif',
                        fontSize: isMobile ? 'min(8px, 1.7vw)' : 'clamp(5px, 1.1vw, 9px)',
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.4)',
                        letterSpacing: '0.05em',
                        lineHeight: 1.2,
                        transition: 'color 0.35s ease, font-weight 0.35s ease',
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>
                );
              })}
            </div>

            <a
              href="https://001k.exchange/your_bot"
              className="block w-full rounded-lg text-white transition-opacity duration-300 hover:opacity-70"
              style={{
                background: 'linear-gradient(135deg, #c20000, #8a0000)',
                boxShadow: '0 6px 18px rgba(194,0,0,0.4)',
                fontFamily: 'Geist, sans-serif',
                fontSize: isMobile ? 'min(9px, 1.9vw)' : 'clamp(7px, 1.3vw, 10px)',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: isMobile ? 'min(9px, 1.8vw) min(12px, 2.4vw)' : 'clamp(5px, 1.1vw, 12px) clamp(6px, 1.5vw, 16px)',
                textAlign: 'center',
              }}
            >
              Получить бесплатно
            </a>
          </div>
        </div>

        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl bg-black"
          style={{
            height: isMobile ? 'min(14px, 3vw)' : 'clamp(10px, 2vw, 28px)',
            width: isMobile ? 'min(64px, 13vw)' : 'clamp(40px, 10vw, 144px)',
          }}
        />
      </div>
    </div>
  );
}

function MobileSection({ reduceMotion }: { reduceMotion: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sentinelRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sentinelRef.current.forEach((el, i) => {
      if (!el) {
        return;
      }
      const obs = new IntersectionObserver(
        (entries) => {
          if ((entries as any)[0].isIntersecting) {
            setActiveIndex(i);
          }
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const ActiveIcon = (items as any)[activeIndex].icon;

  return (
    <div className="relative">

      <div
        className="sticky flex flex-row items-center gap-3"
      >

        <div className="min-w-0 flex-1">

          <div
            className="overflow-hidden rounded-xl bg-white"
            style={{
              border: '1px solid rgba(0,0,0,0.08)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.09)',
            }}
          >

            <div className="flex items-stretch">

              <div className="flex flex-1 items-center gap-0 overflow-hidden">

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`icon-${activeIndex}`}
                    className="relative flex shrink-0 items-center justify-center self-stretch overflow-hidden"
                    style={{
                      width: '35px',
                      background: 'linear-gradient(150deg, #c20000 0%, #7d0000 100%)',
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 55%)' }}
                    />
                    <ActiveIcon className="relative z-10 h-7 w-7 text-white" strokeWidth={1.75} />
                  </motion.div>
                </AnimatePresence>

                <div className="flex-1 px-4 py-5 [@media(max-width:400px)]:px-2">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                    >
                      {items[activeIndex] && (
                        <div>
                          <div className="mb-4">
                            <span
                              className=" inline-block rounded-md px-2.5 py-1 font-bold tracking-[0.13em] wrap-break-word text-white uppercase"
                              style={{ background: '#c20000', fontFamily: 'Geist, sans-serif', fontSize: 'clamp(12px, 2vw, 24px)', overflowWrap: 'break-word', wordBreak: 'break-word' }}
                            >
                              {items[activeIndex].badge}
                            </span>
                          </div>
                          <p
                            className="text-base leading-snug text-black/65"
                            style={{ fontFamily: 'Geist, sans-serif', fontWeight: 400 }}
                          >
                            {items[activeIndex].text}
                          </p>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>

        <PhoneMockup activeIndex={activeIndex} size="mobile" />
      </div>

      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {items.map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              sentinelRef.current[i] = el;
            }}
            style={{ height: `${100 / items.length}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function DesktopSection({ reduceMotion }: { isDesktop: boolean; reduceMotion: boolean }) {
  return (
    <div className="flex flex-row items-center gap-14">
      <div className="min-w-0 flex-1 space-y-3">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: !reduceMotion ? -16 : 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: 'easeOut' }}
            >
              <div
                className="group flex items-stretch overflow-hidden rounded-xl bg-white shadow-[0_2px_10px_rgba(0,0,0,0.07)] transition-shadow duration-200 hover:shadow-[0_6px_24px_rgba(194,0,0,0.11)]"
                style={{ border: '1px solid rgba(0,0,0,0.07)' }}
              >
                <div
                  className="relative flex w-[68px] shrink-0 items-center justify-center overflow-hidden lg:w-[76px]"
                  style={{ background: 'linear-gradient(150deg, #c20000 0%, #7d0000 100%)' }}
                >
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 55%)' }}
                  />
                  <Icon className="relative z-10 h-7 w-7 text-white drop-shadow-sm" strokeWidth={1.75} />
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-center px-5 py-4">
                  <div className="mb-1.5">
                    <span
                      className="inline-block rounded-sm px-2.5 py-[3px] text-[10px] font-extrabold tracking-[0.13em] text-white uppercase"
                      style={{ background: '#c20000', fontFamily: 'Geist, sans-serif' }}
                    >
                      {item.badge}
                    </span>
                  </div>
                  <p
                    className="text-sm leading-snug text-black/60"
                    style={{ fontFamily: 'Geist, sans-serif', fontWeight: 400 }}
                  >
                    {item.text}
                  </p>
                </div>
                <div
                  className="w-[3px] shrink-0 self-stretch opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  style={{ background: 'linear-gradient(180deg, #c20000, transparent)' }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
      >
        <PhoneMockup activeIndex={items.length - 1} size="desktop" />
      </motion.div>
    </div>
  );
}

export function PhoneMockupSection() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1024px)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateDesktop = () => setIsDesktop(desktopQuery.matches);
    const updateMotion = () => setReduceMotion(motionQuery.matches);

    updateDesktop();
    updateMotion();

    desktopQuery.addEventListener('change', updateDesktop);
    motionQuery.addEventListener('change', updateMotion);

    return () => {
      desktopQuery.removeEventListener('change', updateDesktop);
      motionQuery.removeEventListener('change', updateMotion);
    };
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

      <div aria-hidden className="pointer-events-none absolute inset-0 z-0" style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(0,0,0,0.5) 60px, rgba(0,0,0,0.5) 61px)`,
          }}
        />
        <motion.div
          className="absolute top-[20%] left-[15%] h-96 w-96"
          style={{ background: 'radial-gradient(circle, rgba(194,0,0,0.8) 0%, transparent 70%)', filter: 'blur(80px)' }}
          animate={!reduceMotion ? { opacity: [0.3, 0.65, 0.3] } : { opacity: 0.4 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        {floatingParticles.map(p => (
          <motion.div
            key={p.id}
            className="absolute block rounded-full"
            style={{
              background: 'rgba(194,0,0,0.8)',
              width: `10px`,
              height: `10px`,
              top: `${p.top}%`,
              left: `${p.left}%`,
              willChange: 'transform, opacity',
              zIndex: 5,
              boxShadow: '0 6px 20px rgba(194,0,0,0.24)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
            initial={{ opacity: 0.6 }}
            animate={{ y: [0, -p.yOffset, 0], x: [0, p.xOffset, 0], opacity: [0, 0.5, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6">

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

        <div className="lg:hidden">
          <MobileSection reduceMotion={reduceMotion} />
        </div>

        <div className="relative mx-auto hidden max-w-6xl lg:block">
          <DesktopSection isDesktop={isDesktop} reduceMotion={reduceMotion} />
        </div>

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
            style={{ background: '#c20000', boxShadow: '0 8px 40px rgba(194,0,0,0.38)', fontFamily: 'Geist, sans-serif' }}
          >
            <span className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{ background: 'linear-gradient(105deg, transparent 38%, rgba(255,255,255,0.8) 50%, transparent 62%)' }} />
            ПОЛУЧИТЬ ЧЕК-ЛИСТ БЕСПЛАТНО
          </a>
        </motion.div>

      </div>
    </section>
  );
}
