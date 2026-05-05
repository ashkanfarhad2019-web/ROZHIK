import React from 'react';
import { motion } from 'motion/react';

export default function RomanticHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10"
      >
        <motion.span 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-rose-600 font-medium tracking-widest uppercase text-sm mb-6 block"
        >
          بۆ جوانترین کچ لە جیهاندا
        </motion.span>
        
        <h1 className="text-6xl md:text-8xl font-serif text-slate-900 mb-8 leading-tight">
          چەژنی لەدایکبوونت <br />
          <span className="text-rose-500 italic">پیرۆز بێت!</span>
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-slate-600 text-lg max-w-xl mx-auto font-light leading-relaxed mb-10"
        >
          هیوای ژیانێکی پڕ لە ئارامی و دڵخۆشیت بۆ دەخوازم. تۆ مانای دڵخۆشی منیت و هەمیشە وەک ئەستێرەیەک لە ژیانمدا دەدرەوشێیتەوە.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a 
            href="#letter"
            className="bg-rose-500 text-white px-8 py-4 rounded-full shadow-lg shadow-rose-200 hover:bg-rose-600 transition-colors inline-block font-medium"
          >
            نوسراوە ئاشقانەکەم بخوێنەرەوە
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl -z-10" />
    </section>
  );
}
