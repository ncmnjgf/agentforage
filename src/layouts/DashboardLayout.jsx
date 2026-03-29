import { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Package, 
  PlusSquare, 
  Cpu, 
  DollarSign, 
  TrendingUp, 
  Settings, 
  Menu, 
  X,
  LogOut
} from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const DashboardLayout = () => {
  const { user, logout } = useAuthStore();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  const navGroups = [
    {
      label: 'Main',
      items: [
        { path: '/dashboard', icon: LayoutDashboard, label: 'Overview' },
        { path: '/my-purchases', icon: Package, label: 'My Agents' },
      ]
    },
    {
      label: 'Creator Hub',
      items: [
        { path: '/creator/upload', icon: PlusSquare, label: 'Initialize Agent' },
        { path: '/creator/my-tools', icon: Cpu, label: 'My Creations' },
        { path: '/creator/earnings', icon: DollarSign, label: 'Revenue' },
        { path: '/creator/orders', icon: TrendingUp, label: 'Acquisitions' },
      ]
    }
  ];

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-[var(--color-surface)] border-r border-[var(--color-outline-variant)]/10 shadow-sm relative z-20">
      <div className="p-6 border-b border-[var(--color-outline-variant)]/10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-emerald-700 flex items-center justify-center text-white font-manrope font-extrabold shadow-lg shadow-[var(--color-primary)]/20">
            {user?.name?.charAt(0) || 'A'}
          </div>
          <div>
            <h2 className="font-manrope font-extrabold text-[var(--color-on-surface)] text-sm">{user?.name}</h2>
            <p className="text-[var(--color-secondary)] text-[0.65rem] uppercase tracking-widest font-bold">Creator Profile</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-8 space-y-8 no-scrollbar">
        {navGroups.map((group, idx) => (
          <div key={idx}>
            <h3 className="text-[0.6rem] font-manrope font-extrabold text-[var(--color-secondary)] uppercase tracking-[0.2em] mb-4 px-3 opacity-70">
              {group.label}
            </h3>
            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-semibold text-sm transition-all group relative overflow-hidden ${
                      isActive 
                        ? 'text-[var(--color-primary)] bg-[var(--color-primary)]/10' 
                        : 'text-[var(--color-secondary)] hover:bg-[var(--color-surface-low)] hover:text-[var(--color-on-surface)]'
                    }`}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="sidebar-active"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--color-primary)] rounded-r-md"
                      />
                    )}
                    <Icon size={18} className={isActive ? 'text-[var(--color-primary)]' : 'text-inherit opacity-70 group-hover:opacity-100'} />
                    {item.label}
                  </NavLink>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-[var(--color-outline-variant)]/10 space-y-1">
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[var(--color-secondary)] hover:bg-[var(--color-surface-low)] hover:text-[var(--color-on-surface)] transition-all w-full text-left font-semibold text-sm group">
          <Settings size={18} className="opacity-70 group-hover:opacity-100 text-[var(--color-secondary)]" />
          Settings
        </button>
        <button 
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-red-500 hover:bg-red-50 hover:text-red-700 transition-all w-full text-left font-semibold text-sm group"
        >
          <LogOut size={18} className="opacity-70 group-hover:opacity-100 text-red-500" />
          Terminate Session
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-[calc(100vh-88px)] bg-[var(--color-surface-low)] relative font-inter">
      {/* Mobile Toggle */}
      <div className="md:hidden absolute top-4 left-4 z-50">
        <button 
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="p-2 bg-[var(--color-surface)] border border-[var(--color-outline-variant)]/20 rounded-xl shadow-sm text-[var(--color-on-surface)]"
        >
          {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block w-72 shrink-0 sticky top-[88px] h-[calc(100vh-88px)]">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-[var(--color-on-surface)]/20 backdrop-blur-sm z-40 md:hidden top-[88px]"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-[88px] left-0 w-72 z-50 md:hidden"
            >
              <SidebarContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="flex-1 w-full flex flex-col pt-16 md:pt-0 overflow-y-auto h-[calc(100vh-88px)] relative">
        <div className="w-full h-full p-4 sm:p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
