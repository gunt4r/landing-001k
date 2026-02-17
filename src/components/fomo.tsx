'use client';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function FomoSection() {
  return (
    <section className="relative overflow-hidden px-6 py-32 md:px-12 md:py-40 lg:px-24">

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(247, 247, 247, 1) 0%, rgba(250, 250, 250, 1) 50%, rgba(248, 248, 248, 1) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.p
          className="mb-12 text-3xl leading-tight text-black md:text-4xl lg:text-5xl"
          style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Вы можете считать, что происходящее вас не затронет.
          {' '}
          <br />
          {' '}
          Либо внимательно разобраться в правилах и осознанно снизить возможные риски.
        </motion.p>

        <motion.a
          href="https://t.me/your_bot"
          className="group inline-flex items-center gap-4 rounded-full bg-[#EA0000] px-12 py-6 text-xl text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#EA0000]/90 hover:shadow-xl md:text-2xl"
          style={{ fontFamily: 'Geist, sans-serif', fontWeight: 600 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Перейти в Telegram-бот</span>
          <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
        </motion.a>
      </div>
    </section>
  );
}
