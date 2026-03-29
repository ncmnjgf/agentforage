import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout, Search, Plus, MoreVertical, Edit2, Trash2, Eye, BarChart2 } from 'lucide-react';
import { useProductStore } from '../store/productStore';
import { useAuthStore } from '../store/authStore';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { Link } from 'react-router-dom';

const MyTools = () => {
  const { products } = useProductStore();
  const { user } = useAuthStore();
  const [searchQuery, setSearchQuery] = useState('');

  // Mocking that the first 3 products in the store belong to the creator for demo purposes
  // In a real app, we would filter by creatorId
  const myAgents = products.slice(0, 3); 
  const filteredAgents = myAgents.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/5 text-[var(--color-primary)] text-[0.65rem] font-bold uppercase tracking-widest mb-4">
            <Layout size={10} /> Precision Portfolio
          </div>
          <h1 className="text-4xl md:text-5xl font-manrope font-extrabold text-[var(--color-on-surface)] tracking-tight mb-4">
            My <span className="text-[var(--color-primary)]">Agents</span>
          </h1>
          <p className="text-[var(--color-secondary)] font-semibold text-lg max-w-xl leading-relaxed opacity-80">
            Manage your published digital assets, monitor performance, and iterate on your architectural designs.
          </p>
        </div>
        <Link to="/creator/upload">
          <Button leftIcon={<Plus size={18} />} className="shadow-xl shadow-[var(--color-primary)]/20">
            Publish New Agent
          </Button>
        </Link>
      </div>

      <div className="mb-12">
        <Input 
          placeholder="Filter your portfolio..." 
          className="max-w-md bg-[var(--color-surface-low)] border-none"
          leftIcon={<Search className="w-4 h-4 text-[var(--color-secondary)]" />}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="space-y-6">
        {filteredAgents.map((agent, index) => (
          <motion.div
            key={agent.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <Card className="!bg-[var(--color-surface-low)] !border-none !rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 group hover:shadow-xl hover:shadow-[var(--color-primary)]/5 transition-all">
              <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Layout className="w-10 h-10 text-[var(--color-primary)]" />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                  <h3 className="text-xl font-manrope font-extrabold text-[var(--color-on-surface)] tracking-tight">
                    {agent.title}
                  </h3>
                  <span className="px-2.5 py-0.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-[0.6rem] font-bold uppercase tracking-widest rounded-full border border-[var(--color-primary)]/10">
                    Active
                  </span>
                </div>
                <p className="text-[var(--color-secondary)] text-sm font-semibold opacity-60">
                   {agent.tag} • Listed: Oct 2023
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 px-8 border-l border-r border-[var(--color-outline-variant)]/10 hidden md:grid">
                <div>
                  <p className="text-[var(--color-secondary)] text-[0.6rem] font-manrope font-extrabold uppercase tracking-widest mb-1 opacity-40">Revenue</p>
                  <p className="text-lg font-manrope font-extrabold text-[var(--color-on-surface)]">$1,240</p>
                </div>
                <div>
                  <p className="text-[var(--color-secondary)] text-[0.6rem] font-manrope font-extrabold uppercase tracking-widest mb-1 opacity-40">Acquisitions</p>
                  <p className="text-lg font-manrope font-extrabold text-[var(--color-on-surface)]">42</p>
                </div>
                <div>
                  <p className="text-[var(--color-secondary)] text-[0.6rem] font-manrope font-extrabold uppercase tracking-widest mb-1 opacity-40">Rating</p>
                  <p className="text-lg font-manrope font-extrabold text-[var(--color-on-surface)]">4.9/5</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button size="sm" variant="outline" className="!rounded-xl px-4" leftIcon={<Edit2 size={14} />}>Edit</Button>
                <Link to={`/product/${agent.id}`}>
                  <Button size="sm" variant="ghost" className="!rounded-xl p-3"><Eye size={18} /></Button>
                </Link>
                <Button size="sm" variant="ghost" className="!rounded-xl p-3 text-red-500 hover:bg-red-50"><Trash2 size={18} /></Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredAgents.length === 0 && (
        <div className="text-center py-24 bg-[var(--color-surface-low)] rounded-[3rem] border border-dashed border-[var(--color-outline-variant)]/30">
           <h2 className="text-xl font-manrope font-extrabold text-[var(--color-on-surface)] mb-4">No agents found</h2>
           <Button variant="ghost">Reset Filters</Button>
        </div>
      )}
    </div>
  );
};

export default MyTools;
