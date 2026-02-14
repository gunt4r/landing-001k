'use client';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-32 md:px-12 lg:px-24">
      <div
        className="pointer-events-none absolute inset-0"
      />

      <div className="relative z-10 w-full max-w-5xl">
        <motion.h1
          className="mb-8 text-5xl leading-tight text-black md:text-6xl lg:text-7xl xl:text-8xl"
          style={{ fontFamily: 'Geist, sans-serif', fontWeight: 900 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Как не потерять $20,000: 7 схем, которые обнуляют ваш капитал в $
          {new Date().getFullYear()}
          {' '}
          году
        </motion.h1>

        <motion.p
          className="mb-12 max-w-3xl text-lg leading-relaxed text-black/60 md:text-xl"
          style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Практический разбор от Сереги 001к: 7 актуальных схем: от AI-дипфейков до скрытой «грязи» в P2P, из-за которой объем украденных средств достигает $17 млрд.
        </motion.p>

        <motion.a
          href="https://t.me/your_bot"
          className="group inline-flex items-center gap-3 rounded-full bg-[#EA0000] px-10 py-5 text-lg text-white shadow-lg transition-all duration-300 hover:bg-[#EA0000]/90 hover:shadow-xl md:text-xl"
          style={{ fontFamily: 'Geist, sans-serif', fontWeight: 600 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Перейти в Telegram-бот</span>
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </motion.a>
      </div>
    </section>
  );
}
