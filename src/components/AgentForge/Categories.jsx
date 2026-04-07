import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, FileText, Code, Target, Zap, Rocket } from 'lucide-react';
import { categoriesContent } from '../../data/aivoraData';

const iconMap = {
  "Customer Support AI": MessageSquare,
  "Content Creation": FileText,
  "Marketing Automation": Target,
  "Sales & Lead Generation": Rocket,
  "Developer Tools": Code,
  "Productivity AI": Zap,
};

const Categories = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-manrope text-3xl font-extrabold text-on-surface mb-12">
          {categoriesContent.title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoriesContent.categories.map((category, idx) => {
            const Icon = iconMap[category.title] || Rocket;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-6 rounded-3xl bg-surface-lowest shadow-ambient border border-white/50 hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-lg text-on-surface mb-2">{category.title}</h3>
                <p className="text-secondary text-sm leading-relaxed text-balance">
                  {category.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
