import { mockProducts } from '../data/mockProducts';

/**
 * Simulated product service for Aivora MVP.
 * Replace with real API calls using Axios later.
 */

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export const productService = {
  getProducts: async () => {
    await delay(600);
    return mockProducts;
  },

  getProductById: async (id) => {
    await delay(400);
    return mockProducts.find(p => p.id === id);
  },

  getFeaturedProducts: async () => {
    await delay(800);
    return mockProducts.slice(0, 3);
  },

  searchProducts: async (query) => {
    await delay(500);
    const q = query.toLowerCase();
    return mockProducts.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.description.toLowerCase().includes(q) ||
      p.tag.toLowerCase().includes(q)
    );
  },
  
  publishProduct: async (productData) => {
    await delay(1500);
    return { ...productData, id: `agent-${Date.now()}` };
  }
};
