import React from 'react';
import { NavLink } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { creatorsContent } from '../../data/aivoraData';

const ForCreators = () => {
  return (
    <section className="py-32 bg-surface overflow-hidden relative">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-[radial-gradient(circle_at_center,rgba(0,88,195,0.05),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-manrope text-4xl md:text-5xl font-extrabold text-on-surface mb-6 leading-tight">
              {creatorsContent.title}
            </h2>
            <p className="text-lg text-secondary leading-relaxed mb-8 max-w-lg">
              {creatorsContent.description}
            </p>
            
            <ul className="space-y-4 mb-10">
              {creatorsContent.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-center gap-3 text-on-surface font-semibold">
                  <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>

            <NavLink
              to="/for-creators"
              className="inline-flex items-center gap-2 bg-primary text-white py-4 px-8 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:-translate-y-1 transition-transform"
            >
              {creatorsContent.cta}
              <ArrowRight size={20} />
            </NavLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
             <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-surface-lowest to-surface-low border border-white/60 shadow-ambient p-8 flex flex-col">
               <div className="flex-1 bg-white rounded-[2rem] shadow-sm border border-surface-low relative overflow-hidden flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center text-primary text-3xl">
                      💸
                    </div>
                    <div className="text-3xl font-extrabold text-on-surface mb-2">$4,250.00</div>
                    <div className="text-sm font-bold text-secondary uppercase tracking-widest">MONTHLY EARNINGS</div>
                  </div>
               </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForCreators;
