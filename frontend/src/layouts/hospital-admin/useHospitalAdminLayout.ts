import { useState, useEffect } from "react";

export const useHospitalAdminLayout = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState<boolean>(false);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (profileMenuOpen && !target.closest("[data-profile-menu]")) {
        setProfileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [profileMenuOpen]);

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const openMobileMenu = () => {
    setMobileMenuOpen(true);
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
