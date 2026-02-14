'use client';
import { AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';

export function OldSolutionsSection() {
  const solutions = [
    {
      name: 'Wise / Revolut',
      risk: 'Блокировки при малейшем подозрении на крипту. Вопросы про Source of Funds без предупреждения.',
    },
    {
      name: 'P2P-обмены',
      risk: 'Непроверенные контрагенты. Риск получить "грязный" фиат, который приведёт к блокировке твоего счёта.',
    },
    {
      name: 'Частные "проверенные" обменщики',
      risk: 'Нет гарантий. Схемы меняются. Сегодня надёжный — завтра исчез вместе с деньгами.',
    },
  ];

  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-12 md:py-32 lg:px-24">
      {/* Subtle depth layer */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 60% 50%, rgba(255, 255, 255, 1) 0%, rgba(253, 253, 253, 1) 40%, rgba(250, 250, 250, 1) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.h2
          className="mb-6 text-center text-4xl text-black md:text-5xl lg:text-6xl"
          style={{ fontFamily: 'Geist, sans-serif', fontWeight: 900 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Старые решения ≠ безопасные решения
        </motion.h2>

        <motion.p
          className="mx-auto mb-16 max-w-3xl text-center text-xl text-black/50"
          style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Каждое из этих решений несёт скрытые риски, которые обычно не учитывают
        </motion.p>

        <div className="grid gap-6 md:grid-cols-3">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="group rounded-3xl border border-black/10 bg-gradient-to-br from-white to-gray-50/50 p-8 backdrop-blur-sm transition-all duration-500 hover:border-[#EA0000]/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              <div className="mb-4 flex items-start gap-3">
                <AlertTriangle className="mt-1 h-6 w-6 flex-shrink-0 text-[#EA0000] group-hover:animate-pulse" />
                <h3
                  className="text-xl text-black md:text-2xl"
                  style={{ fontFamily: 'Geist, sans-serif', fontWeight: 600 }}
                >
                  {solution.name}
                </h3>
              </div>
              <p
                className="leading-relaxed text-black/60"
                style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300 }}
              >
                {solution.risk}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
