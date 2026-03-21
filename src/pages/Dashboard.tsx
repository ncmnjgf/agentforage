import { useAuthStore } from '../store/authStore';
import { useProductStore } from '../store/productStore';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Plus, TrendingUp, Users, DollarSign, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import Button from '../components/ui/Button';

const Dashboard = () => {
  const { user } = useAuthStore();
  const { products } = useProductStore();
  const [activeTab, setActiveTab] = useState<'library' | 'creator'>('library');
  
  const ownedProducts = products.filter(p => user?.purchasedItems?.includes(p.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-start w-full min-h-[calc(100vh-88px)]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full"
      >
        <h1 className="text-3xl font-bold text-slate-100 mb-2">Welcome Back, {user?.name}</h1>
        <p className="text-slate-400 mb-8">Manage your purchased agents or publish new ones to the marketplace.</p>
        
        {/* Tabs */}
        <div className="flex items-center gap-4 mb-8 border-b border-slate-800 w-full pb-px">
          <button 
            onClick={() => setActiveTab('library')}
            className={`pb-4 px-2 text-sm font-medium transition-colors relative ${activeTab === 'library' ? 'text-purple-400' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Personal Library
            {activeTab === 'library' && (
              <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500" />
            )}
          </button>
          <button 
            onClick={() => setActiveTab('creator')}
            className={`pb-4 px-2 text-sm font-medium transition-colors relative ${activeTab === 'creator' ? 'text-purple-400' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Creator Hub
            {activeTab === 'creator' && (
              <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500" />
            )}
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'library' && (
            <motion.div 
              key="library"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="w-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
                <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-purple-500/50 transition-colors">
                  <div className="flex items-center gap-3 mb-1">
                    <Download className="w-5 h-5 text-purple-400" />
                    <h3 className="text-slate-400 font-medium">Owned Agents</h3>
                  </div>
                  <p className="text-3xl font-bold text-white">{ownedProducts.length}</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-colors">
                  <div className="flex items-center gap-3 mb-1">
                    <ArrowRight className="w-5 h-5 text-blue-400" />
                    <h3 className="text-slate-400 font-medium">Tasks Completed</h3>
                  </div>
                  <p className="text-3xl font-bold text-white">1,204</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-emerald-500/50 transition-colors">
                  <div className="flex items-center gap-3 mb-1">
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                    <h3 className="text-slate-400 font-medium">Time Saved</h3>
                  </div>
                  <p className="text-3xl font-bold text-white">45h</p>
                </div>
              </div>

              <div className="w-full">
                <h2 className="text-2xl font-bold text-slate-100 mb-6 pb-4">My Library</h2>
                
                {ownedProducts.length > 0 ? (
                  <ProductGrid products={ownedProducts} columns={3} />
                ) : (
                  <div className="text-center py-20 bg-slate-800/20 border border-slate-800 border-dashed rounded-2xl">
                    <div className="bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Download className="w-8 h-8 text-slate-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-200 mb-2">No Agents Yet</h3>
                    <p className="text-slate-400 mb-6">You haven't purchased any autonomous agents.</p>
                    <Button onClick={() => window.location.href = '/browse'}>
                      Browse Marketplace
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {activeTab === 'creator' && (
            <motion.div 
              key="creator"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="w-full"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 pb-8 border-b border-slate-800 gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Creator Overview</h2>
                  <p className="text-slate-400">Track your sales and manage your published agents.</p>
                </div>
                <Button 
                  leftIcon={<Plus className="w-5 h-5" />} 
                  onClick={() => alert('Add Product Flow mock: Opens a modal to upload agent files.')}
                  className="shadow-purple-500/20"
                >
                  Publish New Agent
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
                <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-amber-500/20 rounded-lg text-amber-400">
                      <DollarSign className="w-5 h-5" />
                    </div>
                    <h3 className="text-amber-400/80 font-medium">Total Revenue</h3>
                  </div>
                  <p className="text-4xl font-bold text-amber-400 mt-2">$14,250</p>
                  <p className="text-amber-400/60 text-sm mt-2 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +12% this month
                  </p>
                </div>
                
                <div className="p-6 rounded-2xl bg-purple-500/5 border border-purple-500/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                      <Users className="w-5 h-5" />
                    </div>
                    <h3 className="text-purple-400/80 font-medium">Total Customers</h3>
                  </div>
                  <p className="text-4xl font-bold text-purple-400 mt-2">324</p>
                  <p className="text-purple-400/60 text-sm mt-2 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +5% this month
                  </p>
                </div>
                
                <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                      <Download className="w-5 h-5" />
                    </div>
                    <h3 className="text-blue-400/80 font-medium">Active Subscriptions</h3>
                  </div>
                  <p className="text-4xl font-bold text-blue-400 mt-2">156</p>
                  <p className="text-blue-400/60 text-sm mt-2 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +2% this month
                  </p>
                </div>
              </div>

              <div className="w-full">
                <h3 className="text-xl font-bold text-slate-100 mb-6">Published Agents</h3>
                <div className="text-center py-20 bg-slate-800/20 border border-slate-800 border-dashed rounded-2xl">
                  <div className="bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Plus className="w-8 h-8 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-200 mb-2">You have no published agents.</h3>
                  <p className="text-slate-400 mb-6">Build your first autonomous agent and list it on the marketplace.</p>
                  <Button variant="outline" onClick={() => alert('Redirect to Agent Build Process')}>
                    Start Building
                  </Button>
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Dashboard;
