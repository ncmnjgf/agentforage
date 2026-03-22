import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create()(
  persist(
    (set) => ({
  user: null,
  isAuthenticated: false,
  login: (email) => {
    // Mock login functionality
    set({
      user: {
        id: 'user-1',
        name: email.split('@')[0],
        email,
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + email,
        purchasedItems: [],
      },
      isAuthenticated: true,
    });
  },
  logout: () => set({ user: null, isAuthenticated: false }),
  purchase: (productId) => set((state) => ({
    user: state.user ? {
      ...state.user,
      purchasedItems: [...(state.user.purchasedItems || []), productId]
    } : null
  })),
    }),
    {
      name: 'Aivora-auth', // localStorage key
    }
  )
);
