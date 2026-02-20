'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from './logo';

export function Header() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const r1 = requestAnimationFrame(() => {
      const r2 = requestAnimationFrame(() => setIsReady(true));
      return () => cancelAnimationFrame(r2);
    });
    return () => cancelAnimationFrame(r1);
  }, []);

  return (
    <motion.header
      className="fixed top-0 right-0 left-0 z-50 border-b border-white/10 px-6 py-4 shadow-sm md:px-12 lg:px-24"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 1)',
        transform: 'translateZ(0)',
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
      }}
      initial={{ y: -40, opacity: 0 }}
      animate={isReady ? { y: 0, opacity: 1 } : { y: -40, opacity: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.05,
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <h1
          className="text-3xl text-white"
          style={{ fontFamily: 'Geist, sans-serif', fontWeight: 900 }}
        >
          <Link href="/" prefetch={false}>
            <Logo />
          </Link>
        </h1>

        <a
          href="https://t.me/your_bot"
          className="rounded-full bg-[#c20000] px-6 py-3 leading-[18px] text-white shadow-sm"
          style={{
            fontFamily: 'Geist, sans-serif',
            fontWeight: 600,
            transition: 'background-color 0.2s ease',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(234,0,0,0.85)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#c20000';
          }}
        >
          Telegram-бот
        </a>
      </div>
    </motion.header>
  );
}
