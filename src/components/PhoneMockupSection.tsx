/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks-extra/no-direct-set-state-in-use-effect */
/* eslint-disable react/no-array-index-key */
'use client';

import { Ban, CheckCircle, Search, SendHorizontal, Shield } from 'lucide-react';
import { AnimatePresence, easeInOut, easeOut, motion } from 'motion/react';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

const useIsomorphicLayoutEffect
  = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

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
] as const;

const CTA_HREF = 'https://001k.exchange/your_bot';

// ── Хуки ─────────────────────────────────────────────────────────────────────

function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

function useReduceMotion() {
  const [reduce, setReduce] = useState(false);
  useIsomorphicLayoutEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduce(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduce(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return reduce;
}

// ── PhoneMockup ───────────────────────────────────────────────────────────────

type PhoneMockupProps = {
  activeIndex: number;
  size?: 'mobile' | 'desktop';
};

function PhoneMockup({ activeIndex, size = 'desktop' }: PhoneMockupProps) {
  const isMobile = size === 'mobile';

  return (
    <div
      className={`relative shrink-0 ${isMobile ? '[@media(min-width:450px)]:w-[min(140px,38vw)]!' : ''}`}
      style={{ width: isMobile ? 'min(326px, 47vw)' : 'clamp(200px, 26vw, 310px)' }}
    >
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(194,0,0,0.18) 0%, transparent 70%)',
          filter: 'blur(24px)',
          borderRadius: '9999px',
        }}
      />

      {/* Shell — GPU-слой: устраняет перекраску при прокрутке */}
      <div
        className="relative overflow-hidden bg-black"
        style={{
          borderRadius: isMobile ? 'clamp(16px,5vw,32px)' : 'clamp(18px,4vw,44px)',
          border: isMobile ? 'clamp(4px,1vw,8px) solid black' : 'clamp(5px,1.2vw,12px) solid black',
          boxShadow: '0 24px 64px rgba(0,0,0,0.45)',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      >
        <div
          style={{
            aspectRatio: '9 / 19.5',
            background: 'linear-gradient(160deg,#1a1a1a 0%,#050505 55%,#0e0e0e 100%)',
          }}
        >
          <div className="flex h-full w-full flex-col items-center justify-center p-[9%] text-center">
            <div
              className="mx-auto mb-[5%] flex items-center justify-center rounded-2xl"
              style={{
                width: isMobile ? 'min(52px,11vw)' : 'clamp(40px,8vw,68px)',
                height: isMobile ? 'min(52px,11vw)' : 'clamp(40px,8vw,68px)',
                background: 'linear-gradient(135deg,#c20000,#7a0000)',
                boxShadow: '0 8px 24px rgba(194,0,0,0.45)',
              }}
            >
              <Shield
                className="text-white"
                style={{
                  width: isMobile ? 'min(26px,5.5vw)' : 'clamp(20px,4vw,34px)',
                  height: isMobile ? 'min(26px,5.5vw)' : 'clamp(20px,4vw,34px)',
                }}
                strokeWidth={1.75}
              />
            </div>

            <p
              className="mb-[2%] font-black text-white uppercase"
              style={{
                fontSize: isMobile ? 'min(13px,2.8vw)' : 'clamp(9px,2vw,15px)',
                letterSpacing: '0.15em',
                fontFamily: 'Geist,sans-serif',
              }}
            >
              Чек-лист
            </p>
            <p
              className="text-white/40"
              style={{
                fontSize: isMobile ? 'min(10px,2vw)' : 'clamp(7px,1.4vw,11px)',
                marginBottom: '6%',
                fontFamily: 'Geist,sans-serif',
              }}
            >
              Защита капитала
            </p>

            <div
              className="mb-[7%] w-full"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: isMobile ? 'min(8px,1.6vw)' : 'clamp(4px,1vw,10px)',
              }}
            >
              {items.map((item, i) => {
                const ItemIcon = item.icon;
                const isActive = i === activeIndex;
                return (
                  <div
                    key={i}
                    className="flex items-center text-left"
                    style={{
                      gap: '8%',
                      // Чистый CSS transition — ноль JS overhead
                      opacity: isActive ? 1 : 0.35,
                      transition: 'opacity 0.3s ease',
                    }}
                  >
                    <div
                      className="flex shrink-0 items-center justify-center rounded-sm"
                      style={{
                        width: isMobile ? 'min(16px,3.2vw)' : 'clamp(12px,2.5vw,20px)',
                        height: isMobile ? 'min(16px,3.2vw)' : 'clamp(12px,2.5vw,20px)',
                        minWidth: isMobile ? 'min(16px,3.2vw)' : 'clamp(12px,2.5vw,20px)',
                        background: isActive ? 'rgba(194,0,0,0.35)' : 'rgba(194,0,0,0.15)',
                        border: `1px solid ${isActive ? 'rgba(194,0,0,0.7)' : 'rgba(194,0,0,0.28)'}`,
                        transition: 'background 0.3s ease, border-color 0.3s ease',
                      }}
                    >
                      <ItemIcon
                        className="text-[#c20000]"
                        style={{
                          width: isMobile ? 'min(8px,1.6vw)' : 'clamp(6px,1.3vw,11px)',
                          height: isMobile ? 'min(8px,1.6vw)' : 'clamp(6px,1.3vw,11px)',
                        }}
                        strokeWidth={2.5}
                      />
                    </div>
                    <span
                      className="uppercase"
                      style={{
                        fontFamily: 'Geist,sans-serif',
                        fontSize: isMobile ? 'min(8px,1.7vw)' : 'clamp(5px,1.1vw,9px)',
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.4)',
                        letterSpacing: '0.05em',
                        lineHeight: 1.2,
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>
                );
              })}
            </div>

            <a
              href={CTA_HREF}
              className="block w-full rounded-lg text-white transition-opacity duration-300 hover:opacity-70"
              style={{
                background: 'linear-gradient(135deg,#c20000,#8a0000)',
                boxShadow: '0 6px 18px rgba(194,0,0,0.4)',
                fontFamily: 'Geist,sans-serif',
                fontSize: isMobile ? 'min(9px,1.9vw)' : 'clamp(7px,1.3vw,10px)',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: isMobile
                  ? 'min(9px,1.8vw) min(12px,2.4vw)'
                  : 'clamp(5px,1.1vw,12px) clamp(6px,1.5vw,16px)',
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
            height: isMobile ? 'min(14px,3vw)' : 'clamp(10px,2vw,28px)',
            width: isMobile ? 'min(64px,13vw)' : 'clamp(40px,10vw,144px)',
          }}
        />
      </div>
    </div>
  );
}

// ── MobileSection ─────────────────────────────────────────────────────────────

const PIN_COUNT = items.length;

function MobileSection({ reduceMotion }: { reduceMotion: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sentinelRef = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sentinelRef.current.forEach((el, i) => {
      if (!el) {
        return;
      }
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            setActiveIndex(i);
          }
        },
        { rootMargin: '-50% 0px -50% 0px', threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!containerRef.current) {
        return;
      }
      const { top, bottom } = containerRef.current.getBoundingClientRect();
      if (top > window.innerHeight || bottom < 0) {
        return;
      }
      const dir
        = e.key === 'ArrowDown' || e.key === 'PageDown'
          ? 1
          : e.key === 'ArrowUp' || e.key === 'PageUp'
            ? -1
            : 0;
      if (!dir) {
        return;
      }
      e.preventDefault();
      window.scrollBy({ top: dir * window.innerHeight, behavior: reduceMotion ? 'auto' : 'smooth' });
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [reduceMotion]);

  const ActiveIcon = items[activeIndex]!.icon;
  const dur = reduceMotion ? 0 : 0.22;

  return (
    <div
      ref={containerRef}
      style={{ height: `${PIN_COUNT * 100}vh`, position: 'relative' }}
    >
      {/* Invisible sentinels */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {Array.from({ length: PIN_COUNT }, (_, i) => (
          <div
            key={i}
            ref={(el) => {
              sentinelRef.current[i] = el;
            }}
            style={{ height: `${100 / PIN_COUNT}%` }}
          />
        ))}
      </div>

      <div className="sticky top-0 h-screen overflow-hidden">
        {/*
          Заменяем motion animate paddingTop → CSS transition на paddingTop.
          motion animate на layout-свойствах вызывает reflow на каждый кадр.
          CSS transition — только composite-слой, намного дешевле.
        */}
        <div
          className="flex h-full flex-col px-4 py-6 sm:px-6"
          style={{
            paddingTop: activeIndex > 0 ? '35%' : '20%',
            transition: reduceMotion ? 'none' : 'padding-top 0.38s cubic-bezier(0.4,0,0.2,1)',
          }}
        >
          {/* Heading */}
          <div className="shrink-0 pb-3 text-center">
            <p
              className="text-3xl leading-tight font-bold text-black"
              style={{ fontFamily: 'Geist,sans-serif' }}
            >
              Что вы получите для
              {' '}
              <span className="inline-block rounded-sm px-1" style={{ color: '#c20000' }}>
                защиты капитала
              </span>
              ?
            </p>
          </div>

          {/* Card + Phone */}
          <div className="flex min-h-0 flex-1 flex-row items-center gap-3 [@media(max-width:400px)]:gap-2">
            <div className="flex min-w-0 flex-1 items-center self-stretch">
              <div className="w-full">
                {/* initial={false} → нет flash при первом mount */}
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: reduceMotion ? 0 : -10 }}
                    transition={{ duration: dur, ease: 'easeOut' }}
                    className="relative rounded-2xl bg-white"
                    style={{
                      border: '1px solid rgba(0,0,0,0.07)',
                      boxShadow: '0 2px 0 rgba(0,0,0,0.04),0 12px 40px rgba(0,0,0,0.08)',
                      willChange: 'transform, opacity',
                    }}
                    aria-live="polite"
                  >
                    <div
                      className="absolute top-[6px] left-0 h-full w-[3px] rounded-tl-[171px]"
                      style={{ background: 'linear-gradient(180deg,#c20000 0%,transparent 100%)' }}
                    />

                    <div className="py-5 pr-2 pl-3">
                      <div className="mb-3 flex items-center gap-1">
                        <AnimatePresence mode="wait" initial={false}>
                          <motion.div
                            key={`icon-${activeIndex}`}
                            className="flex h-8 w-8 shrink-0 items-center justify-center"
                            initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.7 }}
                            transition={{ duration: reduceMotion ? 0 : 0.18, ease: 'backOut' }}
                          >
                            <ActiveIcon style={{ width: 12, height: 12, color: '#c20000' }} strokeWidth={2.25} />
                          </motion.div>
                        </AnimatePresence>

                        <AnimatePresence mode="wait" initial={false}>
                          <motion.span
                            key={`badge-${activeIndex}`}
                            className="inline-block min-w-[120px] px-2 py-1.5 font-extrabold tracking-[0.12em] uppercase"
                            style={{ color: '#c20000', fontFamily: 'Geist,sans-serif', fontSize: 'clamp(9px,1.8vw,11px)' }}
                            initial={{ opacity: 0, x: reduceMotion ? 0 : -6 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: reduceMotion ? 0 : 0.16 }}
                          >
                            {items[activeIndex]!.badge}
                          </motion.span>
                        </AnimatePresence>
                      </div>

                      <div
                        className="mb-3 h-0.5"
                        style={{ background: 'linear-gradient(90deg,rgba(194,0,0,0.12) 0%,rgba(0,0,0,0.05) 60%,transparent 100%)' }}
                      />

                      <p
                        className="leading-snug text-black/60"
                        style={{ fontFamily: 'Geist,sans-serif', fontWeight: 400, fontSize: 'clamp(12px,3vw,14px)' }}
                      >
                        {items[activeIndex]!.text}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <PhoneMockup activeIndex={activeIndex} size="mobile" />
          </div>

          {/* CTA */}
          <div className="shrink-0 pt-3 pb-1">
            <a
              href={CTA_HREF}
              className="relative mx-auto block max-w-2xl rounded-xl px-6 py-4 text-center text-sm font-extrabold tracking-[0.14em] text-white uppercase transition-opacity duration-200 hover:opacity-90 active:scale-[0.99]"
              style={{
                background: '#c20000',
                boxShadow: '0 8px 40px rgba(194,0,0,0.38)',
                fontFamily: 'Geist,sans-serif',
              }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.08]"
                style={{ background: 'linear-gradient(105deg,transparent 38%,rgba(255,255,255,0.8) 50%,transparent 62%)' }}
              />
              ПОЛУЧИТЬ ЧЕК-ЛИСТ БЕСПЛАТНО
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── DesktopSection ────────────────────────────────────────────────────────────

function DesktopSection({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="flex flex-row items-center gap-14">
      <div className="min-w-0 flex-1 space-y-3">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: reduceMotion ? 0 : -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.42, delay: i * 0.07, ease: easeOut }}
              style={{ willChange: 'transform, opacity' }}
            >
              <div
                className="group flex items-stretch rounded-xl bg-white shadow-[0_2px_10px_rgba(0,0,0,0.07)] transition-shadow duration-200 hover:shadow-[0_6px_24px_rgba(194,0,0,0.11)]"
                style={{ border: '1px solid rgba(0,0,0,0.07)' }}
              >
                <div
                  className="relative flex w-[68px] shrink-0 items-center justify-center lg:w-[76px]"
                  style={{ background: 'linear-gradient(150deg,#c20000 0%,#7d0000 100%)' }}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{ background: 'linear-gradient(135deg,rgba(255,255,255,0.18) 0%,transparent 55%)' }}
                  />
                  <Icon className="relative z-10 h-7 w-7 text-white drop-shadow-sm" strokeWidth={1.75} />
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-center px-5 py-4">
                  <div className="mb-1.5">
                    <span
                      className="inline-block rounded-sm px-2.5 py-[3px] text-[10px] font-extrabold tracking-[0.13em] text-white uppercase"
                      style={{ background: '#c20000', fontFamily: 'Geist,sans-serif' }}
                    >
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-sm leading-snug text-black/60" style={{ fontFamily: 'Geist,sans-serif', fontWeight: 400 }}>
                    {item.text}
                  </p>
                </div>
                <div
                  className="w-[3px] shrink-0 self-stretch rounded-tl-[26px] rounded-tr-[102px] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  style={{ background: 'linear-gradient(180deg,#c20000,transparent)' }}
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
        transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
        style={{ willChange: 'transform, opacity' }}
      >
        <PhoneMockup activeIndex={items.length - 1} size="desktop" />
      </motion.div>
    </div>
  );
}

// ── Particles — только после mount, только на клиенте ────────────────────────

function Particles({ reduceMotion }: { reduceMotion: boolean }) {
  const particles = useMemo(() => {
    if (reduceMotion) {
      return [];
    }
    return Array.from({ length: 3 }, (_, i) => {
      const r1 = rand(i * 3 + 1);
      const r2 = rand(i * 3 + 2);
      const r3 = rand(i * 3 + 3);
      return {
        id: i,
        top: 20 + r1 * 60,
        left: 20 + r2 * 60,
        duration: 18 + r3 * 8,
        delay: i * 2.5,
        yOffset: 60 + r3 * 40,
        xOffset: (r2 - 0.5) * 40,
      };
    });
  }, [reduceMotion]);

  return (
    <>
      <motion.div
        className="absolute top-[20%] left-[15%] h-96 w-96"
        style={{
          background: 'radial-gradient(circle,rgba(194,0,0,0.8) 0%,transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={reduceMotion ? { opacity: 0.4 } : { opacity: [0.3, 0.65, 0.3] }}
        transition={{ duration: 20, repeat: Infinity, ease: easeInOut }}
      />
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            background: 'rgba(194,0,0,0.8)',
            width: 10,
            height: 10,
            top: `${p.top}%`,
            left: `${p.left}%`,
            zIndex: 5,
            boxShadow: '0 6px 20px rgba(194,0,0,0.24)',
            border: '1px solid rgba(255,255,255,0.06)',
            willChange: 'transform, opacity',
          }}
          initial={{ opacity: 0 }}
          animate={{ y: [0, p.yOffset, 0], x: [0, p.xOffset, 0], opacity: [0, 0.5, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: easeInOut, delay: p.delay }}
        />
      ))}
    </>
  );
}

// ── Root ──────────────────────────────────────────────────────────────────────

export function PhoneMockupSection() {
  const reduceMotion = useReduceMotion();
  const mounted = useMounted();

  return (
    <section className="relative pb-16 md:py-24">
      {/* Decorative background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
      >
        {/* Статичный паттерн — рендерится при SSR, нет flash */}
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg,transparent,transparent 60px,rgba(0,0,0,0.5) 60px,rgba(0,0,0,0.5) 61px)' }}
        />
        {/*
          Анимированные элементы строго после mount.
          До mount — ничего нет → SSR и первый клиентский render идентичны → нет гидрационного flash.
        */}
        {mounted && <Particles reduceMotion={reduceMotion} />}
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6">

        {/* Заголовок — только десктоп */}
        <div className="hidden text-center lg:block">
          <motion.h2
            className="mt-2 text-4xl leading-tight font-bold text-black lg:text-5xl"
            style={{ fontFamily: 'Geist,sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            Что вы получите для
            {' '}
            <span className="relative inline-block">
              <span className="relative z-10">защиты капитала</span>
              <motion.span
                className="absolute bottom-0 left-0 h-3 w-full lg:h-4"
                style={{ background: 'rgba(194,0,0,0.15)', transformOrigin: 'left' }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35, ease: easeOut }}
              />
            </span>
            ?
          </motion.h2>
        </div>

        {/* Мобайл */}
        <div className="lg:hidden">
          <MobileSection reduceMotion={reduceMotion} />
        </div>

        {/* Десктоп */}
        <div className="relative mx-auto mt-10 hidden max-w-6xl lg:block">
          <DesktopSection reduceMotion={reduceMotion} />
        </div>

        {/* CTA — только десктоп */}
        <motion.div
          className="mt-14 hidden text-center lg:block"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.45, ease: easeOut }}
        >
          <a
            href={CTA_HREF}
            className="relative inline-block w-full max-w-2xl rounded-xl px-8 py-5 text-base font-extrabold tracking-[0.14em] text-white uppercase transition-opacity duration-200 hover:opacity-90 active:scale-[0.99] lg:text-lg lg:tracking-[0.16em]"
            style={{
              background: '#c20000',
              boxShadow: '0 8px 40px rgba(194,0,0,0.38)',
              fontFamily: 'Geist,sans-serif',
            }}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{ background: 'linear-gradient(105deg,transparent 38%,rgba(255,255,255,0.8) 50%,transparent 62%)' }}
            />
            ПОЛУЧИТЬ ЧЕК-ЛИСТ БЕСПЛАТНО
          </a>
        </motion.div>

      </div>
    </section>
  );
}
