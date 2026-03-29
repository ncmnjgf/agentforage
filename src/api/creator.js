const delay = (ms) => new Promise(res => setTimeout(res, ms));

export const creatorService = {
  uploadAgent: async (formData) => {
    await delay(2000);
    return { success: true, agentId: 'agt_' + Math.random().toString(36).substr(2, 9) };
  },
  
  getEarnings: async (creatorId) => {
    await delay(1000);
    return {
      totalRevenue: 8420.00,
      balance: 1240.50,
      avgOrderValue: 124.00,
      history: [
        { id: 'tx_1', date: 'Sep 24, 2023', amount: 124.00, status: 'Completed', type: 'Sale' },
        { id: 'tx_2', date: 'Sep 22, 2023', amount: 49.00, status: 'Completed', type: 'Sale' },
        { id: 'tx_3', date: 'Sep 20, 2023', amount: 1500.00, status: 'Processing', type: 'Payout' },
      ]
    };
  },
  
  getOrders: async (creatorId) => {
    await delay(1200);
    return [
      { id: 'ORD-8241', date: 'Sep 24, 2023', product: 'Nexus Flow Optimizer', buyer: 'Quantum Solutions', amount: '$124.00', status: 'Delivered' },
      { id: 'ORD-8238', date: 'Sep 23, 2023', product: 'Nexus Flow Optimizer', buyer: 'Future Labs', amount: '$124.00', status: 'Delivered' },
      { id: 'ORD-8235', date: 'Sep 22, 2023', product: 'AutoCoder Pro', buyer: 'DevForge AI', amount: '$49.00', status: 'Delivered' },
    ];
  }
};
