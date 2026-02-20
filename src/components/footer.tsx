'use client';
import { motion } from 'motion/react';
import Link from 'next/link';
import Logo from './logo';

const exchangeLinks = [
  {
    title: 'Криптообменник',
    links: [
      { label: 'Обмен наличных на криптовалюту', href: 'https://001k.exchange/exchange-cash-to-crypto' },
      { label: 'Обмен Биткоина на наличные', href: 'https://001k.exchange/exchange-bitcoin-to-cash' },
      { label: 'Обмен Биткоин на Лайткоин', href: 'https://001k.exchange/exchange-bitcoin-to-litecoin' },
      { label: 'Обмен Биткоина на Приват24', href: 'https://001k.exchange/exchange-bitcoin-to-privatbank' },
      { label: 'Обмен BTC – USDC', href: 'https://001k.exchange/exchange-bitcoin-to-usdc' },
      { label: 'Обмен Эфириум на Приват24', href: 'https://001k.exchange/exchange-ethereum-to-privatbank' },
      { label: 'Обмен ETH – МоноБанк', href: 'https://001k.exchange/exchange-ethereum-to-monobank' },
      { label: 'Обмен USDT', href: 'https://001k.exchange/exchange-usdt' },
      { label: 'Обмен USDT на гривну', href: 'https://001k.exchange/exchange-usdt-to-uah' },
      { label: 'Обмен USDT на PayPal', href: 'https://001k.exchange/exchange-usdt-to-paypal' },
      { label: 'Обмен USDT – ETH', href: 'https://001k.exchange/exchange-usdt-to-ethereum' },
      { label: 'Обмен USDT – TRX', href: 'https://001k.exchange/exchange-usdt-to-tron' },
      { label: 'Обмен USD – USDT', href: 'https://001k.exchange/exchange-usd-to-usdt' },
      { label: 'Обмен Ripple на гривну', href: 'https://001k.exchange/exchange-ripple-to-uah' },
    ],
  },
  {
    title: 'Обменник криптовалют по карте',
    links: [
      { label: 'Обменять Биткоины', href: 'https://001k.exchange/exchange-bitcoin' },
      { label: 'Обмен Биткоин на Догикоин', href: 'https://001k.exchange/exchange-bitcoin-to-doge' },
      { label: 'Обмен Биткоин на Монобанк', href: 'https://001k.exchange/exchange-bitcoin-to-monobank' },
      { label: 'Обмен Биткоин на гривны', href: 'https://001k.exchange/exchange-bitcoin-to-uah' },
      { label: 'Обмен Догикоин', href: 'https://001k.exchange/exchange-doge' },
      { label: 'Обмен Эфириум на гривны', href: 'https://001k.exchange/exchange-ethereum-to-uah' },
      { label: 'Обмен Лайткоин', href: 'https://001k.exchange/exchange-litecoin' },
      { label: 'Обмен USDT на наличные', href: 'https://001k.exchange/exchange-usdt-to-cash' },
      { label: 'Обмен USDT на карту', href: 'https://001k.exchange/exchange-usdt-to-card' },
      { label: 'Обмен USDT на доллары', href: 'https://001k.exchange/exchange-usdt-to-usd' },
      { label: 'Обмен USDT – LTC', href: 'https://001k.exchange/exchange-usdt-to-litecoin' },
      { label: 'Обмен USDT – XMR', href: 'https://001k.exchange/exchange-usdt-to-monero' },
      { label: 'Обмен EUR – USDT', href: 'https://001k.exchange/exchange-eur-to-usdt' },
      { label: 'Обмен Monero (XMR)', href: 'https://001k.exchange/exchange-monero' },
    ],
  },
  {
    title: 'Обмен криптовалют на наличные',
    links: [
      { label: 'Обмен Биткоин на Advcash', href: 'https://001k.exchange/exchange-bitcoin-to-advcash' },
      { label: 'Обмен Биткоин на Эфириум', href: 'https://001k.exchange/exchange-bitcoin-to-ethereum' },
      { label: 'Обмен Биткоин на PayPal', href: 'https://001k.exchange/exchange-bitcoin-to-paypal' },
      { label: 'Обмен Биткоина на доллар', href: 'https://001k.exchange/exchange-bitcoin-to-usd' },
      { label: 'Обмен Догикоина на гривну', href: 'https://001k.exchange/exchange-doge-to-uah' },
      { label: 'Обмен Эфира на доллары', href: 'https://001k.exchange/exchange-ethereum-to-usd' },
      { label: 'Обмен LTC – МоноБанк', href: 'https://001k.exchange/exchange-litecoin-to-monobank' },
      { label: 'Обмен USDT на Монобанк', href: 'https://001k.exchange/exchange-usdt-to-monobank' },
      { label: 'Обмен USDT на Биткоин', href: 'https://001k.exchange/exchange-usdt-to-bitcoin' },
      { label: 'Обмен USDT на Wise', href: 'https://001k.exchange/exchange-usdt-to-wise' },
      { label: 'Обмен USDT – Revolut', href: 'https://001k.exchange/exchange-usdt-to-revolut' },
      { label: 'Обмен USDT – XRP', href: 'https://001k.exchange/exchange-usdt-to-ripple' },
      { label: 'Обмен Ripple', href: 'https://001k.exchange/exchange-ripple' },
      { label: 'Обмен Dash', href: 'https://001k.exchange/exchange-dash' },
    ],
  },
  {
    title: 'Обмен криптовалют на гривну',
    links: [
      { label: 'Обмен Биткоина на карту', href: 'https://001k.exchange/exchange-bitcoin-to-card' },
      { label: 'Обмен Биткоин на евро', href: 'https://001k.exchange/exchange-bitcoin-to-eur' },
      { label: 'Обмен Биткоин на Перфект Мани', href: 'https://001k.exchange/exchange-bitcoin-to-perfect-money' },
      { label: 'Обмен Биткоин на карту Visa', href: 'https://001k.exchange/exchange-bitcoin-to-visa-mastercard' },
      { label: 'Обмен Эфира', href: 'https://001k.exchange/exchange-ethereum' },
      { label: 'Обмен Эфириум на карту', href: 'https://001k.exchange/exchange-ethereum-to-card' },
      { label: 'Обмен LTC – Приват24', href: 'https://001k.exchange/exchange-litecoin-to-privat24' },
      { label: 'Обмен USDT на Приват24', href: 'https://001k.exchange/exchange-usdt-to-privatbank' },
      { label: 'Обмен USDT на Payoneer', href: 'https://001k.exchange/exchange-usdt-to-payoneer' },
      { label: 'Обмен USDT – BCH', href: 'https://001k.exchange/exchange-usdt-to-bitcoin-cash' },
      { label: 'Обмен USDT – SEPA', href: 'https://001k.exchange/exchange-usdt-to-sepa' },
      { label: 'Обмен USDT – EUR', href: 'https://001k.exchange/exchange-usdt-to-eur' },
      { label: 'Обмен Ripple на Приват24', href: 'https://001k.exchange/exchange-ripple-to-privatbank' },
      { label: 'Обмен Трон (TRX)', href: 'https://001k.exchange/exchange-tron' },
    ],
  },
];

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
      {/* Top section: logo + nav + socials */}
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
            <p
              className="mt-2 text-sm text-white/40"
              style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300 }}
            >
              Защита от скама и грязных денег
            </p>
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

      {/* Exchange links grid */}
      <motion.div
        className="border-b border-white/10 px-6 py-10 md:px-12 lg:px-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
          {exchangeLinks.map(column => (
            <div key={column.title}>
              <h4
                className="mb-4 text-xs font-semibold tracking-widest text-[#c20000] uppercase"
                style={{ fontFamily: 'Geist, sans-serif' }}
              >
                {column.title}
              </h4>
              <ul className="flex flex-col gap-2">
                {column.links.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-white/40 transition-colors duration-150 hover:text-white/80"
                      style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300 }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div className="px-6 py-6 md:px-12 lg:px-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <div
            className="ml-auto flex items-center gap-3 text-sm text-white/30"
            style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300 }}
          >
            <Link href="/sitemap" className="transition-colors hover:text-white/60">
              Карта сайта
            </Link>
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
