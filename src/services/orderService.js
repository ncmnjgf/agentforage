/**
 * Simulated order service for Aivora MVP.
 * Replace with real API calls and Stripe integration later.
 */

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export const orderService = {
  createOrder: async (payload) => {
    await delay(1200); // simulate payment processing
    
    // In a real app, you would initiate a Stripe Checkout and return the session ID
    return {
      orderId: `ord-${Date.now()}`,
      status: 'success',
      ...payload
    };
  },

  getPurchaseHistory: async (_userId) => {
    await delay(500);
    return []; // mock empty history response
  },

  downloadProductAsset: async (productId) => {
    await delay(800); // simulate asset generation/zipping
    return {
      downloadUrl: `https://mock.cdn.Aivora.com/downloads/${productId}.zip`
    };
  }
};
