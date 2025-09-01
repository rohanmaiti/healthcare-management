import { useState, useEffect } from "react";

export const useHospitalAdminLayout = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState<boolean>(false);

  // close mobile menu when screen size changes and manage sidebar state
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setMobileMenuOpen(false); // close mobile overlay on tablet/desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // close dropdowns and sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      
      // close profile menu when clicking outside
      if (profileMenuOpen && !target.closest("[data-profile-menu]")) {
        setProfileMenuOpen(false);
      }
      
      // close sidebar when clicking outside (on tablet/desktop when expanded)
      if (sidebarExpanded && !target.closest("[data-sidebar]") && !target.closest("[data-sidebar-toggle]")) {
        // only auto-close on tablet/desktop, not on mobile overlay
        if (window.innerWidth >= 768 && !mobileMenuOpen) {
          setSidebarExpanded(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [profileMenuOpen, sidebarExpanded, mobileMenuOpen]);

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setSidebarExpanded(false);
  };

  const openMobileMenu = () => {
    setMobileMenuOpen(true);
    setSidebarExpanded(true);
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  return {
    sidebarExpanded,
    setSidebarExpanded,
    mobileMenuOpen,
    profileMenuOpen,
    toggleSidebar,
    closeMobileMenu,
    openMobileMenu,
    toggleProfileMenu,
  };
};
