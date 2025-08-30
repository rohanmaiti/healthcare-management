import React from 'react';

// Component to generate favicon programmatically
export const FaviconGenerator: React.FC = () => {
  React.useEffect(() => {
    const generateFavicon = () => {
      // Create a canvas element
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) return;
      
      canvas.width = 32;
      canvas.height = 32;
      
      // Fill background with green
      ctx.fillStyle = '#059669';
      ctx.fillRect(0, 0, 32, 32);
      
      // Create a simple medical cross in white
      ctx.fillStyle = 'white';
      
      // Vertical bar of cross
      ctx.fillRect(12, 6, 8, 20);
      
      // Horizontal bar of cross
      ctx.fillRect(6, 12, 20, 8);
      
      // Convert canvas to data URL
      const dataURL = canvas.toDataURL('image/png');
      
      // Update favicon
      let favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
      if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'icon';
        favicon.type = 'image/png';
        document.head.appendChild(favicon);
      }
      
      favicon.href = dataURL;
    };
    
    generateFavicon();
  }, []);
  
  return null; // This component doesn't render anything
};

export default FaviconGenerator;
