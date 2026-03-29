import { useAuthStore } from '../store/authStore';
import { useProductStore } from '../store/productStore';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Package, Search } from 'lucide-react';
import { useState } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { Link } from 'react-router-dom';

const MyPurchases = () => {
  const { user } = useAuthStore();
  const { products } = useProductStore();
  const [searchQuery, setSearchQuery] = useState('');

  const purchasedItems = products.filter(p => user?.purchasedItems?.includes(p.id));
  const filteredItems = purchasedItems.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.creator.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/5 text-[var(--color-primary)] text-[0.65rem] font-bold uppercase tracking-widest mb-4">
          <Package size={10} /> Your Acquisitions
        </div>
        <h1 className="text-4xl md:text-5xl font-manrope font-extrabold text-[var(--color-on-surface)] tracking-tight mb-3">
          My Agents
        </h1>
        <p className="text-[var(--color-secondary)] font-semibold max-w-lg leading-relaxed">
          Access your collection of premium AI agents. Download core files and view integration guides.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <Input 
          placeholder="Filter your collection..." 
          className="flex-1 bg-[var(--color-surface-low)] border-none"
          leftIcon={<Search className="w-4 h-4 text-[var(--color-secondary)]" />}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Link to="/browse">
          <Button variant="outline" className="w-full md:w-auto">Explore More Agents</Button>
        </Link>
      </div>

      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="!bg-[var(--color-surface-low)] !border-none !rounded-[2rem] h-full flex flex-col group overflow-hidden">
                <div className="p-8 flex-1">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-4 rounded-3xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                       <Package size={24} />
                    </div>
                    <span className="text-[0.6rem] font-manrope font-extrabold text-[var(--color-primary)] uppercase tracking-widest bg-[var(--color-primary)]/5 px-3 py-1 rounded-full border border-[var(--color-primary)]/10">
                      Verified
                    </span>
                  </div>
                  <h3 className="text-xl font-manrope font-extrabold text-[var(--color-on-surface)] mb-2 tracking-tight group-hover:text-[var(--color-primary)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-secondary)] text-sm font-semibold mb-6 flex items-center gap-1.5 opacity-60">
                    by <span className="text-[var(--color-on-surface)]">{item.creator}</span>
                  </p>
                  <div className="h-px bg-[var(--color-outline-variant)]/10 w-full mb-6" />
                  <p className="text-[var(--color-secondary)] text-xs font-medium leading-relaxed mb-8 opacity-80">
                    {item.description}
                  </p>
                </div>
                <div className="px-8 pb-8 pt-0 flex gap-4 mt-auto">
                  <Link to={`/download/${item.id}`} className="flex-1">
                    <Button size="sm" className="w-full !rounded-xl" leftIcon={<Download size={14} />}>
                      Download
                    </Button>
                  </Link>
                  <Link to={`/product/${item.id}`}>
                    <Button size="sm" variant="ghost" className="!rounded-xl p-3">
                      <ExternalLink size={16} />
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-32 bg-[var(--color-surface-low)] rounded-[3rem] border border-dashed border-[var(--color-outline-variant)]/30">
          <div className="bg-[var(--color-surface-lowest)] w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
            <Package className="w-10 h-10 text-[var(--color-primary)] opacity-20" />
          </div>
          <h2 className="text-2xl font-manrope font-extrabold text-[var(--color-on-surface)] mb-4 tracking-tight">No agents found</h2>
          <p className="text-[var(--color-secondary)] font-semibold mb-10 opacity-60">Your collection is empty or filters are too strict.</p>
          <Link to="/browse">
            <Button>Explore Aivora Marketplace</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyPurchases;
