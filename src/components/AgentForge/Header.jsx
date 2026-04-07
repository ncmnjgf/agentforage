import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';
import { navLinks } from '../../data/aivoraData';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-4' : 'py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex items-center justify-between rounded-full bg-surface-lowest/80 backdrop-blur-xl px-6 py-3 shadow-ambient border border-white/20`}>
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <Rocket size={20} fill="currentColor" />
            </div>
            <span className="font-manrope text-xl font-extrabold tracking-tight text-on-surface">
              Aivora
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                className="text-sm font-bold text-secondary hover:text-primary transition-colors"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <NavLink to="/login" className="text-sm font-bold text-secondary hover:text-primary transition-colors">
              Login
            </NavLink>
            <NavLink
              to="/for-creators"
              className="bg-primary text-white text-sm font-bold py-2.5 px-6 rounded-full shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
            >
              Start Selling
            </NavLink>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-on-surface p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-surface/95 backdrop-blur-2xl z-40 md:hidden transition-all duration-500 ${
        mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              className="text-2xl font-bold text-on-surface"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="flex flex-col gap-4 w-full px-12 pt-8">
            <NavLink
              to="/login"
              className="w-full py-4 text-center text-lg font-bold text-on-surface border border-outline-variant/30 rounded-2xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </NavLink>
            <NavLink
              to="/for-creators"
              className="w-full py-4 text-center text-lg font-bold bg-primary text-white rounded-2xl shadow-xl shadow-primary/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start Selling
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
