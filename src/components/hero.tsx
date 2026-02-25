/* eslint-disable react-hooks-extra/no-direct-set-state-in-use-effect */
'use client';

import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function AvatarCircle({ char, bg }: { char?: any; bg: string }) {
  return (
    <div
      className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/20 text-[11px] font-bold text-white"
      style={{
        background: bg,
        boxShadow: '0 0 0 1.5px rgba(255,255,255,0.08)',
        fontFamily: 'Geist, sans-serif',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      {char}
    </div>
  );
}

export function HeroSection() {
  const [isReady, setIsReady] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);

    check();
    window.addEventListener('resize', check);

    return () => window.removeEventListener('resize', check);
  }, []);
  useEffect(() => {
    let r2: number;
    const r1 = requestAnimationFrame(() => {
      r2 = requestAnimationFrame(() => setIsReady(true));
    });
    return () => {
      cancelAnimationFrame(r1);
      cancelAnimationFrame(r2);
    };
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.11,
        delayChildren: 0.18,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease },
    },
  };

  return (
    <section
      className={`relative flex min-h-screen ${isMobile ? 'pt-[35%]' : 'items-center'} overflow-hidden bg-black`}
    >
      <div
        className="absolute inset-0"
        style={{
          transform: 'translate3d(0,0,0)',
          willChange: 'transform',
        }}
      >
        <picture>
          <source srcSet="/banner-mobile.png" media="(max-width: 767px)" />
          <Image
            src="/banner.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </picture>
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(100deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 46%, transparent 100%)',
          }}
        />

        {!prefersReducedMotion && (
          <motion.div
            aria-hidden
            className="absolute -top-20 -left-20 h-[420px] w-[420px] rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(210,0,0,0.15) 0%, transparent 70%)',
              filter: 'blur(60px)',
              willChange: 'opacity',
              transform: 'translate3d(0,0,0)',
            }}
            animate={{ opacity: [0.45, 0.85, 0.45] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
      </div>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full px-6 md:px-14 lg:px-20 xl:px-28">
        {isMobile && (
          <motion.div
            variants={itemVariant}
            className="mb-6 flex items-center gap-2.5"
          >
            <div className="flex items-center">
              <div style={{ marginRight: '-7px', zIndex: 2, position: 'relative' }}>
                <AvatarCircle
                  bg="url(/client.png) center/contain no-repeat"
                />
              </div>
              <div style={{ zIndex: 1, position: 'relative' }}>
                <AvatarCircle
                  char={<Image src="/shield.svg" alt="trust" className="fill-white text-white" width="15" height="15" />}
                  bg="#c20000"
                />
              </div>
            </div>
            <span
              className="text-base tracking-wide text-white/90"
              style={{
                fontFamily: 'Geist, sans-serif',
                fontWeight: 400,
                WebkitFontSmoothing: 'antialiased',
              }}
            >
              Разбор от Сереги 001к
            </span>
          </motion.div>
        )}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isReady ? 'show' : 'hidden'}
          className="max-w-[600px] pb-20 md:pb-0"
          style={{
            transform: 'translate3d(0,0,0)',
            willChange: 'opacity',
          }}
        >
          {/* Headline */}
          <motion.h1
            variants={itemVariant}
            className="mb-7 text-white"
            style={{
              fontFamily: 'Geist, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(2.5rem, 5vw, 4.1rem)',
              lineHeight: 1.06,
              letterSpacing: '-0.025em',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              // Уменьшили тень текста, так как фон стал светлее
              textShadow: '0 2px 15px rgba(0,0,0,0.5)',
            }}
          >
            Как защитить себя
            <br />
            от скама и грязных
            <br />
            денег при обмене крипты.
          </motion.h1>

          {!isMobile && (
            <motion.div
              variants={itemVariant}
              className="mb-12 flex items-center gap-2.5"
            >
              <div className="flex items-center">
                <div style={{ marginRight: '-7px', zIndex: 2, position: 'relative' }}>
                  <AvatarCircle
                    bg="url(/client.png) center/contain no-repeat"
                  />
                </div>
                <div style={{ zIndex: 1, position: 'relative' }}>
                  <AvatarCircle
                    char={<Image src="/shield.svg" alt="trust" className="fill-white text-white" width="15" height="15" />}
                    bg="#c20000"
                  />
                </div>
              </div>
              <span
                className="text-base tracking-wide text-white/90"
                style={{
                  fontFamily: 'Geist, sans-serif',
                  fontWeight: 400,
                  WebkitFontSmoothing: 'antialiased',
                }}
              >
                Разбор от Сереги 001к
              </span>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div variants={itemVariant} className="relative inline-flex">
            {!prefersReducedMotion && (
              <motion.div
                aria-hidden
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'rgba(200,0,0,0.55)',
                  filter: 'blur(20px)',
                  transform: 'translate3d(0,5px,0) scale3d(0.88,0.7,1)',
                  willChange: 'opacity',
                  pointerEvents: 'none',
                }}
                animate={{ opacity: [0.5, 0.9, 0.5] }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            )}

            <a
              href="https://t.me/your_bot  "
              className="group relative inline-flex items-center gap-3 rounded-full bg-[#c20000] px-9 py-[18px] text-white"
              style={{
                fontFamily: 'Geist, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(0.88rem, 1.35vw, 1.02rem)',
                letterSpacing: '0.05em',
                transition: 'transform 0.18s ease, filter 0.18s ease',
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translate3d(0,-2px,0)';
                e.currentTarget.style.filter = 'brightness(1.14)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translate3d(0,0,0)';
                e.currentTarget.style.filter = 'brightness(1)';
              }}
            >
              <span>ПЕРЕЙТИ В БОТА</span>
              <ArrowRight
                className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
