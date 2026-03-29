import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { authService } from '../api/auth';

export const useAuthStore = create()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (email, password) => {
        set({ isLoading: true, error: null });
        try {
          const data = await authService.login(email, password);
          set({ 
            user: data, 
            token: data.token,
            isAuthenticated: true, 
            isLoading: false 
          });
        } catch (err) {
          set({ error: 'Authentication failed', isLoading: false });
        }
      },

      signup: async (userData) => {
        set({ isLoading: true, error: null });
        try {
          const data = await authService.signup(userData);
          set({ 
            user: data, 
            token: data.token,
            isAuthenticated: true, 
            isLoading: false 
          });
        } catch (err) {
          set({ error: 'Registration failed', isLoading: false });
        }
      },

      logout: () => set({ user: null, token: null, isAuthenticated: false }),
      
      purchase: (productId) => set((state) => ({
        user: state.user ? {
          ...state.user,
          purchasedItems: [...(state.user.purchasedItems || []), productId]
        } : null
      })),
    }),
    {
      name: 'Aivora-auth',
    }
  )
);
