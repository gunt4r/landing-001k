'use client';

import { Landmark, Repeat } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useMemo } from 'react';
import Revolut from './revolut.svg';

export function OldSolutionsSection() {
  function rand(seed: number) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  }

  const warningParticles = useMemo(() => {
    const isReduced
      = typeof window !== 'undefined'
        && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const count = isReduced ? 0 : 12;

    return Array.from({ length: count }).map((_, i) => {
      const r1 = rand(i * 3 + 1);
      const r2 = rand(i * 3 + 2);
      const r3 = rand(i * 3 + 3);

      return {
        id: i,
        size: i % 3 === 0 ? 6 : 3,
        isRed: i % 3 === 0,
        top: 10 + r1 * 80,
        left: 10 + r2 * 80,
        duration: 10 + r3 * 5,
        delay: i * 0.9,
        yOffset: -80 - r3 * 50,
        xOffset: (r2 - 0.5) * 60,
      };
    });
  }, []);

  const solutions = [
    {
      name: 'Финтех-платформы',
      subtitle: 'Wise, Revolut',
      risk: 'Усиление мониторинга привело к тому, что транзакции анализируются по сотням параметров. Ошибка в структурировании суммы может привести к блокировке капитала на срок до 60 дней.',
      icon: <Image src={Revolut} alt="Revolut" width={40} height={40} />,
    },
    {
      name: 'P2P-рынок',
      subtitle: 'Риски цепочек',
      risk: 'Классические схемы «треугольник» и фрод с чарджбэками стали профессиональнее. Получение средств от непроверенного лица может привести к вопросам со стороны правоохранительных органов.',
      icon: <Repeat />,
    },
    {
      name: 'SWIFT-переводы',
      subtitle: 'Банковские каналы',
      risk: 'Банковский перевод незнакомому контрагенту — один из самых частых триггеров для SoF-запросов и заморозок, особенно при суммах от $10,000.',
      icon: <Landmark />,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 md:px-12 md:py-32 lg:px-24">

      <div className="pointer-events-none absolute inset-0">

        <motion.div
          className="absolute top-0 left-0 h-[400px] w-full opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(234, 0, 0, 0.2) 2px, transparent 2px),
              linear-gradient(to bottom, rgba(234, 0, 0, 0.2) 2px, transparent 2px)
            `,
            backgroundSize: '60px 60px',
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          }}
          animate={{
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute top-[15%] -left-10 h-[350px] w-[350px]"
          style={{
            background: 'linear-gradient(135deg, rgba(234, 0, 0, 0.1) 0%, rgba(234, 0, 0, 0.04) 100%)',
            clipPath: 'polygon(0% 25%, 65% 0%, 100% 40%, 70% 100%, 0% 80%)',
            boxShadow: '0 40px 100px rgba(234, 0, 0, 0.15)',
            border: '1px solid rgba(234, 0, 0, 0.15)',
          }}
          animate={{
            y: [0, 35, 0],
            rotateZ: [0, 4, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute top-[50%] -right-10 h-[300px] w-[300px]"
          style={{
            background: 'linear-gradient(225deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.03) 100%)',
            clipPath: 'polygon(25% 0%, 100% 5%, 100% 100%, 10% 85%)',
            boxShadow: '0 50px 120px rgba(0, 0, 0, 0.12)',
            border: '1px solid rgba(0, 0, 0, 0.1)',
          }}
          animate={{
            y: [0, -30, 0],
            rotateZ: [0, -3, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />

        <motion.div
          className="absolute top-[30%] right-[15%] h-[250px] w-[250px]"
          style={{
            background: 'radial-gradient(circle, rgba(234, 0, 0, 0.18) 0%, rgba(234, 0, 0, 0.08) 40%, transparent 70%)',
            filter: 'blur(70px)',
          }}
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute top-[20%] left-[25%] h-[450px] w-[3px]"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(234, 0, 0, 0.4) 30%, rgba(234, 0, 0, 0.6) 50%, rgba(234, 0, 0, 0.4) 70%, transparent 100%)',
            transform: 'rotate(-18deg)',
            boxShadow: '0 0 35px rgba(234, 0, 0, 0.4), 0 0 70px rgba(234, 0, 0, 0.2)',
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scaleY: [1, 1.12, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {warningParticles.map((particle, i) => (
          <motion.div
            key={`warning-particle-${i}`}
            className="absolute"
            style={{
              width: '0',
              height: '0',
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              borderBottom: particle.isRed ? '10px solid rgba(234, 0, 0, 0.6)' : '10px solid rgba(255, 165, 0, 0.5)',
              filter: 'drop-shadow(0 0 8px rgba(234, 0, 0, 0.5))',
              top: `${particle.top}%`,
              left: `${particle.left}%`,
            }}
            animate={{
              y: [0, -particle.yOffset, 0],
              x: [0, particle.xOffset, 0],
              opacity: [0, 0.9, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 1,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <h2 className="mb-6 text-4xl font-black text-black md:text-5xl lg:text-6xl">
            Как вчерашние лайфхаки становятся
            {' '}
            <span className="relative inline-block">
              <span className="relative z-10">триггерами блокировок</span>
              <motion.span
                className="absolute bottom-0 left-0 h-4 w-full bg-[#EA0000]/20"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{ transformOrigin: 'left' }}
              />
            </span>
            {' '}
            сегодня
          </h2>

          <motion.p
            className="mx-auto max-w-3xl text-xl text-black/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Методы, которые казались безопасными два года назад, сегодня внесены в стоп-листы
            всех крупных финтех-компаний. Использование их — это не риск, а вопрос времени.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >

              <motion.div
                className="relative h-full border-2 border-black/10 bg-gradient-to-br from-white to-gray-50 p-8"
                style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 100% 92%, 92% 100%, 0% 100%)',
                  boxShadow: '0 25px 70px rgba(0, 0, 0, 0.1)',
                }}
                whileHover={{
                  y: -8,
                  boxShadow: '0 35px 90px rgba(234, 0, 0, 0.2)',
                }}
                transition={{ duration: 0.3 }}
              >

                <motion.div
                  className="absolute top-0 right-0 flex h-16 w-16 items-center justify-center"
                  style={{
                    background: 'linear-gradient(225deg, rgba(234, 0, 0, 0.15) 0%, transparent 80%)',
                    clipPath: 'polygon(40% 0%, 100% 0%, 100% 100%)',
                  }}
                  animate={{
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.5,
                  }}
                >
                </motion.div>

                <div className="flex items-center gap-4">
                  <motion.div
                    className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EA0000] to-[#c00000] text-4xl shadow-2xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div>
                      {solution.icon}
                    </motion.div>
                  </motion.div>

                  <div className="mb-4">
                    <h3 className="mb-2 text-2xl font-bold text-black md:text-3xl">
                      {solution.name}
                    </h3>
                  </div>
                </div>

                <div className="mb-4 inline-block rounded-full bg-[#EA0000]/10 px-4 py-1 text-sm font-semibold text-[#EA0000]">
                  {solution.subtitle}
                </div>

                <p className="leading-relaxed text-black/70">
                  {solution.risk}
                </p>

                <motion.div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(234, 0, 0, 0.06) 0%, transparent 70%)',
                    pointerEvents: 'none',
                  }}
                />
              </motion.div>

              <motion.div
                className="absolute inset-0 -z-10"
                style={{
                  background: 'linear-gradient(to bottom right, rgba(0, 0, 0, 0.1), transparent)',
                  filter: 'blur(20px)',
                  transform: 'translate(10px, 10px)',
                }}
                whileHover={{
                  transform: 'translate(12px, 12px)',
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
