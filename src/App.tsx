/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import FloatingHearts from './components/FloatingHearts.tsx';
import RomanticHero from './components/RomanticHero.tsx';
import LoveLetter from './components/LoveLetter.tsx';
import { motion } from 'motion/react';

export default function App() {
  return (
    <main className="relative selection:bg-rose-500/30 selection:text-white bg-slate-950">
      <FloatingHearts />
      
      <div className="relative z-10">
        <RomanticHero />
        
        <LoveLetter />

        <footer className="py-20 bg-slate-950 text-center border-t border-white/5">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6 text-slate-500 text-xs tracking-[0.3em] uppercase font-sans"
          >
            <p>دروستکراوە بە خۆشەویستییەوە بۆ جەژنی لەدایکبوونت</p>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-rose-500/50 to-transparent" />
            <p>© ٢٠٢٦ - بۆ ئەوەی هەمیشە بمێنیتەوە</p>
          </motion.div>
        </footer>
      </div>
    </main>
  );
}
