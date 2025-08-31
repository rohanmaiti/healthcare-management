// Environment configuration helper
const config = {
  // API Configuration
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000/api',
  
  // App Configuration
  APP_ENV: import.meta.env.VITE_APP_ENV || 'development',
  
  // Development helpers
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
  
  // Server URLs (useful for redirects, etc.)
  getServerUrl: () => {
    return import.meta.env.VITE_API_BASE_URL?.replace('/api', '') || 'http://localhost:4000';
  },
  
  // Debug helper
  debug: (message: string, data?: unknown) => {
    if (import.meta.env.DEV) {
      console.log(`[${config.APP_ENV.toUpperCase()}] ${message}`, data || '');
    }
  }
};

export default config;
