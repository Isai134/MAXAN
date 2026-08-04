'use client';

import { animate, motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export function AnimatedCounter({
  value,
  suffix = '',
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.2,
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, value]);
  return (
    <motion.div ref={ref} className="border-t border-ink/15 pt-5">
      <p className="text-4xl font-semibold tracking-tight text-maxan-700">
        {display}
        {suffix}
      </p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{label}</p>
    </motion.div>
  );
}
