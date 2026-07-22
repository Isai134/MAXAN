'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useState } from 'react';

export function Accordion({ items }: { items: { question: string; answer: string }[] }) {
  const [active, setActive] = useState<number | null>(0);
  return (
    <div className="divide-y divide-ink/10 rounded-3xl border border-ink/10 bg-white px-5 shadow-soft sm:px-8">
      {items.map((item, index) => {
        const open = active === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setActive(open ? null : index)}
              className="flex w-full items-start justify-between gap-6 py-6 text-left"
              aria-expanded={open}
            >
              <span className="text-base font-semibold leading-7 text-ink sm:text-lg">
                {item.question}
              </span>
              <Plus
                className={`mt-1 h-5 w-5 shrink-0 text-maxan-700 transition-transform ${open ? 'rotate-45' : ''}`}
                aria-hidden="true"
              />
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="max-w-4xl pb-6 leading-8 text-slate-600">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
