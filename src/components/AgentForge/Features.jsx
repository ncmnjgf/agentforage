import React from 'react';
import { Rocket, Workflow, Puzzle, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { features } from '../../data/agentForgeData';

const iconMap = {
  Rocket: Rocket,
  Workflow: Workflow,
  Puzzle: Puzzle,
};

const Features = () => {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="font-manrope text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-6">
            Engineering the future of autonomous operations
          </h2>
          <p className="text-lg text-secondary">
            Our platform provides the specialized infrastructure needed to scale agentic workflows across any enterprise environment. 
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-[2rem] bg-surface-lowest shadow-ambient border border-white/40 hover:bg-white hover:scale-[1.02] transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300">
                  <Icon size={28} />
                </div>
                <h3 className="font-manrope text-xl font-bold text-on-surface mb-4">
                  {feature.title}
                </h3>
                <p className="text-secondary leading-relaxed mb-6">
                  {feature.description}
                </p>
                <div className="mt-auto inline-flex items-center gap-1 text-primary font-bold text-sm hover:gap-2 transition-all cursor-pointer">
                  Learn more <ChevronRight size={16} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
