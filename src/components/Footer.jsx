import { Link } from 'react-router-dom';
import { Sparkles, Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 group mb-4">
              <img src="/images/logoagent.jpg"  alt="Aivora Logo" className="w-7 h-7 object-contain" />
              <span className="text-lg font-bold tracking-tight text-white">
                Aivora
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              The premier marketplace to discover, buy, and sell state-of-the-art AI agents. Build the future, faster.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-purple-400 hover:border-purple-500/30 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-purple-400 hover:border-purple-500/30 transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-purple-400 hover:border-purple-500/30 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h3 className="text-white font-medium mb-4">Marketplace</h3>
            <ul className="space-y-3">
              <li><Link to="/browse" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">Browse Agents</Link></li>
              <li><Link to="/browse" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">Categories</Link></li>
              <li><Link to="/browse" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">Top Sellers</Link></li>
              <li><Link to="/browse" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h3 className="text-white font-medium mb-4">Creators</h3>
            <ul className="space-y-3">
              <li><Link to="/browse" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">Become a Seller</Link></li>
              <li><Link to="/dashboard" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">Creator Dashboard</Link></li>
              <li><Link to="/browse" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">Documentation</Link></li>
              <li><Link to="/browse" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">Guidelines</Link></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/browse" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">About Us</Link></li>
              <li><Link to="/browse" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">Blog</Link></li>
              <li><Link to="/browse" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link to="/browse" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm">
          <p>© {currentYear} Aivora. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span>Built with React & Vite</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
