/**
 * Simulated authentication service for Aivora MVP.
 * Replace with real API calls using Axios later.
 */

// Simulates network delay
const delay = (ms) => new Promise(res => setTimeout(res, ms));

export const authService = {
  login: async (email, _password) => {
    await delay(800);
    // Real implementation would pass credentials and receive JWT
    return {
      id: `user-${Date.now()}`,
      email,
      name: email.split('@')[0],
      token: 'fake-jwt-token-123',
    };
  },

  signup: async (name, email, _password) => {
    await delay(1200);
    return {
      id: `user-${Date.now()}`,
      email,
      name,
      token: 'fake-jwt-token-456',
    };
  },

  logout: async () => {
    await delay(300);
    return true;
  },

  verifySession: async (token) => {
    await delay(500);
    return token.startsWith('fake-jwt');
  }
};
