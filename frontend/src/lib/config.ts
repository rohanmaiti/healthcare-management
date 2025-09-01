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
    return import.meta.env.VITE_SERVER_URL || 'http://localhost:4000';
  },
  
  // Auto-detect environment and provide appropriate URLs
  getApiUrl: () => {
    // If we're in production or the hostname is not localhost
    if (import.meta.env.PROD || !window.location.hostname.includes('localhost')) {
      return import.meta.env.VITE_API_BASE_URL || 'https://your-render-backend.onrender.com/api';
    }
    return 'http://localhost:4000/api';
  },
  
  // Debug helper
  debug: (message: string, data?: unknown) => {
    if (import.meta.env.DEV) {
      console.log(`[${config.APP_ENV.toUpperCase()}] ${message}`, data || '');
    }
  },
  
  // Get current environment info
  getEnvInfo: () => ({
    mode: import.meta.env.MODE,
    dev: import.meta.env.DEV,
    prod: import.meta.env.PROD,
    apiUrl: config.API_BASE_URL,
    serverUrl: config.getServerUrl(),
    hostname: typeof window !== 'undefined' ? window.location.hostname : 'unknown'
  })
};

export default config;
