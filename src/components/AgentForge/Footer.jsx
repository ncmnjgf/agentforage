import React from 'react';
import { NavLink } from 'react-router-dom';
import { footerContent } from '../../data/aivoraData';
import { Twitter, Linkedin, Github } from 'lucide-react';

const iconMap = {
  Twitter,
  Linkedin,
  GitHub: Github
};

const Footer = () => {
  return (
    <footer className="py-20 bg-surface border-t border-surface-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <NavLink to="/" className="inline-block mb-6">
              <span className="font-manrope text-2xl font-extrabold tracking-tight text-on-surface">
                {footerContent.brand}
              </span>
            </NavLink>
            <p className="text-secondary max-w-sm leading-relaxed mb-8">
              {footerContent.description}
            </p>
            <div className="flex gap-4">
              {footerContent.socials.map((social) => {
                const Icon = iconMap[social.label] || Twitter;
                return (
                  <a key={social.label} href={social.href} className="p-3 bg-surface-lowest rounded-xl text-secondary hover:text-primary transition-colors shadow-sm border border-surface-low">
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {footerContent.columns.map((col, idx) => (
            <div key={idx}>
              <h4 className="font-bold text-on-surface mb-6 uppercase tracking-widest text-xs">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map(link => (
                  <li key={link.label}>
                    <NavLink to={link.href} className="text-secondary hover:text-primary transition-colors font-medium">
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-surface-low flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-secondary/60">
          <p>© 2026 {footerContent.brand} Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
