import  { useEffect, useState } from "react";


const useAuth = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setScrolled(scrollPosition > 20);
        setShowBackToTop(scrollPosition > 400);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  

    const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return {
    scrolled,
    setScrolled,
    mobileMenuOpen,
    setMobileMenuOpen,
    showBackToTop,
    isLoading,
    setIsLoading,
    scrollToTop
  };
};

export default useAuth;
