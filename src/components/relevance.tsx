'use client';
import { Shield, TrendingDown } from 'lucide-react';
import { motion } from 'motion/react';

export function RelevanceSection() {
  const stats = [
    {
      icon: TrendingDown,
      value: '37%',
      description: 'пользователей теряют деньги из-за крипто-скама в 2025 году',
    },
    {
      icon: Shield,
      value: '42%',
      description: 'пользователей сталкиваются с блокировками счетов после обменов',
    },
  ];

  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-12 md:py-32 lg:px-24">
      {/* Premium depth background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(249, 249, 249, 1) 0%, rgba(252, 252, 252, 1) 50%, rgba(247, 247, 247, 1) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.h2
          className="mb-16 text-center text-4xl text-black md:text-5xl lg:text-6xl"
          style={{ fontFamily: 'Geist, sans-serif', fontWeight: 900 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Почему это важно прямо сейчас
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="rounded-3xl border border-[#EA0000]/20 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-all duration-500 hover:border-[#EA0000]/40 hover:shadow-[0_25px_80px_rgba(0,0,0,0.12)] md:p-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="flex items-start gap-6">
                <div className="rounded-2xl border border-[#EA0000]/10 bg-[#EA0000]/5 p-4">
                  <stat.icon className="h-8 w-8 text-[#EA0000]" />
                </div>
                <div>
                  <div
                    className="mb-4 text-5xl text-[#EA0000] md:text-6xl lg:text-7xl"
                    style={{ fontFamily: 'Geist, sans-serif', fontWeight: 900 }}
                  >
                    {stat.value}
                  </div>
                  <p
                    className="text-lg leading-relaxed text-black/70 md:text-xl"
                    style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300 }}
                  >
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
