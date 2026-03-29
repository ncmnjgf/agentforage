import { useAuthStore } from '../store/authStore';
import { useProductStore } from '../store/productStore';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, Plus, TrendingUp, Users, DollarSign, ArrowRight, Package } from 'lucide-react';
import ProductGrid from '../components/ProductGrid';
import Button from '../components/ui/Button';

const Dashboard = () => {
  const { user } = useAuthStore();
  const { products } = useProductStore();
  
  const ownedProducts = products.filter(p => user?.purchasedItems?.includes(p.id));
  const recentPurchases = ownedProducts.slice(0, 3); // Just show top 3 on dashboard overview

  return (
    <div className="w-full">
      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full"
      >
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/5 text-[var(--color-primary)] text-[0.65rem] font-bold uppercase tracking-widest mb-4">
              <TrendingUp size={10} /> Aivora Command Center
            </div>
            <h1 className="text-3xl md:text-5xl font-manrope font-extrabold text-[var(--color-on-surface)] tracking-tight mb-3">
              Overview
            </h1>
            <p className="text-[var(--color-secondary)] font-semibold max-w-lg leading-relaxed">
              Monitor your asset ecosystem and active creator revenue streams from a single unified nexus.
            </p>
          </div>
          <div className="flex gap-4">
             <Link to="/creator/upload">
               <Button leftIcon={<Plus size={18} />}>Initialize Agent</Button>
             </Link>
          </div>
        </div>

        {/* Global Stats Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-16">
          <div className="p-8 rounded-[2rem] bg-white border border-[var(--color-outline-variant)]/40 shadow-sm hover:shadow-md hover:border-[var(--color-primary)]/20 transition-all group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-[var(--color-primary)]/10 rounded-xl text-[var(--color-primary)]">
                <Package className="w-5 h-5" />
              </div>
              <h3 className="text-[var(--color-secondary)] font-manrope font-bold text-[0.65rem] uppercase tracking-widest">Active Assets</h3>
            </div>
            <p className="text-3xl font-manrope font-extrabold text-[var(--color-on-surface)]">{ownedProducts.length}</p>
          </div>
          
          <div className="p-8 rounded-[2rem] bg-white border border-[var(--color-outline-variant)]/40 shadow-sm hover:shadow-md hover:border-[var(--color-primary)]/20 transition-all group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600">
                <ArrowRight className="w-5 h-5" />
              </div>
              <h3 className="text-[var(--color-secondary)] font-manrope font-bold text-[0.65rem] uppercase tracking-widest">API Invocations</h3>
            </div>
            <p className="text-3xl font-manrope font-extrabold text-[var(--color-on-surface)]">1.2M</p>
          </div>

          <div className="p-8 rounded-[2rem] bg-white border border-[var(--color-outline-variant)]/40 shadow-sm hover:shadow-md hover:border-[var(--color-primary)]/20 transition-all group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="text-[var(--color-secondary)] font-manrope font-bold text-[0.65rem] uppercase tracking-widest">Creator Revenue</h3>
            </div>
            <p className="text-3xl font-manrope font-extrabold text-[var(--color-on-surface)]">$8,420</p>
          </div>

          <div className="p-8 rounded-[2rem] bg-white border border-[var(--color-outline-variant)]/40 shadow-sm hover:shadow-md hover:border-[var(--color-primary)]/20 transition-all group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-[var(--color-secondary)] font-manrope font-bold text-[0.65rem] uppercase tracking-widest">Your Listed Agents</h3>
            </div>
            <p className="text-3xl font-manrope font-extrabold text-[var(--color-on-surface)]">3</p>
          </div>
        </div>

        <div className="w-full mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-manrope font-extrabold text-[var(--color-on-surface)] tracking-tight">Recent Acquisitions</h2>
            <Link to="/my-purchases" className="text-sm font-bold text-[var(--color-primary)] hover:underline flex items-center gap-1">
              View All <ArrowRight size={14} />
            </Link>
          </div>
          
          {recentPurchases.length > 0 ? (
            <ProductGrid products={recentPurchases} columns={3} />
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-[var(--color-outline-variant)]/40">
              <div className="bg-[var(--color-surface-lowest)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Download className="w-6 h-6 text-[var(--color-primary)] opacity-40" />
              </div>
              <h3 className="text-lg font-manrope font-extrabold text-[var(--color-on-surface)] mb-2">Ecosystem Currently Empty</h3>
              <p className="text-[var(--color-secondary)] text-sm font-semibold mb-8">You have yet to commission your first autonomous asset.</p>
              <Button onClick={() => window.location.href = '/browse'} className="font-manrope font-extrabold uppercase tracking-widest shadow-xl shadow-[var(--color-primary)]/10">
                Explore Ecosystem
              </Button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
