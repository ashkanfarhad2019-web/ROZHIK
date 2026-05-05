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
import MemoryGallery from './components/MemoryGallery.tsx';
import { motion } from 'motion/react';

export default function App() {
  return (
    <main className="relative selection:bg-rose-200 selection:text-rose-900">
      <FloatingHearts />
      
      <div className="relative z-10">
        <RomanticHero />
        
        <div className="bg-white">
          <MemoryGallery />
          <LoveLetter />
        </div>

        <footer className="py-12 bg-white text-center border-t border-rose-50">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4 text-slate-400 text-sm tracking-widest uppercase"
          >
            <p>دروستکراوە بە خۆشەویستییەوە بۆ جەژنی لەدایکبوونی تۆ</p>
            <div className="h-px w-12 bg-rose-200" />
            <p>© ٢٠٢٦</p>
          </motion.div>
        </footer>
      </div>

      {/* Persistent "Music" Indicator (Decorative) */}
      <div className="fixed bottom-8 left-8 z-50 flex items-center gap-3 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-rose-100 shadow-sm">
        <div className="flex gap-1">
          {[0.2, 0.5, 0.3, 0.6].map((h, i) => (
            <motion.div 
              key={i}
              animate={{ height: ['4px', '16px', '4px'] }}
              transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
              className="w-0.5 bg-rose-400 rounded-full"
            />
          ))}
        </div>
        <span className="text-[10px] font-medium text-rose-500 uppercase tracking-tighter">Romantic Melody</span>
      </div>
    </main>
  );
}
