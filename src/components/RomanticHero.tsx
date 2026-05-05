import React from 'react';
import { motion } from 'motion/react';

export default function RomanticHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-slate-950">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="z-10"
      >
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-rose-400 font-bold tracking-[0.3em] uppercase text-xs mb-8 block font-sans"
        >
          شازادە و فریشتەی ژیانم
        </motion.span>
        
        <h1 className="text-6xl md:text-9xl font-serif text-white mb-8 leading-tight">
          چەژنی لەدایکبوونت <br />
          <span className="text-gradient">پیرۆز بێت!</span>
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12 font-sans"
        >
          لە یادی لەدایکبوونتدا، هەموو جوانییەکانی جیهان بۆ تۆ دەخوازم. تۆ ئەو ڕووناکییەی کە شەوە تاریکەکانمی کردووە بە ڕۆژ.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a 
            href="#letter"
            className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-10 py-4 rounded-full shadow-2xl shadow-rose-900/40 hover:shadow-rose-500/50 transition-all inline-block font-bold text-lg"
          >
            نوسراوە ئاشقانەکەم
          </a>
        </motion.div>
      </motion.div>

      {/* Atmospheric Accents */}
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-rose-900/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] -z-10" />
    </section>
  );
}
