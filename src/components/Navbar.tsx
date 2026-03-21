import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, User, ShoppingCart, LogOut } from 'lucide-react';
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

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Browse Agents', path: '/browse' },
    { name: 'Pricing', path: '/browse' },
    { name: 'For Creators', path: '/browse' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/80 backdrop-blur-md border-b border-slate-800 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-purple-600 p-2 rounded-lg group-hover:bg-purple-500 transition-colors">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-purple-400 transition-colors">
            AgentForge
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                location.pathname === link.path ? 'text-purple-400' : 'text-slate-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          {isAuthenticated && (
            <Link 
              to="/dashboard"
              className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                location.pathname === '/dashboard' ? 'text-purple-400' : 'text-slate-300'
              }`}
            >
              Dashboard
            </Link>
          )}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 text-slate-300 hover:text-white transition-colors relative" onClick={() => {/* mock cart */}}>
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-purple-500 rounded-full"></span>
          </button>
          
          {isAuthenticated && user ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 cursor-pointer hover:bg-slate-700 transition-colors">
                <img src={user.avatar} alt="Avatar" className="w-6 h-6 rounded-full bg-slate-600" />
                <span className="text-sm font-medium text-slate-200">{user.name}</span>
              </div>
              <button 
                onClick={logout}
                className="text-slate-400 hover:text-rose-400 transition-colors"
                title="Logout"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <>
              <Link 
                to="/login"
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors text-sm font-medium"
              >
                <User className="w-4 h-4" />
                Login
              </Link>
              <Link 
                to="/signup"
                className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-full text-sm font-medium transition-colors shadow-lg shadow-purple-900/20"
              >
                Get Started
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 shadow-xl overflow-hidden animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-purple-400 rounded-lg transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {isAuthenticated && (
              <Link
                to="/dashboard"
                className="px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-purple-400 rounded-lg transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            )}
            <div className="h-px bg-slate-800 my-2"></div>
            <div className="flex gap-4 p-4 mt-auto">
              {!isAuthenticated ? (
                <>
                  <Link 
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex-1 flex justify-center items-center gap-2 py-3 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 transition-colors font-medium"
                  >
                    <User className="w-4 h-4" />
                    Login
                  </Link>
                  <Link 
                    to="/signup"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex-1 flex justify-center items-center py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-medium transition-colors"
                  >
                    Get Started
                  </Link>
                </>
              ) : (
                <button 
                  onClick={() => { logout(); setMobileMenuOpen(false); }}
                  className="flex-1 flex justify-center items-center gap-2 py-3 rounded-lg border border-rose-500/50 text-rose-400 hover:bg-rose-500/10 transition-colors font-medium"
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
