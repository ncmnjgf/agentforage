import { Link } from 'react-router-dom';
import { Sparkles, Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-surface-low)] border-t border-[var(--color-outline-variant)]/20 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 group mb-6">
              <img src="/images/logoagent.jpg" alt="Aivora Logo" className="w-8 h-8 object-contain" />
              <span className="text-xl font-manrope font-extrabold tracking-tight text-[var(--color-on-surface)]">
                Aivora
              </span>
            </Link>
            <p className="text-[var(--color-secondary)] text-sm leading-relaxed mb-8 font-inter">
              The premier platform for world-class AI agents and precision-engineered digital tools. Empowering creators to build the future.
            </p>
            <div className="flex items-center gap-5">
              <a href="#" className="p-2.5 bg-[var(--color-surface-lowest)] border border-[var(--color-outline-variant)]/20 rounded-full text-[var(--color-secondary)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/40 transition-all shadow-sm">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 bg-[var(--color-surface-lowest)] border border-[var(--color-outline-variant)]/20 rounded-full text-[var(--color-secondary)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/40 transition-all shadow-sm">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 bg-[var(--color-surface-lowest)] border border-[var(--color-outline-variant)]/20 rounded-full text-[var(--color-secondary)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/40 transition-all shadow-sm">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h3 className="text-[var(--color-on-surface)] font-manrope font-bold text-sm uppercase tracking-widest mb-6">Marketplace</h3>
            <ul className="space-y-4">
              <li><Link to="/browse" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] text-sm font-semibold transition-colors">Browse Marketplace</Link></li>
              <li><Link to="/browse" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] text-sm font-semibold transition-colors">Top Agents</Link></li>
              <li><Link to="/browse" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] text-sm font-semibold transition-colors">Curated Trends</Link></li>
              <li><Link to="/browse" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] text-sm font-semibold transition-colors">New Essentials</Link></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h3 className="text-[var(--color-on-surface)] font-manrope font-bold text-sm uppercase tracking-widest mb-6">Creators</h3>
            <ul className="space-y-4">
              <li><Link to="/signup" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] text-sm font-semibold transition-colors">Join as Creator</Link></li>
              <li><Link to="/dashboard" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] text-sm font-semibold transition-colors">Creator Center</Link></li>
              <li><Link to="/browse" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] text-sm font-semibold transition-colors">Developer Docs</Link></li>
              <li><Link to="/browse" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] text-sm font-semibold transition-colors">Brand Guidelines</Link></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h3 className="text-[var(--color-on-surface)] font-manrope font-bold text-sm uppercase tracking-widest mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/browse" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] text-sm font-semibold transition-colors">Our Vision</Link></li>
              <li><Link to="/browse" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] text-sm font-semibold transition-colors">Engineering Blog</Link></li>
              <li><Link to="/browse" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] text-sm font-semibold transition-colors">Privacy Charter</Link></li>
              <li><Link to="/browse" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] text-sm font-semibold transition-colors">Terms of Use</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="pt-10 border-t border-[var(--color-outline-variant)]/20 flex flex-col md:flex-row items-center justify-between text-[var(--color-secondary)] text-sm font-semibold">
          <p>© {currentYear} Aivora. Precision Engineered.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="opacity-60">Verified Quality</span>
            <span className="opacity-60">Premium Curation</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
