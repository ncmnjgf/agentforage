import { create } from 'zustand';
import type { Product } from '../types';
import { mockProducts } from '../data/mockProducts';

interface ProductState {
  products: Product[];
  selectedProduct: Product | null;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setSelectedProduct: (product: Product | null) => void;
  getFilteredProducts: () => Product[];
}

export const useProductStore = create<ProductState>((set, get) => ({
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
