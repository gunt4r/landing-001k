'use client';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'motion/react';

export function TargetAudienceSection() {
  const points = [
    'Переводишь $50k–$500k+ и важны сроки и чистота сделки',
    'Банк или EMI задавал вопросы про Source of Funds',
    'Понимаешь, что цена ошибки выше любых комиссий',
    'Не хочешь разбираться в сетях, адресах и терминах',
    'После P2P было ощущение, что деньги «пахнут риском»',
    'Слышал про серые схемы и не хочешь повторить чужие ошибки',
    'Были ситуации: сервис пропал, менеджер исчез, задержка → паника',
  ];

  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-12 md:py-32 lg:px-24">
      {/* Layered depth background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(248, 248, 248, 1) 0%, rgba(251, 251, 251, 1) 50%, rgba(249, 249, 249, 1) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.h2
          className="mb-16 text-center text-4xl text-black md:text-5xl lg:text-6xl"
          style={{ fontFamily: 'Geist, sans-serif', fontWeight: 900 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Узнаёшь себя?
        </motion.h2>

        <div className="mb-12 space-y-5">
          {points.map((point, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 rounded-2xl border border-black/10 bg-white/80 p-5 backdrop-blur-sm transition-all duration-300 hover:border-black/20 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ x: 8 }}
            >
              <div className="mt-0.5 flex-shrink-0 rounded-full border border-black/10 bg-black/5 p-1.5">
                <Check className="h-5 w-5 text-black" />
              </div>
              <p
                className="text-lg leading-relaxed text-black/80 md:text-xl"
                style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300 }}
              >
                {point}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="https://t.me/your_bot"
            className="group inline-flex items-center gap-3 rounded-full bg-[#EA0000] px-10 py-5 text-lg text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#EA0000]/90 hover:shadow-xl md:text-xl"
            style={{ fontFamily: 'Geist, sans-serif', fontWeight: 600 }}
          >
            <span>Да, это про меня</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
