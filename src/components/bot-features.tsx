'use client';
import { AlertCircle, CheckSquare, FileText, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export function BotFeaturesSection() {
  const features = [
    {
      icon: FileText,
      title: 'Разборы типовых схем',
      items: [
        'Как теряют деньги на «простом обмене»',
        'Откуда берётся грязный фиат',
        'Почему слишком выгодный курс — тревожный сигнал',
        'Что делать, если сделка зависла',
      ],
    },
    {
      icon: AlertCircle,
      title: 'Красные флаги до перевода',
      items: [
        'Сигналы, после которых правильное решение — остановиться',
      ],
    },
    {
      icon: CheckSquare,
      title: 'Чек-лист безопасной сделки',
      items: [
        'Финальный расчёт',
        'Регламент связи',
        'План A / plan B',
        'Проверка реквизитов',
        'Готовность к вопросам банка',
      ],
    },
    {
      icon: Phone,
      title: 'Следующий логичный шаг',
      items: [
        'Бесплатная консультация + Risk-Check сделки',
        'Где риск максимальный',
        'Что подготовить',
        'Какие действия не делать самому',
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-12 md:py-32 lg:px-24">

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 40% 30%, rgba(254, 254, 254, 1) 0%, rgba(252, 252, 252, 1) 50%, rgba(249, 249, 249, 1) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.h2
          className="mb-20 text-center text-4xl text-black md:text-5xl lg:text-6xl"
          style={{ fontFamily: 'Geist, sans-serif', fontWeight: 900 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Что внутри Telegram-бота
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="rounded-3xl border border-black/10 bg-gradient-to-br from-white via-white to-gray-50/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-black/20 hover:shadow-[0_25px_70px_rgba(0,0,0,0.09)] md:p-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              <div className="mb-6 flex items-start gap-6">
                <div className="rounded-2xl border border-[#EA0000]/10 bg-[#EA0000]/5 p-4">
                  <feature.icon className="h-8 w-8 text-[#EA0000]" />
                </div>
                <div>
                  <div
                    className="mb-2 text-sm text-[#EA0000]"
                    style={{ fontFamily: 'Geist, sans-serif', fontWeight: 600 }}
                  >
                    {index + 1}
                    .
                  </div>
                  <h3
                    className="text-2xl text-black md:text-3xl"
                    style={{ fontFamily: 'Geist, sans-serif', fontWeight: 600 }}
                  >
                    {feature.title}
                  </h3>
                </div>
              </div>

              <ul className="space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-3 leading-relaxed text-black/60"
                    style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300 }}
                  >
                    <span className="mt-1 flex-shrink-0 text-black/40">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
