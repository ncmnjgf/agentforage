import React from 'react';
import { motion } from 'framer-motion';
import { howItWorksContent } from '../../data/aivoraData';

const HowItWorks = () => {
  return (
    <section className="py-24 bg-surface-low border-y border-white/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-manrope text-4xl md:text-5xl font-extrabold text-on-surface mb-6">
            {howItWorksContent.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-px bg-outline-variant/50 pointer-events-none" />

          {howItWorksContent.steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center p-6"
            >
              <div className="w-14 h-14 bg-surface-lowest text-primary text-xl font-bold rounded-full flex items-center justify-center shadow-ambient border border-white/80 mb-6">
                 {idx + 1}
              </div>
              <h3 className="font-bold text-xl text-on-surface mb-4">{step.title}</h3>
              <p className="text-secondary leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
