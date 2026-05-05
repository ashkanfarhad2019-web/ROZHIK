import React from 'react';
import { motion } from 'motion/react';
import { Mail, Heart } from 'lucide-react';

export default function LoveLetter() {
  return (
    <section id="letter" className="py-32 px-4 bg-slate-950/50">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-20 shadow-[0_0_50px_rgba(244,63,94,0.1)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Mail size={160} className="text-rose-400" />
          </div>

          <div className="flex justify-center mb-10">
            <div className="bg-rose-500/20 p-4 rounded-full ring-1 ring-rose-500/30">
              <Heart className="text-rose-500 fill-rose-500 shadow-rose-500/50" size={32} />
            </div>
          </div>

          <h2 className="text-4xl font-serif text-white text-center mb-12">نامەیەک لە ناخی دڵمەوە</h2>
          
          <div className="space-y-8 text-slate-300 font-light text-xl leading-relaxed text-right dir-rtl font-sans">
            <p>
              ئازیزەکەم، هەموو ساڵێک چەژنی لەدایکبوونت پیرۆز بێت. تۆ نەک تەنها وەک شەوقی ڕووناکییەک لە ژیانمدا دەدرەوشێیتەوە، بەڵکو تۆ خودی ژیانی بۆ من.
            </p>
            <p>
              هیچ وشەیەک ناتوانێت گوزارشت لەوە بکات کە چەندە شانازی بە هەبوونی تۆوە دەکەم. تۆ مانای پێداگری و وەفاو و دڵسۆزیت بۆ فێرکردم. لەم ڕۆژەدا، تەنها دۆعای ئەوە دەکەم کە هەمیشە پێکەنین لەسەر لێوەکانت بێت.
            </p>
            <p>
              بەڵێنت پێ دەدەم کە هەمیشە باشترین و میهرەبانترین یار بم بۆت، وەک ئەو باخچە پارێزراوەی کە تێیدا هەست بە ئارامی بکەیت.
            </p>
            <p className="font-serif italic text-3xl text-rose-400 pt-8 drop-shadow-sm">
              بە هیوای داهاتوویەکی پێکەوەیی... ❤️
            </p>
          </div>

          <div className="mt-16 pt-10 border-t border-white/5 flex justify-between items-center text-sm text-slate-500 font-medium font-sans">
            <span>٥ی ئایار، ٢٠٢٦</span>
            <span className="italic uppercase tracking-widest text-rose-400/70">بۆ هەمیشە، یاری تۆ</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
