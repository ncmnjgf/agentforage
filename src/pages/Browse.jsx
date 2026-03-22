import { useState } from 'react';
import { Filter, Search, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useProductStore } from '../store/productStore';
import ProductGrid from '../components/ProductGrid';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Browse = () => {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const { searchQuery, setSearchQuery, getFilteredProducts } = useProductStore();
  
  const filteredProducts = getFilteredProducts();

  const categories = ['All', 'Development', 'Data Science', 'Marketing', 'Customer Service', 'Design', 'Security'];
  const priceRanges = ['Any', 'Free', 'Under $25', '$25 - $50', '$50 - $100', '$100+'];
  const ratings = ['Any', '4.5 & up', '4.0 & up', '3.0 & up'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col items-start w-full min-h-[calc(100vh-88px)]">
      
      {/* Header Section */}
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-100 tracking-tight mb-2">Explore Agents</h1>
          <p className="text-slate-400">Discover over 1,000+ autonomous AI agents tailored for your workflow.</p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto mt-4 md:mt-0">
          <Input 
            leftIcon={<Search className="w-4 h-4" />} 
            placeholder="Search agents..." 
            className="w-full md:w-80 bg-slate-800 border-slate-700"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button 
            className="md:hidden p-2.5 rounded-xl border border-slate-700 bg-slate-800 text-slate-300 hover:text-white"
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
          >
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex w-full gap-8 relative items-start">
        
        {/* Desktop Sidebar Filters */}
        <aside className="hidden md:block w-64 shrink-0 space-y-8 sticky top-[120px]">
          <div className="flex items-center gap-2 mb-6 text-slate-100 font-semibold">
            <SlidersHorizontal className="w-5 h-5 text-purple-400" />
            Filters
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-medium text-slate-300 text-sm uppercase tracking-wider">Categories</h3>
            <div className="space-y-2">
              {categories.map((cat, i) => (
                <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${i === 0 ? 'bg-purple-600 border-purple-600' : 'border-slate-600 bg-slate-800 group-hover:border-purple-500'}`}>
                    {i === 0 && <span className="w-2 h-2 bg-white rounded-sm block" />}
                  </div>
                  <span className={`text-sm ${i === 0 ? 'text-slate-100 font-medium' : 'text-slate-400 group-hover:text-slate-300'}`}>{cat}</span>
                </label>
              ))}
            </div>
          </div>

          <hr className="border-slate-800" />

          {/* Price */}
          <div className="space-y-4">
            <h3 className="font-medium text-slate-300 text-sm uppercase tracking-wider">Price</h3>
            <div className="space-y-2">
              {priceRanges.map((price, i) => (
                <label key={price} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${i === 0 ? 'border-purple-500 bg-purple-500/10' : 'border-slate-600 bg-slate-800 group-hover:border-purple-500'}`}>
                    {i === 0 && <span className="w-2 h-2 bg-purple-500 rounded-full block" />}
                  </div>
                  <span className={`text-sm ${i === 0 ? 'text-slate-100 font-medium' : 'text-slate-400 group-hover:text-slate-300'}`}>{price}</span>
                </label>
              ))}
            </div>
          </div>

          <hr className="border-slate-800" />

          {/* Ratings */}
          <div className="space-y-4">
            <h3 className="font-medium text-slate-300 text-sm uppercase tracking-wider">Rating</h3>
            <div className="space-y-2">
              {ratings.map((rating, i) => (
                <label key={rating} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${i === 0 ? 'border-purple-500 bg-purple-500/10' : 'border-slate-600 bg-slate-800 group-hover:border-purple-500'}`}>
                    {i === 0 && <span className="w-2 h-2 bg-purple-500 rounded-full block" />}
                  </div>
                  <span className={`text-sm ${i === 0 ? 'text-slate-100 font-medium' : 'text-slate-400 group-hover:text-slate-300'}`}>{rating}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-grow w-full">
          {/* Top Controls Bar */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
            <span className="text-sm font-medium text-slate-400 font-mono bg-slate-800/50 px-3 py-1 rounded-md">
              Showing {filteredProducts.length} results
            </span>
            
            <button className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
              <span className="hidden sm:inline">Sort by:</span>
              <span className="font-medium text-purple-400">Featured</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
          </div>

          {/* Product Grid */}
          <ProductGrid products={filteredProducts} columns={3} />
          
          {/* Load More Mock */}
          <div className="flex justify-center mt-12 mb-8">
            <Button variant="outline" size="lg" className="w-full max-w-xs border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white hover:bg-slate-800">
              Load More Agents
            </Button>
          </div>
        </main>

      </div>
      
      {/* Mobile Filters Overlay */}
      {isMobileFiltersOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm md:hidden flex justify-end"
        >
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="w-4/5 max-w-sm h-full bg-slate-900 border-l border-slate-800 p-6 flex flex-col"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2 text-slate-100 font-bold text-lg">
                <SlidersHorizontal className="w-5 h-5 text-purple-400" />
                Filters
              </div>
              <button 
                onClick={() => setIsMobileFiltersOpen(false)}
                className="text-slate-400 hover:text-white p-2 bg-slate-800 rounded-lg"
              >
                Done
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-8 pr-2">
              <div className="space-y-4">
                <h3 className="font-medium text-slate-300 text-sm uppercase tracking-wider">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat, i) => (
                    <span key={cat} className={`px-3 py-1.5 rounded-full text-sm border ${i === 0 ? 'bg-purple-600 border-purple-600 text-white' : 'border-slate-700 text-slate-300 bg-slate-800'}`}>
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium text-slate-300 text-sm uppercase tracking-wider">Price</h3>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map((price, i) => (
                    <span key={price} className={`px-3 py-1.5 rounded-full text-sm border ${i === 0 ? 'border-purple-500 bg-purple-500/10 text-purple-300' : 'border-slate-700 text-slate-300 bg-slate-800'}`}>
                      {price}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-slate-800 mt-auto">
              <Button fullWidth>Show Results</Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Browse;
