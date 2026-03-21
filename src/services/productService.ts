import { mockProducts } from '../data/mockProducts';
import type { Product } from '../types';

/**
 * Simulated product service for AgentForge MVP.
 * Replace with real API calls using Axios later.
 */

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export const productService = {
  getProducts: async (): Promise<Product[]> => {
    await delay(600);
    return mockProducts;
  },

  getProductById: async (id: string): Promise<Product | undefined> => {
    await delay(400);
    return mockProducts.find(p => p.id === id);
  },

  getFeaturedProducts: async (): Promise<Product[]> => {
    await delay(800);
    return mockProducts.slice(0, 3);
  },

  searchProducts: async (query: string): Promise<Product[]> => {
    await delay(500);
    const q = query.toLowerCase();
    return mockProducts.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.description.toLowerCase().includes(q) ||
      p.tag.toLowerCase().includes(q)
    );
  },
  
  publishProduct: async (productData: Partial<Product>) => {
    await delay(1500);
    return { ...productData, id: `agent-${Date.now()}` } as Product;
  }
};
