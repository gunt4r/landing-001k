'use client';

import { easeInOut } from 'framer-motion';
import { CircleDollarSign, LibraryBig, Shield, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useMemo } from 'react';
// Seed-based random for deterministic animations
function rand(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function AuthorBlock() {
  const achievements = [
    {
      title: 'Экспертиза в безопасности',
      description: 'Более 5 лет работы с крипто-безопасностью и AML-комплаенсом',
      icon: <Shield />,
    },
    {
      title: 'Защита капитала',
      description: 'Помог сохранить более $50M клиентских средств от блокировок',
      icon: <CircleDollarSign />,
    },
    {
      title: 'Обучение трейдеров',
      description: '10,000+ специалистов прошли обучение по безопасным практикам',
      icon: <LibraryBig />,
    },
    {
      title: 'Актуальные методики',
      description: 'Постоянный мониторинг новых схем мошенничества и регуляций',
      icon: <Zap />,
    },
  ];

  // Optimized particles with useMemo
  const particles = useMemo(() => {
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

  return (
    <section className="relative overflow-hidden bg-black py-32">

      <div className="pointer-events-none absolute inset-0">

        <motion.div
          className="absolute -top-40 -left-40 h-[500px] w-[500px]"
          style={{
            background:
              'radial-gradient(circle, rgba(234, 0, 0, 0.5) 0%, rgba(234, 0, 0, 0.25) 40%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: easeInOut,
          }}
        />

        <motion.div
          className="absolute -right-40 -bottom-40 h-[500px] w-[500px]"
          style={{
            background:
              'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 40%, transparent 70%)',
            filter: 'blur(100px)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: easeInOut,
            delay: 2,
          }}
        />

        <motion.div
          className="absolute top-[10%] left-[20%] h-[600px] w-[4px]"
          style={{
            background:
              'linear-gradient(to bottom, transparent 0%, rgba(234, 0, 0, 0.6) 25%, rgba(234, 0, 0, 0.8) 50%, rgba(234, 0, 0, 0.6) 75%, transparent 100%)',
            transform: 'rotate(-20deg)',
            boxShadow: '0 0 50px rgba(234, 0, 0, 0.6), 0 0 100px rgba(234, 0, 0, 0.3)',
          }}
          animate={{
            opacity: [0.6, 1, 0.6],
            scaleY: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: easeInOut,
          }}
        />

        <motion.div
          className="absolute top-[25%] left-[5%] h-[320px] w-[320px]"
          style={{
            background:
              'linear-gradient(135deg, rgba(234, 0, 0, 0.2) 0%, rgba(234, 0, 0, 0.08) 100%)',
            clipPath: 'polygon(0% 25%, 65% 0%, 100% 35%, 75% 100%, 0% 85%)',
            boxShadow:
              '0 40px 100px rgba(234, 0, 0, 0.3), inset 0 2px 0 rgba(255, 255, 255, 0.15)',
            border: '2px solid rgba(234, 0, 0, 0.25)',
          }}
          animate={{
            y: [0, 40, 0],
            rotateZ: [0, 7, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: easeInOut,
          }}
        />

        <motion.div
          className="absolute top-[60%] right-[13%] h-[260px] w-[260px]"
          style={{
            background:
              'linear-gradient(225deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%)',
            clipPath: 'polygon(20% 0%, 100% 10%, 100% 100%, 10% 90%)',
            boxShadow:
              '0 50px 120px rgba(0, 0, 0, 0.6), inset 0 2px 0 rgba(255, 255, 255, 0.2)',
            border: '2px solid rgba(255, 255, 255, 0.15)',
          }}
          animate={{
            y: [0, -35, 0],
            rotateZ: [0, -6, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: easeInOut,
            delay: 3,
          }}
        />

        {particles.map(p => (
          <motion.div
            key={`particle-${p.id}`}
            className="will-change-opacity absolute rounded-full will-change-transform"
            style={{
              background: p.isRed ? 'rgba(234, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.6)',
              boxShadow: p.isRed
                ? '0 0 20px rgba(234, 0, 0, 0.7), 0 0 40px rgba(234, 0, 0, 0.4)'
                : '0 0 15px rgba(255, 255, 255, 0.5)',
              width: `${p.size}px`,
              height: `${p.size}px`,
              top: `${p.top}%`,
              left: `${p.left}%`,
              transform: 'translateZ(0)',
            }}
            animate={{
              y: [0, p.yOffset, 0],
              x: [0, p.xOffset, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1.3, 0.5],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: easeInOut,
              delay: p.delay,
            }}
          />
        ))}

        <motion.div
          className="absolute top-[40%] right-[30%] h-[500px] w-[3px]"
          style={{
            background:
              'linear-gradient(to bottom, transparent 0%, rgba(234, 0, 0, 0.5) 30%, rgba(234, 0, 0, 0.7) 50%, rgba(234, 0, 0, 0.5) 70%, transparent 100%)',
            transform: 'rotate(25deg)',
            boxShadow: '0 0 40px rgba(234, 0, 0, 0.5)',
          }}
          animate={{
            opacity: [0.5, 0.9, 0.5],
            scaleY: [1, 1.15, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: easeInOut,
            delay: 4,
          }}
        />
      </div>

      <div className="relative container mx-auto max-w-7xl px-6">

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >

                <motion.div
                  className="relative overflow-hidden border-2 border-white/20 bg-white/10 backdrop-blur-md"
                  whileHover={{
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    borderColor: 'rgba(234, 0, 0, 0.5)',
                  }}
                  transition={{ duration: 0.3 }}
                >

                  <motion.div
                    className="absolute top-0 left-0 h-full w-2 bg-[#EA0000]"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                    style={{
                      transformOrigin: 'top',
                      boxShadow: '0 0 20px rgba(234, 0, 0, 0.6)',
                    }}
                  />

                  <motion.div
                    className="absolute top-0 right-0 h-28 w-28"
                    style={{
                      background:
                        'linear-gradient(225deg, rgba(234, 0, 0, 0.25) 0%, transparent 70%)',
                      clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%)',
                    }}
                    animate={{
                      opacity: [0.5, 0.9, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: easeInOut,
                      delay: index * 0.5,
                    }}
                  />

                  <div className="relative flex items-start gap-6 p-8">

                    <motion.div
                      className="flex-shrink-0"
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative flex h-16 w-16 items-center justify-center">

                        <motion.div
                          className="absolute inset-0 rounded-full border-3 border-[#EA0000]/50"
                          animate={{
                            rotate: 360,
                          }}
                          transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                          style={{
                            boxShadow: '0 0 15px rgba(234, 0, 0, 0.4)',
                          }}
                        />

                        <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#EA0000] to-[#b00000] text-2xl shadow-2xl">
                          {achievement.icon}
                        </div>

                        <motion.div
                          className="absolute inset-0 rounded-full"
                          style={{
                            background:
                              'radial-gradient(circle, rgba(234, 0, 0, 0.6) 0%, transparent 70%)',
                            filter: 'blur(15px)',
                          }}
                          animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.6, 1, 0.6],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: easeInOut,
                          }}
                        />
                      </div>
                    </motion.div>

                    <div className="flex-1">
                      <h3 className="mb-2 text-xl font-bold text-white">
                        {achievement.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-white/80">
                        {achievement.description}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        'linear-gradient(90deg, rgba(234, 0, 0, 0.1) 0%, transparent 60%)',
                    }}
                  />
                </motion.div>

                <motion.div
                  className="absolute inset-0 -z-10"
                  style={{
                    background:
                      'linear-gradient(to bottom right, rgba(234, 0, 0, 0.3), rgba(0, 0, 0, 0.5))',
                    filter: 'blur(25px)',
                    transform: 'translateY(10px) translateX(10px)',
                  }}
                  whileHover={{
                    transform: 'translateY(15px) translateX(15px)',
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >

            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">

              <motion.div
                className="absolute inset-0 z-10 rounded-xl "
              />

              <div className="relative flex h-full w-full items-center justify-center">
                <Image
                  src="/client.png"
                  alt="Серега 001к"
                  fill
                  className="rounded-xl object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              <motion.div
                className="absolute top-0 left-0 z-20 h-36 w-36"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(234, 0, 0, 0.4) 0%, transparent 70%)',
                  clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)',
                }}
                animate={{
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: easeInOut,
                }}
              />

              <motion.div
                className="absolute right-0 bottom-0 z-20 h-36 w-36"
                style={{
                  background:
                    'linear-gradient(315deg, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
                  clipPath: 'polygon(100% 100%, 100% 0%, 0% 100%)',
                }}
                animate={{
                  opacity: [0.5, 0.9, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: easeInOut,
                  delay: 2,
                }}
              />

              <motion.div
                className="absolute -inset-10 -z-10"
                style={{
                  background:
                    'radial-gradient(ellipse at center, rgba(234, 0, 0, 0.5) 0%, rgba(234, 0, 0, 0.2) 50%, transparent 70%)',
                  filter: 'blur(50px)',
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: easeInOut,
                }}
              />
            </div>

            <div
              className="absolute inset-0 -z-20"
              style={{
                background:
                  'linear-gradient(to bottom right, rgba(234, 0, 0, 0.5), rgba(0, 0, 0, 0.7))',
                filter: 'blur(40px)',
                transform: 'translateY(25px) translateX(25px)',
              }}
            />

            <motion.div
              className="absolute -right-10 -bottom-10 -z-10 h-56 w-56"
              style={{
                border: '4px solid rgba(234, 0, 0, 0.3)',
                borderRadius: '50%',
                background:
                  'radial-gradient(circle, transparent 60%, rgba(234, 0, 0, 0.1) 100%)',
                boxShadow: '0 0 50px rgba(234, 0, 0, 0.3)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
                opacity: [0.5, 0.9, 0.5],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: easeInOut,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
