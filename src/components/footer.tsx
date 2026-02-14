'use client';
import { motion } from 'motion/react';
import Logo from './logo';

export function Footer() {
  return (
    <footer className="relative border-t border-black/10 bg-white px-6 py-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="flex flex-col items-center justify-between gap-8 md:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center md:text-left">
            <h3
              className="mb-2 text-3xl text-black"
              style={{ fontFamily: 'Geist, sans-serif', fontWeight: 900 }}
            >
              <Logo />
            </h3>
            <p
              className="text-black/50"
              style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300 }}
            >
              Защита от скама и грязных денег
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 md:flex-row">
            <a
              href="https://t.me/your_bot"
              className="text-black/70 transition-colors duration-300 hover:text-[#EA0000]"
              style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300 }}
            >
              Telegram
            </a>
            <span className="hidden text-black/20 md:block">•</span>
            <p
              className="text-sm text-black/40"
              style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300 }}
            >
              ©
              {' '}
              {new Date().getFullYear()}
              {' '}
              Все права защищены
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
