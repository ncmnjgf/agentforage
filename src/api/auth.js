// Mocking API delay
const delay = (ms) => new Promise(res => setTimeout(res, ms));

export const authService = {
  login: async (email, password) => {
    await delay(1000); // Simulate network latency
    return {
      id: 'usr_824',
      name: email.split('@')[0],
      email: email,
      role: 'creator',
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
    };
  },
  
  signup: async (data) => {
    await delay(1200);
    return {
      ...data,
      id: 'usr_' + Math.random().toString(36).substr(2, 9),
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
    };
  },
  
  logout: async () => {
    await delay(500);
    return { success: true };
  }
};
