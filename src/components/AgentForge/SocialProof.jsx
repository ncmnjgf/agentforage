import React from 'react';
import { motion } from 'framer-motion';
import { socialProofContent } from '../../data/aivoraData';

const SocialProof = () => {
  return (
    <section className="py-24 bg-primary text-white text-center">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-manrope text-3xl font-extrabold mb-16 opacity-90">
          {socialProofContent.title}
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {socialProofContent.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col gap-2"
            >
              <div className="font-manrope text-4xl md:text-5xl font-extrabold">{stat.value}</div>
              <div className="text-sm md:text-base font-bold text-white/70 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
