'use client';
import { motion } from 'motion/react';
import Link from 'next/link';
import Logo from './logo';

const navLinks = [
  { label: 'Полезные советы', href: 'https://001k.exchange/faq#useful-tips' },
  { label: 'FAQ', href: 'https://001k.exchange/faq' },
  { label: 'AML/CTF Политика', href: 'https://001k.exchange/kyc-aml-policy' },
  { label: 'Политика Конфиденциальности', href: 'https://001k.exchange/privacy-policy' },
  { label: 'Правила', href: 'https://001k.exchange/service-rules' },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black">
      <div className="border-b border-white/10 px-6 py-10 md:px-12 lg:px-24">
        <motion.div
          className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo + tagline */}
          <div className="text-center md:text-left">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:justify-end">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 transition-colors duration-200 hover:text-[#c20000]"
                style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300 }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {/* Telegram Cash */}
            <a
              href="tg://resolve?domain=exchange_001k"
              aria-label="Telegram Cash"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-200 hover:border-[#c20000] hover:text-[#c20000]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13" />
                <path d="M22 2L15 22 11 13 2 9l20-7z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com/001k.exchange"
              target="_blank"
              rel="nofollow noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-200 hover:border-[#c20000] hover:text-[#c20000]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
            {/* Telegram Cashless */}
            <a
              href="tg://resolve?domain=Pay_1k"
              aria-label="Telegram Cashless"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-200 hover:border-[#c20000] hover:text-[#c20000]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13" />
                <path d="M22 2L15 22 11 13 2 9l20-7z" />
              </svg>
            </a>
            {/* Email */}
            <a
              href="mailto:support@001k.exchange"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-200 hover:border-[#c20000] hover:text-[#c20000]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 7 10-7" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
      {/* Bottom bar */}
      <div className="px-6 py-6 md:px-12 lg:px-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <div
            className="ml-auto flex items-center gap-3 text-sm text-white/30"
            style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300 }}
          >
            <span className="text-white/20">•</span>
            <span>
              © 001k trading ©
              {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
