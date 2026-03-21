import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  purchasedItems: string[];
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string) => void;
  logout: () => void;
  purchase: (productId: string) => void;
}

export const useAuthStore = create<AuthState>()(
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
      name: 'agentforge-auth', // localStorage key
    }
  )
);
