import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ctaSectionContent } from '../../data/aivoraData';

const CtaSection = () => {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-manrope text-4xl md:text-6xl font-extrabold text-on-surface tracking-tight mb-6">
          {ctaSectionContent.title}
        </h2>
        <p className="text-xl text-secondary mb-12">
          {ctaSectionContent.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NavLink
            to="/browse"
            className="w-full sm:w-auto bg-primary text-white py-4 px-8 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:-translate-y-1 transition-transform flex items-center justify-center gap-2"
          >
            {ctaSectionContent.primaryCTA}
            <ArrowRight size={20} />
          </NavLink>
          <NavLink
            to="/for-creators"
            className="w-full sm:w-auto bg-surface-lowest text-on-surface py-4 px-8 rounded-2xl font-bold text-lg border border-outline-variant/30 hover:bg-surface-low transition-colors text-center"
          >
            {ctaSectionContent.secondaryCTA}
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
