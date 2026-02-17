'use client';

import { Ban, CheckCircle, Search, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { useMemo } from 'react';

function rand(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function PhoneMockupSection() {
  const benefits = [
    {
      icon: Shield,
      text: 'Как работают современные схемы, которые в 2025 году лишили пользователей миллиардов долларов',
      position: 'left',
      index: 0,
    },
    {
      icon: Search,
      text: 'Инструкцию, чтобы распознать мошенника, до перевода средств',
      position: 'left',
      index: 1,
    },
    {
      icon: Ban,
      text: 'Рассмотрим методы, которые исключают риск блокировок и чарджбэка',
      position: 'right',
      index: 0,
    },
    {
      icon: CheckCircle,
      text: 'Проверка чистоты кошелька вашего контрагента',
      position: 'right',
      index: 1,
    },
  ];

  const floatingParticles = useMemo(() => {
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
        size: i % 3 === 0 ? 8 : 4,
        isRed: i % 3 === 0,
        top: 10 + r1 * 80,
        left: 10 + r2 * 80,
        duration: 12 + r3 * 6,
        delay: i * 0.8,
        yOffset: -100 - r3 * 60,
        xOffset: (r2 - 0.5) * 70,
      };
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-24 md:py-32">

      <div className="pointer-events-none absolute inset-0">

        <motion.div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.3) 2px, transparent 2px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 2px, transparent 2px)
            `,
            backgroundSize: '60px 60px',
          }}
          animate={{
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute top-[10%] left-[20%] h-[300px] w-[300px]"
          style={{
            background: 'radial-gradient(circle, rgba(234, 0, 0, 0.12) 0%, rgba(234, 0, 0, 0.04) 50%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute right-[20%] bottom-[15%] h-[350px] w-[350px]"
          style={{
            background: 'radial-gradient(circle, rgba(234, 0, 0, 0.1) 0%, rgba(234, 0, 0, 0.03) 50%, transparent 70%)',
            filter: 'blur(90px)',
          }}
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
        />

        {floatingParticles.map(particle => (
          <motion.div
            key={particle.id}
            className="will-change-opacity absolute rounded-full will-change-transform"
            style={{
              background: particle.isRed ? 'rgba(234, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0.25)',
              boxShadow: particle.isRed
                ? '0 0 15px rgba(234, 0, 0, 0.5)'
                : '0 0 10px rgba(0, 0, 0, 0.2)',
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              transform: 'translateZ(0)',
            }}
            animate={{
              y: [0, particle.yOffset, 0],
              x: [0, particle.xOffset, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.3, 0.5],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: particle.delay,
            }}
          />
        ))}

        <motion.div
          className="absolute top-[20%] left-[15%] h-[400px] w-[2px]"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(234, 0, 0, 0.3) 40%, rgba(234, 0, 0, 0.5) 50%, rgba(234, 0, 0, 0.3) 60%, transparent 100%)',
            transform: 'rotate(-20deg)',
            boxShadow: '0 0 30px rgba(234, 0, 0, 0.3)',
          }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scaleY: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute top-[30%] right-[20%] h-[350px] w-[2px]"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(234, 0, 0, 0.25) 40%, rgba(234, 0, 0, 0.4) 50%, rgba(234, 0, 0, 0.25) 60%, transparent 100%)',
            transform: 'rotate(20deg)',
            boxShadow: '0 0 25px rgba(234, 0, 0, 0.25)',
          }}
          animate={{
            opacity: [0.5, 0.9, 0.5],
            scaleY: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl px-6">

        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <h2 className="text-4xl font-black text-black md:text-5xl lg:text-6xl">
            Что вы узнаете для
            {' '}
            <span className="relative inline-block">
              <span className="relative z-10">защиты капитала</span>
              <motion.span
                className="absolute bottom-0 left-0 h-4 w-full bg-[#EA0000]/20"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{ transformOrigin: 'left' }}
              />
            </span>
            ?
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto_1fr]">

            <div className="space-y-8">
              {benefits
                .filter(b => b.position === 'left')
                .map((benefit, index) => (
                  <motion.div
                    key={`left-${index}`}
                    className="group relative ml-auto max-w-md"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >

                    <motion.div
                      className="relative border-2 border-black/10 bg-white p-6 shadow-2xl"
                      style={{
                        clipPath: 'polygon(0% 0%, 100% 0%, 100% 94%, 94% 100%, 0% 100%)',
                      }}
                      whileHover={{
                        y: -5,
                        boxShadow: '0 30px 80px rgba(234, 0, 0, 0.15)',
                      }}
                      transition={{ duration: 0.3 }}
                    >

                      <motion.div
                        className="absolute top-0 right-0 h-16 w-16"
                        style={{
                          background: 'linear-gradient(225deg, rgba(234, 0, 0, 0.12) 0%, transparent 70%)',
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
                      />

                      <motion.div
                        className="mb-4 inline-block"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#EA0000] to-[#c00000] shadow-xl">
                          <benefit.icon className="h-7 w-7 text-white" strokeWidth={2.5} />
                        </div>
                      </motion.div>

                      <p className="text-base leading-relaxed text-black/80">
                        {benefit.text}
                      </p>

                      <div className="absolute top-8 -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#EA0000] shadow-lg">
                        <div className="h-2 w-2 rounded-full bg-white" />
                      </div>

                      <motion.div
                        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        style={{
                          background: 'radial-gradient(circle at 50% 50%, rgba(234, 0, 0, 0.05) 0%, transparent 70%)',
                          pointerEvents: 'none',
                        }}
                      />
                    </motion.div>

                    <div
                      className="absolute inset-0 -z-10"
                      style={{
                        background: 'linear-gradient(to bottom right, rgba(234, 0, 0, 0.08), transparent)',
                        filter: 'blur(20px)',
                        transform: 'translate(10px, 10px)',
                      }}
                    />
                  </motion.div>
                ))}
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >

              <div className="relative mx-auto w-[280px] md:w-[320px]">

                <motion.div
                  className="relative overflow-hidden rounded-[40px] border-8 border-black bg-black shadow-2xl"
                >

                  <div className="relative aspect-[9/19.5] overflow-hidden bg-white">

                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                      <div className="text-center">
                        <Shield className="mx-auto mb-4 h-16 w-16 text-[#EA0000]" />
                      </div>
                      {/* Replace this div with your actual image:
                      <Image
                        src="/your-image.png"
                        alt="App screen"
                        fill
                        className="object-cover"
                      />
                      */}
                    </div>

                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10"
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </div>

                  <div className="absolute top-0 left-1/2 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-black" />
                </motion.div>

                <motion.div
                  className="absolute inset-0 -z-10 rounded-[40px]"
                  style={{
                    background: 'radial-gradient(circle, rgba(234, 0, 0, 0.3) 0%, rgba(234, 0, 0, 0.1) 40%, transparent 70%)',
                    filter: 'blur(40px)',
                  }}
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.5, 0.9, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {[1, 2, 3].map(ring => (
                  <motion.div
                    key={ring}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      width: `${280 + ring * 60}px`,
                      height: `${580 + ring * 120}px`,
                      border: '2px solid rgba(234, 0, 0, 0.1)',
                      borderRadius: '50px',
                    }}
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 4 + ring,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: ring * 0.5,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            <div className="space-y-8">
              {benefits
                .filter(b => b.position === 'right')
                .map((benefit, index) => (
                  <motion.div
                    key={`right-${index}`}
                    className="group relative mr-auto max-w-md"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >

                    <motion.div
                      className="relative border-2 border-black/10 bg-white p-6 shadow-2xl"
                      style={{
                        clipPath: 'polygon(0% 0%, 100% 0%, 100% 94%, 94% 100%, 0% 100%)',
                      }}
                      whileHover={{
                        y: -5,
                        boxShadow: '0 30px 80px rgba(234, 0, 0, 0.15)',
                      }}
                      transition={{ duration: 0.3 }}
                    >

                      <motion.div
                        className="absolute top-0 left-0 h-16 w-16"
                        style={{
                          background: 'linear-gradient(135deg, rgba(234, 0, 0, 0.12) 0%, transparent 70%)',
                          clipPath: 'polygon(0% 0%, 60% 0%, 0% 100%)',
                        }}
                        animate={{
                          opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: index * 0.5 + 1,
                        }}
                      />

                      <motion.div
                        className="mb-4 inline-block"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#EA0000] to-[#c00000] shadow-xl">
                          <benefit.icon className="h-7 w-7 text-white" strokeWidth={2.5} />
                        </div>
                      </motion.div>

                      <p className="text-base leading-relaxed text-black/80">
                        {benefit.text}
                      </p>

                      <div className="absolute top-8 -right-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#EA0000] shadow-lg">
                        <div className="h-2 w-2 rounded-full bg-white" />
                      </div>

                      <motion.div
                        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        style={{
                          background: 'radial-gradient(circle at 50% 50%, rgba(234, 0, 0, 0.05) 0%, transparent 70%)',
                          pointerEvents: 'none',
                        }}
                      />
                    </motion.div>

                    <div
                      className="absolute inset-0 -z-10"
                      style={{
                        background: 'linear-gradient(to bottom left, rgba(234, 0, 0, 0.08), transparent)',
                        filter: 'blur(20px)',
                        transform: 'translate(-10px, 10px)',
                      }}
                    />
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
