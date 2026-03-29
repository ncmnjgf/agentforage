const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://aviro-api.render.com';

const config = {
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

export default config;
