/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks-extra/no-direct-set-state-in-use-effect */
'use client';

import { Check } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';

export function TargetAudienceSection() {
  const prefersReducedMotion = typeof window !== 'undefined'
    && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const lowPowerDevice = typeof navigator !== 'undefined' && (
    (navigator as any).deviceMemory || (navigator as any).deviceMemory <= 2
    || (navigator as any).hardwareConcurrency || (navigator as any).hardwareConcurrency <= 2
  );

  const particleCount = useMemo(() => {
    if (prefersReducedMotion) {
      return 0;
    }
    if (lowPowerDevice) {
      return 2;
    }
    return 5;
  }, [prefersReducedMotion, lowPowerDevice]);

  const ribbonCount = prefersReducedMotion ? 0 : (lowPowerDevice ? 1 : 3);

  const containerRef = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    if (!containerRef.current || prefersReducedMotion) {
      setRevealed(true);
      return;
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setRevealed(true);
          obs.disconnect();
        }
      });
    }, { threshold: 0.15 });
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, [prefersReducedMotion]);

  const benefits = [
    'Крупные переводы ($10,000+): Вы регулярно перемещаете значительные суммы для бизнеса, покупки активов или содержания семьи за рубежом.',
    'Использование P2P-площадок: Вы часто принимаете фиатные средства от частных лиц, не имея полной информации об источнике их происхождения.',
    'Отсутствие комплаенс-базы: У вас нет готового пакета документов на случай внезапного запроса от банка.',
    'Активная жизнь в Европе/ОАЭ: Вы оплачиваете расходы картами, которые пополняются через крипто-обменные операции.',
  ];

  // small utility to generate array for particles / ribbons
  const arr = (n: number) => Array.from({ length: n }).map((_, i) => i);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-black px-5 py-20 text-white md:px-12 md:py-28"
      aria-labelledby="ta-heading"
    >
      <style>
        {`
        /* accent color */
        :root { --accent: #EA0000; }

        /* coins (3D-ish) */
        .coin {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          position: absolute;
          transform-style: preserve-3d;
          backface-visibility: hidden;
          perspective: 800px;
          will-change: transform, opacity;
        }
        .coin .face {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          display: block;
          transform-origin: center;
          box-shadow: 0 8px 30px rgba(0,0,0,0.6);
        }
        .coin--front {
          background: radial-gradient(circle at 30% 25%, rgba(255,255,255,0.16), rgba(255,255,255,0.02) 20%, rgba(0,0,0,0.6) 70%), linear-gradient(180deg, #222 0%, #000 100%);
          border: 1px solid rgba(255,255,255,0.04);
        }
        .coin--edge {
          width: 20%;
          left: 40%;
          top: 0;
          height: 100%;
          border-radius: 10px;
          background: linear-gradient(90deg, rgba(234,0,0,0.95), rgba(255,140,140,0.3));
          transform-origin: left center;
        }

        /* coin rotate animation (subtle) */
        @keyframes coin-spin {
          0% { transform: rotateY(0deg) translateZ(0); opacity: 0.95; }
          50% { transform: rotateY(180deg) translateZ(6px); opacity: 1; }
          100% { transform: rotateY(360deg) translateZ(0); opacity: 0.95; }
        }

        /* floating subtle glow */
        .glow {
          position: absolute;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.7;
          pointer-events: none;
        }

        /* transaction ribbon */
        .ribbon {
          position: absolute;
          height: 6px;
          border-radius: 999px;
          opacity: 0.9;
          transform: translate3d(-100%,0,0);
          will-change: transform, opacity;
        }
        @keyframes ribbon-flow {
          0% { transform: translate3d(-140%,0,0); opacity: 0; }
          10% { opacity: 0.9; }
          60% { transform: translate3d(120%,0,0); opacity: 0.9; }
          100% { transform: translate3d(140%,0,0); opacity: 0; }
        }

        /* fade/slide reveal for content */
        .reveal {
          transform: translateY(0);
          opacity: 1;
          transition: transform 520ms cubic-bezier(.2,.9,.3,1), opacity 520ms ease;
        }
        .pre-reveal {
          transform: translateY(24px);
          opacity: 0;
        }

        /* card */
        .ta-card {
          background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));
          border: 1px solid rgba(255,255,255,0.04);
          backdrop-filter: blur(6px);
        }

        /* reduced motion fallbacks */
        @media (prefers-reduced-motion: reduce) {
          .coin { animation: none !important; }
          .ribbon { animation: none !important; transform: none !important; opacity: 0.6 !important; }
        }
      `}
      </style>

      <div className="pointer-events-none">
        <div
          aria-hidden
          className="glow"
          style={{
            left: '6%',
            top: '6%',
            background: 'radial-gradient(circle, rgba(234,0,0,0.14), rgba(234,0,0,0.035) 40%, transparent 60%)',
            transform: 'translateZ(0)',
          }}
        />
        <div
          aria-hidden
          className="glow"
          style={{
            right: '6%',
            bottom: '10%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.06), rgba(234,0,0,0.02) 40%, transparent 70%)',
            transform: 'translateZ(0)',
          }}
        />
      </div>

      {arr(particleCount).map((i) => {
        const size = 48 + (i % 2) * 22;
        const top = 12 + i * 10;
        const left = (i % 2 === 0) ? (12 + i * 6) : (70 - i * 6);
        const delay = i * 1.2;
        const duration = 8 + (i % 3) * 3;
        return (
          <div
            key={`coin-${i}`}
            className="coin"
            style={{
              width: size,
              height: size,
              top: `${top}%`,
              left: `${left}%`,
              animation: prefersReducedMotion ? 'none' : `coin-spin ${duration}s linear ${delay}s infinite`,
              transformOrigin: 'center',
            }}
            aria-hidden
          >
            <span className="face coin--front" />
            <span
              className="face coin--edge"
              style={{ transform: 'rotateY(90deg) translateZ(0)' }}
            />
          </div>
        );
      })}

      {/* ribbons (transaction lines) */}
      {arr(ribbonCount).map((i) => {
        const top = 20 + i * 18;
        const left = i % 2 === 0 ? '-20%' : '-30%';
        const color = i % 2 === 0 ? 'linear-gradient(90deg, rgba(234,0,0,0.95), rgba(234,0,0,0.2))' : 'linear-gradient(90deg, rgba(255,255,255,0.08), rgba(234,0,0,0.12))';
        const delay = i * 1.5;
        const duration = 6 + i * 1.4;
        return (
          <div
            key={`ribbon-${i}`}
            className="ribbon"
            style={{
              top: `${top}%`,
              left,
              width: '80%',
              background: color,
              animation: prefersReducedMotion ? 'none' : `ribbon-flow ${duration}s linear ${delay}s infinite`,
            }}
            aria-hidden
          />
        );
      })}

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className={`mb-10 text-center ${revealed ? 'reveal' : 'pre-reveal'}`}>
          <h2 id="ta-heading" className="text-3xl leading-tight font-extrabold md:text-4xl lg:text-5xl">
            Кому важно пересмотреть свою стратегию безопасности?
          </h2>
        </div>

        <div className="space-y-4">
          {benefits.map((b, idx) => (
            <article
              key={idx}
              className="ta-card ta-item relative flex items-start gap-4 rounded-2xl p-5 md:p-6"
              style={{
                transition: 'transform 240ms ease, box-shadow 240ms ease',
                transform: revealed ? 'translateY(0)' : 'translateY(12px)',
              }}
            >
              <div
                className="flex-shrink-0 rounded-full p-1.5"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
                  border: '1px solid rgba(255,255,255,0.04)',
                  width: 44,
                  height: 44,
                  display: 'grid',
                  placeItems: 'center',
                }}
                aria-hidden
              >
                <Check className="h-5 w-5 text-white" strokeWidth={3} />
              </div>

              <div className="flex-1">
                <h3 className="text-base leading-snug font-semibold text-white/95 md:text-lg">
                  {b.split(':')[0]}
                </h3>
                <p className="mt-1 text-sm text-white/70">
                  {b.split(':')[1]}
                </p>
              </div>

              <div
                aria-hidden
                style={{
                  width: 6,
                  height: 40,
                  borderRadius: 6,
                  background: 'linear-gradient(180deg, var(--accent), rgba(255,80,80,0.6))',
                  boxShadow: '0 8px 20px rgba(234,0,0,0.12)',
                }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
