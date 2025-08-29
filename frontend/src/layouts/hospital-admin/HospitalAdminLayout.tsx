import { Outlet } from "react-router-dom";
import { useHospitalAdminLayout } from "./useHospitalAdminLayout";
import useThemeClasses from "../../theme/useThemeClasses";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import MobileMenuOverlay from "./components/MobileMenuOverlay";


const HospitalAdminLayout = () => {
  const themeClasses = useThemeClasses();
  const {
    sidebarExpanded,
    mobileMenuOpen,
    profileMenuOpen,
    toggleSidebar,
    closeMobileMenu,
    openMobileMenu,
    toggleProfileMenu,
  } = useHospitalAdminLayout();

  return (
    <div className={`min-h-screen ${themeClasses.bg.main}`}>
      <div className="flex min-h-screen">
        {/* Mobile menu overlay */}
        <MobileMenuOverlay isOpen={mobileMenuOpen} onClose={closeMobileMenu} />

        {/* Sidebar - Responsive positioning */}
        <Sidebar
          sidebarExpanded={sidebarExpanded}
          toggleSidebar={toggleSidebar}
          mobileMenuOpen={mobileMenuOpen}
          closeMobileMenu={closeMobileMenu}
          profileMenuOpen={profileMenuOpen}
          toggleProfileMenu={toggleProfileMenu}
        />

        {/* Main Content Area - Adjusted for fixed sidebar */}
        <div
          className={`flex-1 flex flex-col min-h-screen ${
            sidebarExpanded ? "lg:ml-64" : "lg:ml-16"
          } transition-all duration-300`}
        >
          {/* Header - Sticky positioning */}
          <div className="sticky top-0 z-30">
            <Topbar
              openMobileMenu={openMobileMenu}
              profileMenuOpen={profileMenuOpen}
              toggleProfileMenu={toggleProfileMenu}
            />
          </div>

          {/* Main Content */}
          <main className={`flex-1 overflow-auto ${themeClasses.bg.main} `}>
            <div className={themeClasses.text.primary}>
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default HospitalAdminLayout;
