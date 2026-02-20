/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks-extra/no-direct-set-state-in-use-effect */
/* eslint-disable style/multiline-ternary */
/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

function rand(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function SecurityBlock() {
  const stats = [
    { icon: '/loss.svg', value: 'Потери от скама', label:
        'В 2025-м нелегальные потоки в крипте взлетели на 145%, достигнув $158 млрд. Рост убытков от скама — 34%.', highlight: '$17 млрд' },
    { icon: '/brain.svg', value: 'AI-агрессия', label:
        'Стала эффективней. Применение Deepfake и авто-фишинга выросла на 1400%.', highlight: 'В 4,5 раза' },
    { icon: '/dollar.svg', value: 'Происхождение средств', label:
        'Вероятность запроса документов от банка, при переводе от $10 000.', highlight: 'Контроли' },
    { icon: '/lock.svg', value: 'Блокировка счета', label:
        'Риск блокировок британских банков для транзакций с криптоактивами.', highlight: 'Блокировки' },
  ];

  const [heavy, setHeavy] = useState(false);

  useEffect(() => {
    try {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const saveData = (navigator as any)?.connection?.saveData;
      const isLarge = window.matchMedia('(min-width: 1024px)').matches;
      setHeavy(isLarge && !reduce && !saveData);
    } catch {
      setHeavy(false);
    }
  }, []);

  const particles = useMemo(() => {
    const count = heavy ? 6 : 2;
    return Array.from({ length: count }).map((_, i) => {
      const r1 = rand(i * 3 + 1);
      const r2 = rand(i * 3 + 2);
      const r3 = rand(i * 3 + 3);

      const size = i % 2 === 0 ? 6 : 3;
      const top = `${18 + Math.floor(r1 * 64)}%`;
      const left = `${8 + Math.floor(r2 * 84)}%`;
      const dur = 8 + Math.floor(r3 * 6);
      const xOffset = (r2 - 0.5) * 40;
      const yOffset = 50 + r3 * 60;

      return {
        id: i,
        size,
        top,
        left,
        dur,
        xOffset,
        yOffset,
        color: i % 2 === 0 ? 'rgba(234,0,0,0.75)' : 'rgba(255,255,255,0.16)',
        shadow:
          i % 2 === 0 ? '0 0 10px rgba(234,0,0,0.35)' : '0 0 8px rgba(255,255,255,0.06)',
        delay: i * 0.5,
      };
    });
  }, [heavy]);

  return (
    <section className="relative overflow-hidden bg-black py-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(10,10,10,1) 50%, rgba(0,0,0,1) 100%)',
        }}
      />

      {heavy
        ? (
            <>
              <motion.div
                className="absolute top-[8%] -left-[4%] h-[260px] w-[260px] rounded-2xl"
                style={{
                  background:
                'linear-gradient(135deg, rgba(234,0,0,0.08) 0%, rgba(0,0,0,0.02) 100%)',
                  clipPath: 'polygon(0% 20%, 70% 0%, 100% 30%, 80% 100%, 0% 85%)',
                  transform: 'translateZ(0)',
                  willChange: 'transform, opacity',
                }}
                animate={{ y: [0, 18, 0], rotateZ: [0, 3, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
              />

              <motion.div
                className="absolute top-[38%] -right-[3%] h-[220px] w-[220px] rounded-2xl"
                style={{
                  background: 'linear-gradient(225deg, rgba(0,0,0,0.06) 0%, rgba(255,255,255,0.02) 100%)',
                  clipPath: 'polygon(20% 0%, 100% 10%, 100% 100%, 10% 90%)',
                  transform: 'translateZ(0)',
                  willChange: 'transform, opacity',
                }}
                animate={{ y: [0, -20, 0], rotateZ: [0, -2.5, 0] }}
                transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              />

              <motion.div
                className="absolute top-[18%] right-[12%] h-[140px] w-[140px] rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(234,0,0,0.16) 0%, transparent 60%)',
                  transform: 'translateZ(0)',
                  willChange: 'transform, opacity',
                }}
                animate={{ scale: [1, 1.18, 1], opacity: [0.45, 0.9, 0.45] }}
                transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
              />
            </>
          ) : null}

      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            top: p.top,
            left: p.left,
            background: p.color,
            boxShadow: p.shadow,
            transform: 'translateZ(0)',
            willChange: 'transform, opacity',
            borderRadius: '9999px',
          }}
          animate={{
            y: [0, -p.yOffset, 0],
            x: [0, p.xOffset, 0],
            opacity: [0, 1, 0],
            scale: [0.6, 1.1, 0.6],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        />
      ))}

      <div className="relative container mx-auto max-w-7xl px-6">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mt-2 text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl">
            Старые правила больше
            <span className="relative ml-2 inline-block">
              <span className="relative z-10">
                не работают
              </span>
              <motion.span
                className="absolute bottom-0 left-0 h-2 w-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{
                  background: 'linear-gradient(90deg, rgba(234,0,0,1), rgba(234,0,0,0.6))',
                  transformOrigin: 'left',
                }}
              />
            </span>
            {' '}
          </h2>
        </motion.div>

        <motion.div
          className="mb-10 max-w-3xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="relative border-l-4 border-[#c20000] pl-6">
            <motion.div
              className="absolute top-0 left-0 h-full w-1 bg-[#c20000]"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              style={{ transformOrigin: 'top' }}
            />
            <p className="text-lg leading-relaxed text-white/85">
              В 2026 году индустрия перешла на этап тотального комплаенса. То, что раньше считалось «безопасной сделкой»,
              сегодня попадает под автоматические фильтры мониторинга.
            </p>
          </div>
        </motion.div>

        <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-[#222] bg-[#050505] p-6"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={heavy ? { y: -6 } : {}}
            >
              <div className="relative z-10 p-4">
                <div className="mb-3 flex items-center gap-4">
                  <div className="rounded-xl border border-[#222] bg-[#0a0a0a] p-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#c20000]">
                      <Image className="" src={stat.icon} alt="icon" width={20} height={20} />
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-extrabold text-[#c20000]">{stat.value}</div>
                    <div className="mt-1 inline-block rounded-full bg-[#c20000] px-3 py-1 text-xs font-semibold text-black">
                      {stat.highlight}
                    </div>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-white/80">{stat.label}</p>
              </div>

              <motion.div
                className="pointer-events-none absolute inset-0 opacity-0"
                style={{
                  background: 'linear-gradient(180deg, rgba(234,0,0,0.04), transparent)',
                }}
                whileHover={{ opacity: heavy ? 1 : 0 }}
                transition={{ duration: 0.25 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
