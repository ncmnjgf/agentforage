import { useState, useEffect } from 'react';
import { Filter, Search, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useProductStore } from '../store/productStore';
import ProductGrid from '../components/ProductGrid';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Browse = () => {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const { searchQuery, setSearchQuery, getFilteredProducts, fetchProducts, isLoading } = useProductStore();
  
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const filteredProducts = getFilteredProducts();

  const categories = ['All', 'Chatbots', 'Automation', 'Resume AI', 'Content Tools', 'Development', 'Marketing'];
  const priceRanges = ['Any', 'Free', 'Under $25', '$25 - $50', '$50 - $100', '$100+'];
  const ratings = ['Any', '4.5 & up', '4.0 & up', '3.0 & up'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 flex flex-col items-start w-full min-h-[calc(100vh-88px)] bg-[var(--color-surface)]">
      
      {/* Header Section */}
      <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/5 text-[var(--color-primary)] text-[0.65rem] font-bold uppercase tracking-widest mb-4">
            <Filter size={10} /> The Aivora Collection
          </div>
          <h1 className="text-4xl md:text-5xl font-manrope font-extrabold text-[var(--color-on-surface)] tracking-tight mb-3">
            Agent Marketplace
          </h1>
          <p className="text-[var(--color-secondary)] font-semibold max-w-lg leading-relaxed">
            Discover a curated collection of precision-engineered AI agents and tools for every workflow.
          </p>
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <Input 
            leftIcon={<Search className="w-4 h-4 text-[var(--color-secondary)]" />} 
            placeholder="Search agents..." 
            className="w-full md:w-96 bg-[var(--color-surface-low)] border-none focus-within:ring-2 focus-within:ring-[var(--color-primary)]/20 shadow-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button 
            className="md:hidden p-3 rounded-xl bg-[var(--color-surface-low)] text-[var(--color-on-surface)] border border-[var(--color-outline-variant)]/20 shadow-sm"
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
          >
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex w-full gap-12 relative items-start">
        
        {/* Desktop Sidebar Filters */}
        <aside className="hidden md:block w-72 shrink-0 space-y-10 sticky top-[120px]">
          <div className="flex items-center gap-3 mb-8 text-[var(--color-on-surface)] font-manrope font-extrabold text-sm uppercase tracking-widest">
            <SlidersHorizontal className="w-4 h-4 text-[var(--color-primary)]" />
            Refine Search
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h3 className="font-manrope font-bold text-[var(--color-on-surface)] text-[0.7rem] uppercase tracking-widest opacity-60">Categories</h3>
            <div className="space-y-3">
              {categories.map((cat, i) => (
                <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${i === 0 ? 'bg-[var(--color-primary)] border-[var(--color-primary)] shadow-md shadow-[var(--color-primary)]/20' : 'border-[var(--color-outline-variant)] bg-[var(--color-surface-low)] group-hover:border-[var(--color-primary)]'}`}>
                    {i === 0 && <div className="w-1.5 h-1.5 bg-white rounded-sm" />}
                  </div>
                  <span className={`text-sm font-semibold transition-colors ${i === 0 ? 'text-[var(--color-on-surface)]' : 'text-[var(--color-secondary)] group-hover:text-[var(--color-on-surface)]'}`}>{cat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="space-y-6">
            <h3 className="font-manrope font-bold text-[var(--color-on-surface)] text-[0.7rem] uppercase tracking-widest opacity-60">Investment</h3>
            <div className="space-y-3">
              {priceRanges.map((price, i) => (
                <label key={price} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${i === 0 ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/10' : 'border-[var(--color-outline-variant)] bg-[var(--color-surface-low)] group-hover:border-[var(--color-primary)]'}`}>
                    {i === 0 && <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full" />}
                  </div>
                  <span className={`text-sm font-semibold transition-colors ${i === 0 ? 'text-[var(--color-on-surface)]' : 'text-[var(--color-secondary)] group-hover:text-[var(--color-on-surface)]'}`}>{price}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Ratings */}
          <div className="space-y-6">
            <h3 className="font-manrope font-bold text-[var(--color-on-surface)] text-[0.7rem] uppercase tracking-widest opacity-60">Verification</h3>
            <div className="space-y-3">
              {ratings.map((rating, i) => (
                <label key={rating} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${i === 0 ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/10' : 'border-[var(--color-outline-variant)] bg-[var(--color-surface-low)] group-hover:border-[var(--color-primary)]'}`}>
                    {i === 0 && <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full" />}
                  </div>
                  <span className={`text-sm font-semibold transition-colors ${i === 0 ? 'text-[var(--color-on-surface)]' : 'text-[var(--color-secondary)] group-hover:text-[var(--color-on-surface)]'}`}>{rating}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-grow w-full">
          {/* Top Controls Bar */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-[var(--color-outline-variant)]/10">
            <span className="text-xs font-bold text-[var(--color-secondary)] bg-[var(--color-surface-low)] px-4 py-1.5 rounded-full uppercase tracking-widest">
              {filteredProducts.length} Premium Results
            </span>
            
            <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-all">
              Sort by: <span className="text-[var(--color-primary)] font-extrabold ml-1">Featured</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Product Grid */}
          {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-[400px] rounded-[2.5rem] bg-[var(--color-surface-low)] animate-pulse" />
            ))}
          </div>
        ) : (
          <ProductGrid products={filteredProducts} columns={3} />
        )}
          
          {/* Load More Mock */}
          <div className="flex justify-center mt-16 mb-12">
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full max-w-sm rounded-xl py-4 border-[var(--color-outline-variant)]/30 text-[var(--color-on-surface)] font-bold uppercase tracking-widest hover:bg-[var(--color-surface-low)] transition-all"
            >
              Discover More Assets
            </Button>
          </div>
        </main>

      </div>
      
      {/* Mobile Filters Overlay */}
      {isMobileFiltersOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-[var(--color-on-surface)]/10 backdrop-blur-md md:hidden flex justify-end"
        >
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', damping: 30, stiffness: 250 }}
            className="w-4/5 max-w-sm h-full bg-[var(--color-surface-lowest)] shadow-2xl p-8 flex flex-col"
          >
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3 text-[var(--color-on-surface)] font-manrope font-extrabold text-lg uppercase tracking-widest">
                <SlidersHorizontal className="w-5 h-5 text-[var(--color-primary)]" />
                Filters
              </div>
              <button 
                onClick={() => setIsMobileFiltersOpen(false)}
                className="w-10 h-10 flex items-center justify-center bg-[var(--color-surface-low)] text-[var(--color-on-surface)] rounded-full"
              >
                ✕
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-10 pr-2 pb-10">
              <div className="space-y-6">
                <h3 className="font-manrope font-bold text-[var(--color-on-surface)] text-[0.7rem] uppercase tracking-widest opacity-60">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat, i) => (
                    <span key={cat} className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${i === 0 ? 'bg-[var(--color-primary)] text-white shadow-lg' : 'bg-[var(--color-surface-low)] text-[var(--color-secondary)]'}`}>
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="font-manrope font-bold text-[var(--color-on-surface)] text-[0.7rem] uppercase tracking-widest opacity-60">Investment</h3>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map((price, i) => (
                    <span key={price} className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${i === 0 ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20 shadow-sm' : 'bg-[var(--color-surface-low)] text-[var(--color-secondary)]'}`}>
                      {price}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-[var(--color-outline-variant)]/10 mt-auto">
              <Button fullWidth className="py-4 font-manrope font-extrabold uppercase tracking-widest">Show Results</Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Browse;
