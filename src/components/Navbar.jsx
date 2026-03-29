import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, ShoppingCart, LogOut, Search, ChevronDown, Cpu, Zap, TrendingUp, Bot } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuthStore();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const categoriesRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoriesRef.current && !categoriesRef.current.contains(event.target)) {
        setCategoriesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Browse Agents', path: '/browse' },
    { name: 'Pricing',       path: '/pricing' },
    { name: 'For Creators',  path: '/for-creators' },
  ];

  const categories = [
    { name: 'Development', icon: <Cpu className="w-4 h-4" /> },
    { name: 'Marketing', icon: <Zap className="w-4 h-4" /> },
    { name: 'Data Analysis', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'Customer Support', icon: <Bot className="w-4 h-4" /> },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[var(--color-surface-low)]/80 backdrop-blur-xl shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src="/images/logoagent.jpg" 
            alt="Aivora Logo" 
            className="w-10 h-10 object-contain transition-transform group-hover:scale-105"
          />
          <span className="text-2xl font-manrope font-extrabold tracking-tight text-[var(--color-on-surface)]">
            Aivora
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/browse"
            className={`text-sm font-semibold tracking-wide uppercase transition-all hover:text-[var(--color-primary)] ${
              location.pathname === '/browse' ? 'text-[var(--color-primary)]' : 'text-[var(--color-secondary)]'
            }`}
          >
            Browse Agents
          </Link>

          {/* Categories Dropdown */}
          <div className="relative" ref={categoriesRef}>
            <button 
              onClick={() => setCategoriesOpen(!categoriesOpen)}
              className="flex items-center gap-1 text-sm font-semibold tracking-wide uppercase text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
            >
              Categories <ChevronDown className={`w-4 h-4 transition-transform ${categoriesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {categoriesOpen && (
              <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-64 bg-white rounded-2xl shadow-xl shadow-[var(--color-primary)]/10 border border-[var(--color-outline-variant)]/20 p-2 py-3 z-50 animate-in fade-in slide-in-from-top-2">
                {categories.map((cat) => (
                  <Link 
                    key={cat.name}
                    to={`/browse?category=${cat.name.toLowerCase()}`}
                    onClick={() => setCategoriesOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[var(--color-surface-lowest)] text-[var(--color-on-surface)] group transition-all"
                  >
                    <div className="text-[var(--color-secondary)] group-hover:text-[var(--color-primary)] transition-colors">
                      {cat.icon}
                    </div>
                    <span className="text-sm font-bold">{cat.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link 
            to="/for-creators"
            className={`text-sm font-semibold tracking-wide uppercase transition-all hover:text-[var(--color-primary)] ${
              location.pathname === '/for-creators' ? 'text-[var(--color-primary)]' : 'text-[var(--color-secondary)]'
            }`}
          >
            For Creators
          </Link>
          <Link 
            to="/pricing"
            className={`text-sm font-semibold tracking-wide uppercase transition-all hover:text-[var(--color-primary)] ${
              location.pathname === '/pricing' ? 'text-[var(--color-primary)]' : 'text-[var(--color-secondary)]'
            }`}
          >
            Pricing
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          <div className="relative group">
            <Search className="w-5 h-5 text-[var(--color-secondary)] group-hover:text-[var(--color-primary)] transition-colors cursor-pointer" />
            <div className="absolute top-1/2 -translate-y-1/2 right-10 w-0 overflow-hidden group-hover:w-48 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100">
               <input type="text" placeholder="Search agents..." className="w-full bg-[var(--color-surface-lowest)] border border-[var(--color-outline-variant)]/30 rounded-full px-4 py-1.5 text-sm focus:outline-none focus:border-[var(--color-primary)]" />
            </div>
          </div>
          <button className="p-2 text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors relative" onClick={() => {/* mock cart */}}>
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[var(--color-primary)] rounded-full"></span>
          </button>
          
          {isAuthenticated && user ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-surface-low)] border border-[var(--color-outline-variant)]/20 cursor-pointer hover:bg-white transition-all">
                <img src={user.avatar} alt="Avatar" className="w-6 h-6 rounded-full bg-slate-200" />
                <span className="text-sm font-semibold text-[var(--color-on-surface)]">{user.name}</span>
              </div>
              <button 
                onClick={logout}
                className="text-[var(--color-secondary)] hover:text-rose-600 transition-colors"
                title="Logout"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <>
              <Link 
                to="/login"
                className="text-[var(--color-on-surface)] hover:text-[var(--color-primary)] transition-colors text-sm font-bold uppercase tracking-wider"
              >
                Login
              </Link>
              <Link 
                to="/signup"
                className="px-6 py-2.5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-container)] text-white rounded-md text-sm font-bold uppercase tracking-widest transition-all shadow-md active:scale-95"
              >
                Join Now
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-slate-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[var(--color-surface-low)] border-b border-[var(--color-outline-variant)]/10 shadow-xl overflow-hidden animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="px-4 py-3 text-[var(--color-secondary)] hover:bg-[var(--color-primary)]/5 hover:text-[var(--color-primary)] rounded-lg transition-colors font-semibold uppercase text-xs tracking-widest"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-[var(--color-outline-variant)]/10 my-2"></div>
            <div className="flex gap-4 p-4 mt-auto">
              {!isAuthenticated ? (
                <>
                  <Link 
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex-1 flex justify-center items-center gap-2 py-3 rounded-lg border border-[var(--color-outline-variant)]/20 text-[var(--color-on-surface)] hover:bg-[var(--color-primary)]/5 transition-colors font-bold uppercase text-xs tracking-widest"
                  >
                    <User className="w-4 h-4" />
                    Login
                  </Link>
                  <Link 
                    to="/signup"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex-1 flex justify-center items-center py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white rounded-lg font-bold uppercase text-xs tracking-widest transition-colors shadow-lg shadow-[var(--color-primary)]/20"
                  >
                    Get Started
                  </Link>
                </>
              ) : (
                <button 
                  onClick={() => { logout(); setMobileMenuOpen(false); }}
                  className="flex-1 flex justify-center items-center gap-2 py-3 rounded-lg border border-rose-500/20 text-rose-600 hover:bg-rose-500/5 transition-colors font-bold uppercase text-xs tracking-widest"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
