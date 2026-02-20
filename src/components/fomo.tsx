'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function FomoSection() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const r = requestAnimationFrame(() => setIsReady(true));
    return () => cancelAnimationFrame(r);
  }, []);

  return (
    <section className="relative overflow-hidden px-6 py-32 md:px-12 md:py-40 lg:px-24">

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'linear-gradient(to top, #f7f7f7 0%, #fafafa 50%, #f8f8f8 100%)',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        <motion.p
          className="mb-12 text-3xl leading-tight text-black md:text-4xl lg:text-5xl"
          style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300 }}
          initial={{ opacity: 0, y: 20 }}
          animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Ты можешь продолжать играть в финансовую рулетку или разобраться
          {' '}
          <span className="font-bold">в правилах игры и минимизировать риск</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <a
            href="https://t.me/your_bot"
            className="group inline-flex items-center gap-4 rounded-full bg-[#c20000] px-12 py-6 text-xl text-white shadow-lg md:text-2xl"
            style={{
              fontFamily: 'Geist, sans-serif',
              fontWeight: 600,
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              transition: 'background-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = 'rgba(234,0,0,0.88)';
              el.style.boxShadow = '0 20px 50px rgba(234,0,0,0.3)';
              el.style.transform = 'scale(1.03) translateZ(0)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = '#c20000';
              el.style.boxShadow = '';
              el.style.transform = 'scale(1) translateZ(0)';
            }}
            onTouchStart={(e) => {
              const el = e.currentTarget;
              el.style.transform = 'scale(0.98) translateZ(0)';
            }}
            onTouchEnd={(e) => {
              const el = e.currentTarget;
              el.style.transform = 'scale(1) translateZ(0)';
            }}
          >
            <span>ПЕРЕЙТИ В БОТА</span>
            <ArrowRight
              className="h-6 w-6"
              style={{
                transition: 'transform 0.2s ease',
              }}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
