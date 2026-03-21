/**
 * Simulated order service for AgentForge MVP.
 * Replace with real API calls and Stripe integration later.
 */

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export interface OrderPayload {
  userId: string;
  productId: string;
  paymentMethodId?: string;
}

export const orderService = {
  createOrder: async (payload: OrderPayload) => {
    await delay(1200); // simulate payment processing
    
    // In a real app, you would initiate a Stripe Checkout and return the session ID
    return {
      orderId: `ord-${Date.now()}`,
      status: 'success',
      ...payload
    };
  },

  getPurchaseHistory: async (_userId: string) => {
    await delay(500);
    return []; // mock empty history response
  },

  downloadProductAsset: async (productId: string) => {
    await delay(800); // simulate asset generation/zipping
    return {
      downloadUrl: `https://mock.cdn.agentforge.com/downloads/${productId}.zip`
    };
  }
};
