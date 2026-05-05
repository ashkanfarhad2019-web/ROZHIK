import React from 'react';
import { motion } from 'motion/react';
import { Mail, Heart } from 'lucide-react';

export default function LoveLetter() {
  return (
    <section id="letter" className="py-24 px-4 bg-rose-50/30">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/70 backdrop-blur-md border border-white/50 rounded-3xl p-8 md:p-16 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <Mail size={120} className="text-rose-900" />
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-rose-100 p-3 rounded-full">
              <Heart className="text-rose-500 fill-rose-500" size={24} />
            </div>
          </div>

          <h2 className="text-3xl font-serif text-slate-800 text-center mb-8">نامەیەکی تایبەت بۆ تۆ</h2>
          
          <div className="space-y-6 text-slate-700 font-light text-lg leading-relaxed text-right dir-rtl">
            <p>
              خۆشەویستم، لەم ڕۆژە تایبەتەدا کە ڕۆژی لەدایکبوونی تۆیە، دەمەوێت پێتبڵێم چەندە سوپاسگوزارم کە تۆ لە ژیانمدای. 
            </p>
            <p>
              تۆ تەنها خۆشەویستەکەم نیت، بەڵکو باشترین هاوڕێ و هەموو کەسی منیت. هەر چرکەیەک کە لەگەڵ تۆدا بەسەری دەبەم، وەک خەونێکی جوان وایە کە قەت نەمەوێت لێی بەخەبەر بێمەوە.
            </p>
            <p>
              هیوادارم ئەم ساڵە پڕ بێت لە سەرکەوتن و پێکەنین بۆ تۆ. من هەمیشە لەپشتت دەبم و پشتگیریت دەکەم لە هەموو هەنگاوێکدا.
            </p>
            <p className="font-serif italic text-2xl text-rose-500 pt-6">
              بۆ هەمیشە خۆشم دەوێیت... ❤️
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-rose-100 flex justify-between items-center text-sm text-slate-400 font-medium">
            <span>٥ی ئایار، ٢٠٢٦</span>
            <span className="italic uppercase tracking-widest">خۆشەویستەکەت</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
