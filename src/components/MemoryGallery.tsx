import React from 'react';
import { motion } from 'motion/react';

const memories = [
  {
    id: 1,
    title: 'ساتە جوانەکان',
    url: 'https://images.unsplash.com/photo-1518131394553-c3fd88299789?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 2,
    title: 'هەموو کاتێک لەگەڵ تۆ',
    url: 'https://images.unsplash.com/photo-1516589174184-c685266e430c?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 3,
    title: 'خەندەکانت',
    url: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 4,
    title: 'داهاتوومان',
    url: 'https://images.unsplash.com/photo-1534533983688-c7b8e13fd3b6?auto=format&fit=crop&q=80&w=600',
  },
];

export default function MemoryGallery() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-slate-800 mb-4">بیرەوەرییەکانمان</h2>
          <div className="w-20 h-1 bg-rose-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img 
                src={memory.url} 
                alt={memory.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium text-lg">{memory.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
