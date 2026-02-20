import { animate, useInView, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type AnimatedCounterProps = {
  start?: number;
  end: number;
  duration?: number; // seconds
  decimals?: number;
  separator?: boolean; // thousands separator
  prefix?: string;
  suffix?: string;
  className?: string;
  once?: boolean; // if true - animate only the first time it comes into view
};

export default function AnimatedCounter({
  start = 0,
  end,
  duration = 1.2,
  decimals = 0,
  separator = true,
  prefix = '',
  suffix = '',
  className,
  once = true,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once });
  const motionVal = useMotionValue(start);
  const [current, setCurrent] = useState<number>(start);

  useEffect(() => {
    const unsub = motionVal.on('change', (v: number) => {
      setCurrent(Number(v));
    });
    return () => unsub();
  }, [motionVal]);

  useEffect(() => {
    if (inView) {
      const controls = animate(motionVal, end, {
        duration,
        ease: [0.22, 1, 0.36, 1],
      });
      return () => controls.stop();
    } else if (!once) {
      animate(motionVal, start, { duration: 0.2 });
      return () => {};
    }
    return () => {};
  }, [inView, end, duration, once, motionVal, start]);

  const formatNumber = (value: number) => {
    const rounded = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
    if (separator) {
      const [intPart, fracPart] = String(rounded).split('.');
      const intWithSep = Number(intPart).toLocaleString(undefined);
      return fracPart ? `${intWithSep}.${fracPart}` : intWithSep;
    }
    return String(rounded);
  };

  return (
    <span ref={ref} className={className} aria-live="polite">
      {prefix}
      {formatNumber(current)}
      {suffix}
    </span>
  );
}
