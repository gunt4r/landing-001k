/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks-extra/no-direct-set-state-in-use-effect */
'use client';

import type { Transition } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { easeInOut, motion } from 'motion/react';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const CRYPTO_CARDS = [
  {
    id: 0,
    icon: <Image src="/bitcoin.svg" alt="ethereum" width={90} height={40} />,
    top: '12%',
    left: '5%',
    rotate: -8,
    yAnim: [0, -18, 0],
    duration: 5.5,
    delay: 0,
  },
  {
    id: 1,
    icon: <Image src="/ethereum.svg" alt="ethereum" width={90} height={40} />,
    top: '55%',
    left: '2%',
    rotate: 5,
    yAnim: [0, 14, 0],
    duration: 6.5,
    delay: 0.8,
  },
  {
    id: 2,
    icon: <Image src="/tether.svg" alt="ethereum" width={90} height={40} />,
    top: '20%',
    right: '4%',
    rotate: 7,
    yAnim: [0, -14, 0],
    duration: 7,
    delay: 0.4,
  },
  {
    id: 3,
    icon: <Image src="/xrp.svg" alt="ethereum" width={90} height={40} />,
    positive: false,
    top: '62%',
    right: '3%',
    rotate: -5,
    yAnim: [0, 16, 0],
    duration: 5.8,
    delay: 1.2,
  },
];

const FLOW_LINES = [
  { id: 0, x1: '15%', y1: '30%', x2: '45%', y2: '50%', delay: 0 },
  { id: 1, x1: '85%', y1: '25%', x2: '55%', y2: '50%', delay: 0.6 },
  { id: 2, x1: '20%', y1: '70%', x2: '45%', y2: '52%', delay: 1.2 },
  { id: 3, x1: '80%', y1: '68%', x2: '55%', y2: '52%', delay: 1.8 },
];

export function HeroSection() {
  const [isReady, setIsReady] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    );

    const r1 = requestAnimationFrame(() => {
      const r2 = requestAnimationFrame(() => setIsReady(true));
      return () => cancelAnimationFrame(r2);
    });
    return () => cancelAnimationFrame(r1);
  }, []);

  const cardMotionMap = useMemo(() => {
    return CRYPTO_CARDS.map((c) => {
      const seed = c.id + 1;
      const xOffset = ((seed * 37) % 7) - 3;
      const scaleAmp = 1 + (((seed * 13) % 6) / 700);
      const rotateAmp = ((seed * 19) % 3) - 1;

      return {
        id: c.id,
        xOffset,
        scaleAmp,
        rotateAmp,
      };
    });
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease },
    },
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-32 md:px-12 lg:px-24">

      <div
        className="pointer-events-none absolute inset-0"
        style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden', transformStyle: 'preserve-3d' }}
      >

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
              <polygon points="0 0, 6 2, 0 4" fill="rgba(234,0,0,0.45)" />
            </marker>
          </defs>

          {FLOW_LINES.map(line => (
            <motion.line
              key={line.id}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="rgba(234,0,0,0.28)"
              strokeWidth="1.5"
              strokeDasharray="8 8"
              markerEnd="url(#arrowhead)"
              vectorEffect="non-scaling-stroke"
              initial={{ strokeDashoffset: 0, opacity: 0.35 }}
              animate={
                isReady && !reduceMotion
                  ? { strokeDashoffset: [-48, 0], opacity: 0.35 }
                  : { strokeDashoffset: 0, opacity: 0.35 }
              }
              transition={{
                duration: 3.5,
                delay: line.delay,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'linear',
              }}
            />
          ))}
        </svg>

        <div
          className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(234,0,0,0.07) 0%, transparent 65%)',
            filter: 'blur(40px)',
            transform: 'translate(-50%, -50%) translateZ(0)',
            willChange: 'filter, opacity, transform',
          }}
        />

        <div
          className="absolute top-0 right-0 h-64 w-64 opacity-60"
          style={{
            background: 'radial-gradient(circle at 100% 0%, rgba(234,0,0,0.1) 0%, transparent 70%)',
            filter: 'blur(30px)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 h-64 w-64 opacity-40"
          style={{
            background: 'radial-gradient(circle at 0% 100%, rgba(0,0,0,0.12) 0%, transparent 70%)',
            filter: 'blur(30px)',
          }}
        />
      </div>

      {isReady && CRYPTO_CARDS.map((card) => {
        const motionCfg = cardMotionMap.find(m => m.id === card.id)!;

        const initialValues = {
          opacity: 0.95,
          y: card.yAnim?.[0] ?? 0,
          x: 0,
          rotate: card.rotate,
          scale: 1,
        };

        const animateValues = reduceMotion
          ? { opacity: 0.95, y: 0, x: 0, rotate: card.rotate, scale: 1 }
          : {
              opacity: 0.95,
              y: card.yAnim,
              x: [0, motionCfg.xOffset, 0],
              scale: [1, motionCfg.scaleAmp, 0.995, 1],
              rotate: [card.rotate + motionCfg.rotateAmp, card.rotate - motionCfg.rotateAmp / 1.5, card.rotate],
            };

        const transitionValues: Transition<any> = reduceMotion
          ? {
              duration: 0.001,
              ease: easeInOut,
            }
          : {
              duration: card.duration,
              delay: card.delay,
              repeat: Infinity,
              repeatType: 'loop' as const, // Specify the type explicitly
              ease: easeInOut,
            };

        return (
          <motion.div
            key={card.id}
            className="pointer-events-none absolute hidden lg:block"
            style={{
              top: card.top,
              left: card.left ?? 'auto',
              right: card.right ?? 'auto',
              transform: `rotate(${card.rotate}deg) translateZ(0.001px)`,
              backfaceVisibility: 'hidden',
              willChange: 'transform',
              filter: 'drop-shadow(0 12px 30px rgba(0,0,0,0.12))',
            }}
            initial={initialValues}
            animate={animateValues}
            transition={transitionValues}
          >
            {card.icon}
          </motion.div>
        );
      })}

      <div className="relative z-10 w-full max-w-5xl">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isReady ? 'show' : 'hidden'}
          style={{
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
          }}
        >
          <motion.h1
            variants={item}
            className="mb-8 text-5xl leading-tight text-black md:text-6xl lg:text-7xl xl:text-8xl"
            style={{ fontFamily: 'Geist, sans-serif', fontWeight: 900 }}
          >
            Как не потерять $20,000: 7 схем, которые обнуляют ваш капитал в
            {' '}
            {new Date().getFullYear()}
            {' '}
            году
          </motion.h1>

          <motion.p
            variants={item}
            className="mb-12 max-w-3xl text-lg leading-relaxed text-black/60"
            style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300 }}
          >
            Практический разбор от Сереги 001к: 7 актуальных схем: от AI-дипфейков
            до скрытой «грязи» в P2P, из-за которой объем украденных средств
            достигает $17 млрд.
          </motion.p>

          <motion.div variants={item}>
            <a
              href="https://t.me/your_bot"
              className="group inline-flex items-center gap-3 rounded-full bg-[#EA0000] px-10 py-5 text-lg text-white shadow-lg md:text-xl"
              style={{
                fontFamily: 'Geist, sans-serif',
                fontWeight: 600,
                transition: 'box-shadow 0.2s ease, background-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = 'rgba(234,0,0,0.88)';
                el.style.boxShadow = '0 20px 40px rgba(234,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = '#EA0000';
                el.style.boxShadow = '';
              }}
            >
              <span>Перейти в Telegram-бот</span>
              <ArrowRight
                className="h-5 w-5"
                style={{ transition: 'transform 0.2s ease' }}
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
