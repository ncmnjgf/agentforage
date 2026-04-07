import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { heroContent } from '../../data/aivoraData';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-low text-primary font-bold text-sm mb-8 border border-white/40">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Now in Public Beta
            </div>

            <h1 className="font-manrope text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface leading-[1.05] mb-8">
              {heroContent.headline.split(' ').map((word, i) => (
                <span key={i} className={word.toLowerCase() === 'ai' || word.toLowerCase() === 'agents' ? 'text-primary' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>

            <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-xl mb-12">
              {heroContent.subheading}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <NavLink
                to="/signup"
                className="bg-primary text-white py-4 px-8 rounded-2xl font-bold text-lg shadow-2xl shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                {heroContent.primaryCTA}
                <ArrowRight size={20} />
              </NavLink>
              <NavLink
                to="/docs"
                className="bg-surface-low text-on-surface py-4 px-8 rounded-2xl font-bold text-lg border border-white/50 hover:bg-surface-lowest transition-all flex items-center gap-2"
              >
                <Play size={18} fill="currentColor" />
                {heroContent.secondaryCTA}
              </NavLink>
            </div>

            <div className="flex items-center gap-6 text-sm font-semibold text-secondary/70">
              <span className="flex items-center gap-2">{heroContent.trustLine}</span>
            </div>
          </motion.div>

          {/* Visual Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 w-full max-w-md mx-auto aspect-[4/5] flex flex-col justify-center gap-4">
              {heroContent.agentCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.15, ease: "easeOut" }}
                  className={`relative p-6 rounded-3xl bg-surface-lowest shadow-ambient border border-white/50 backdrop-blur-xl ${
                    idx === 1 ? "ml-8" : idx === 2 ? "ml-16" : ""
                  } hover:-translate-y-1 transition-transform cursor-pointer`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-on-surface text-lg">{card.title}</h3>
                  </div>
                  <p className="text-sm text-secondary mb-4">{card.description}</p>
                  <div className="flex items-center justify-between text-xs font-semibold text-secondary/80">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">⭐ {card.rating}</span>
                    </div>
                    <span>{card.users}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Floaties */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -left-4 bg-white p-4 rounded-2xl shadow-ambient border border-surface-low z-20 hidden md:block"
            >
              <div className="w-12 h-2 bg-primary/20 rounded-full mb-3" />
              <div className="w-20 h-2 bg-surface-low rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
