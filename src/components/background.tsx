'use client';

import { motion, useReducedMotion } from 'motion/react';
import { useEffect, useState } from 'react';

// ─── Статичные данные вне компонента — не пересоздаются при ре-рендере ───
const PARTICLE_DATA = Array.from({ length: 8 }, (_, i) => ({ // 12 → 8, меньше нагрузка на Android
  id: i,
  isRed: i % 3 === 0,
  top: 10 + (i * 17 + i * i * 3) % 80,
  left: 10 + (i * 23 + i * i * 5) % 80,
  yOffset: 100 + (i * 13) % 80, // меньше амплитуда — меньше перерасчётов
  xOffset: ((i * 7) % 60) - 30,
  duration: 14 + (i * 3) % 8,
  delay: i * 1.2, // больше интервал — меньше одновременных анимаций
}));

// Статичные стили вне компонента — не пересоздаются
const NOISE_STYLE = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  mixBlendMode: 'overlay' as const,
};

// GPU-слой для всего контейнера — статично, не через Framer Motion
const CONTAINER_STYLE: React.CSSProperties = {
  transform: 'translateZ(0)',
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
};

export function Background3D() {
  const shouldReduceMotion = useReducedMotion();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // window.load вместо setTimeout(100) —
    // гарантирует что страница уже отрисована, не угадываем таймаут
    if (document.readyState === 'complete') {
      const r = requestAnimationFrame(() => setIsReady(true));
      return () => cancelAnimationFrame(r);
    }

    const onLoad = () => {
      const r = requestAnimationFrame(() => setIsReady(true));
      return () => cancelAnimationFrame(r);
    };

    window.addEventListener('load', onLoad, { once: true });
    return () => window.removeEventListener('load', onLoad);
  }, []);

  // Единая фабрика transition
  const t = (duration: number, delay = 0) =>
    shouldReduceMotion
      ? { duration: 0 }
      : { duration, repeat: Infinity, ease: 'easeInOut' as const, delay };

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-white"
      style={CONTAINER_STYLE}
    >

      {/* ─── СТАТИЧНЫЕ элементы — рендерятся сразу, нет мигания ─── */}

      {/* Базовый градиент */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 30% 20%, #fff 0%, #f8f8f8 60%, #f0f0f0 100%)',
        }}
      />

      {/* Угловые акценты — статика, БЕЗ filter+clipPath вместе
          ❌ filter:blur на элементе с clipPath → баг на Android (артефакты рендера)
          ✅ разделены: clipPath без blur, blur без clipPath */}
      <div
        className="absolute top-0 right-0 h-[450px] w-[450px]"
        style={{
          background: 'radial-gradient(circle at 100% 0%, rgba(234,0,0,0.15) 0%, transparent 70%)',
          clipPath: 'polygon(40% 0%, 100% 0%, 100% 100%)',
          opacity: 0.7,
        }}
      />
      <div
        className="absolute top-0 right-0 h-[450px] w-[450px]"
        style={{
          background: 'radial-gradient(circle at 100% 0%, rgba(234,0,0,0.08) 0%, transparent 60%)',
          filter: 'blur(60px)', // blur отдельно, без clipPath
          opacity: 0.8,
        }}
      />

      <div
        className="absolute bottom-0 left-0 h-[500px] w-[500px]"
        style={{
          background: 'radial-gradient(circle at 0% 100%, rgba(0,0,0,0.1) 0%, transparent 70%)',
          clipPath: 'polygon(0% 100%, 0% 0%, 100% 100%)',
          opacity: 0.6,
        }}
      />

      {/* Шум-текстура — статика */}
      <div className="absolute inset-0 opacity-[0.025]" style={NOISE_STYLE} />

      {/* ─── АНИМИРОВАННЫЕ элементы — только после загрузки страницы ─── */}
      {isReady && (
        <>
          {/* Сетка верхний-левый угол */}
          <motion.div
            className="absolute top-0 left-0 h-[600px] w-[600px]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0,0,0,0.2) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0,0,0,0.2) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              WebkitMaskImage: 'radial-gradient(circle at 0% 0%, black 0%, transparent 60%)',
              maskImage: 'radial-gradient(circle at 0% 0%, black 0%, transparent 60%)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: shouldReduceMotion ? 0.4 : [0.3, 0.7, 0.3] }}
            transition={t(5)}
          />

          {/* Сетка нижний-правый угол */}
          <motion.div
            className="absolute right-0 bottom-0 h-[700px] w-[700px]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(234,0,0,0.25) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(234,0,0,0.25) 1px, transparent 1px)
              `,
              backgroundSize: '70px 70px',
              WebkitMaskImage: 'radial-gradient(circle at 100% 100%, black 0%, transparent 60%)',
              maskImage: 'radial-gradient(circle at 100% 100%, black 0%, transparent 60%)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: shouldReduceMotion ? 0.5 : [0.4, 0.9, 0.4] }}
            transition={t(6, 1)}
          />

          {/* Геометрия слева —
              ❌ animate y на clipPath-элементе → CPU на Android
              ✅ animate только opacity → GPU compositing */}
          <motion.div
            className="absolute -top-[15%] -left-[8%] h-[900px] w-[900px]"
            style={{
              background: 'linear-gradient(135deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.06) 50%, transparent 100%)',
              clipPath: 'polygon(0% 0%, 100% 0%, 75% 100%, 0% 80%)',
              border: '2px solid rgba(0,0,0,0.08)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: shouldReduceMotion ? 0.8 : [0.6, 1, 0.6] }}
            transition={t(20)}
          />

          {/* Геометрия справа */}
          <motion.div
            className="absolute -top-[12%] -right-[6%] h-[850px] w-[850px]"
            style={{
              background: 'linear-gradient(225deg, rgba(234,0,0,0.1) 0%, rgba(234,0,0,0.05) 40%, transparent 100%)',
              clipPath: 'polygon(20% 0%, 100% 0%, 100% 75%, 80% 100%)',
              borderLeft: '2px solid rgba(234,0,0,0.18)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: shouldReduceMotion ? 0.8 : [0.5, 1, 0.5] }}
            transition={t(22, 3)}
          />

          {/* Glow верх — blur статичный, анимируем только opacity */}
          <motion.div
            className="absolute top-0 left-[15%] h-[400px] w-[70%]"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(234,0,0,0.12) 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: shouldReduceMotion ? 0.6 : [0.5, 0.9, 0.5] }}
            transition={t(15)}
          />

          {/* Glow низ */}
          <motion.div
            className="absolute right-[10%] bottom-0 h-[350px] w-[60%]"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(234,0,0,0.1) 0%, transparent 70%)',
              filter: 'blur(70px)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: shouldReduceMotion ? 0.7 : [0.5, 0.9, 0.5] }}
            transition={t(18, 4)}
          />

          {/* Диагональные линии — translateZ форсирует GPU слой */}
          <motion.div
            className="absolute top-[15%] left-[38%] h-[70vh] w-[2px]"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, rgba(234,0,0,0.35) 25%, rgba(234,0,0,0.55) 50%, rgba(234,0,0,0.35) 75%, transparent 100%)',
              transform: 'rotate(-12deg) translateZ(0)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: shouldReduceMotion ? 0.6 : [0.5, 0.9, 0.5] }}
            transition={t(12, 3)}
          />

          <motion.div
            className="absolute top-[8%] left-[69%] h-[600px] w-[2px]"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.5) 0%, rgba(234,0,0,0.35) 45%, transparent 100%)',
              transform: 'rotate(28deg) translateZ(0)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: shouldReduceMotion ? 0.5 : [0.4, 0.8, 0.4] }}
            transition={t(14, 2)}
          />

          {/* Кольца */}
          <motion.div
            className="absolute top-[58%] left-[18%] h-[500px] w-[500px] rounded-full"
            style={{
              border: '2px solid rgba(234,0,0,0.15)',
              // ❌ boxShadow на анимированном элементе — CPU на каждый кадр
              // ✅ убрали boxShadow
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: shouldReduceMotion ? 0.5 : [0.3, 0.7, 0.3] }}
            transition={t(20, 3)}
          />

          <motion.div
            className="absolute top-[25%] right-[30%] h-[350px] w-[350px] rounded-full"
            style={{ border: '1px solid rgba(0,0,0,0.1)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: shouldReduceMotion ? 0.4 : [0.3, 0.6, 0.3] }}
            transition={t(25, 4)}
          />

          {/* Частицы — только если нет reduced motion, с willChange */}
          {!shouldReduceMotion && PARTICLE_DATA.map(p => (
            <motion.div
              key={p.id}
              className="absolute rounded-full"
              style={{
                background: p.isRed ? 'rgba(234,0,0,0.65)' : 'rgba(0,0,0,0.3)',
                // ❌ boxShadow на частицах — пересчёт на каждый кадр анимации
                // ✅ убрали boxShadow
                width: p.isRed ? '7px' : '3px',
                height: p.isRed ? '7px' : '3px',
                top: `${p.top}%`,
                left: `${p.left}%`,
                willChange: 'transform, opacity', // только для реально движущихся элементов
              }}
              initial={{ opacity: 0 }}
              animate={{
                y: [0, -p.yOffset, 0],
                x: [0, p.xOffset, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: p.delay,
              }}
            />
          ))}
        </>
      )}
    </div>
  );
}
