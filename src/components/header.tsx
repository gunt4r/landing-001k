'use client';
import { motion } from 'motion/react';
import Logo from './logo';

export function Header() {
  return (
    <motion.header
      className="fixed top-0 right-0 left-0 z-50 border-b border-black/10 bg-white/80 px-6 py-6 shadow-sm backdrop-blur-md md:px-12 lg:px-24"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-3">
          <div>
            <h1
              className="text-3xl text-black"
              style={{ fontFamily: 'Geist, sans-serif', fontWeight: 900 }}
            >
              <Logo />
            </h1>
          </div>
        </div>

        <a
          href="https://t.me/your_bot"
          className="rounded-full bg-[#EA0000] px-6 py-3 text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-[#EA0000]/90"
          style={{ fontFamily: 'Geist, sans-serif', fontWeight: 600 }}
        >
          Telegram-бот
        </a>
      </div>
    </motion.header>
  );
}
