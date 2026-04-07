import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { trendingContent } from '../../data/aivoraData';

const TrendingAgents = () => {
  return (
    <section className="py-24 bg-surface-low border-y border-white/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-manrope text-3xl font-extrabold text-on-surface mb-12">
          {trendingContent.title}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingContent.agents.map((agent, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group bg-white rounded-3xl p-6 shadow-ambient border border-surface-low hover:-translate-y-1 transition-transform cursor-pointer h-full"
            >
              <Link to={`/product/${agent.id || idx + 1}`} className="flex flex-col h-full">
                <div className="aspect-video bg-gradient-to-tr from-surface-low to-white rounded-2xl mb-6 flex items-center justify-center overflow-hidden border border-white relative">
                   <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                   <span className="text-4xl">🤖</span>
                </div>
                
                <h3 className="font-bold text-lg text-on-surface mb-2 line-clamp-1">{agent.title}</h3>
                <p className="text-sm text-secondary mb-6 line-clamp-2 text-balance">{agent.description}</p>
                
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-surface-low">
                  <span className="font-extrabold text-primary text-lg">{agent.price}</span>
                  <span className="text-xs font-semibold text-secondary/70">By {agent.creator}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingAgents;
