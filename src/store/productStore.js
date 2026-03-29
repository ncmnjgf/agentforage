import { create } from 'zustand';
import { productService } from '../api/products';

export const useProductStore = create((set, get) => ({
  products: [],
  featuredProducts: [],
  currentProduct: null,
  searchQuery: '',
  isLoading: false,
  error: null,

  setSearchQuery: (query) => set({ searchQuery: query }),
  
  setSelectedProduct: (product) => set({ currentProduct: product }),

  fetchProducts: async () => {
    if (get().products.length > 0) return; // Avoid redundant fetches
    set({ isLoading: true, error: null });
    try {
      const data = await productService.getProducts();
      set({ 
        products: data, 
        featuredProducts: data.slice(0, 3),
        isLoading: false 
      });
    } catch (err) {
      set({ error: 'Failed to fetch products', isLoading: false });
    }
  },

  fetchProductById: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const data = await productService.getProductById(id);
      set({ currentProduct: data, isLoading: false });
    } catch (err) {
      set({ error: 'Failed to fetch product details', isLoading: false });
    }
  },

  getFilteredProducts: () => {
    const { products, searchQuery } = get();
    if (!searchQuery) return products;
    return products.filter(p => 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.creator.toLowerCase().includes(searchQuery.toLowerCase())
    );
  },

  purchase: async (productId) => {
    set({ isLoading: true });
    try {
      await productService.purchaseAgent('usr_current', productId);
      set({ isLoading: false });
      return true;
    } catch (err) {
      set({ isLoading: false });
      return false;
    }
  }
}));
