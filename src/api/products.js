import { mockProducts } from '../data/mockProducts';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export const productService = {
  getProducts: async () => {
    await delay(800);
    return mockProducts;
  },
  
  getProductById: async (id) => {
    await delay(500);
    return mockProducts.find(p => p.id === id);
  },
  
  purchaseAgent: async (userId, productId) => {
    await delay(1000);
    return { success: true, transactionId: 'TXN_' + Math.random().toString(36).substr(2, 9) };
  }
};
