import { create } from 'zustand';
import { mockProducts } from '../data/mockProducts';

export const useProductStore = create((set, get) => ({
  products: mockProducts,
  selectedProduct: null,
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedProduct: (product) => set({ selectedProduct: product }),
  getFilteredProducts: () => {
    const { products, searchQuery } = get();
    if (!searchQuery.trim()) return products;
    
    const query = searchQuery.toLowerCase();
    return products.filter((p) => 
      p.title.toLowerCase().includes(query) || 
      p.description.toLowerCase().includes(query) ||
      p.tag.toLowerCase().includes(query)
    );
  }
}));
