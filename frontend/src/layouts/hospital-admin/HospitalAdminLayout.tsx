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
        {/* mobile menu overlay */}
        <MobileMenuOverlay isOpen={mobileMenuOpen} onClose={closeMobileMenu} />

        {/* sidebar - responsive positioning */}
        <Sidebar
          sidebarExpanded={sidebarExpanded}
          toggleSidebar={toggleSidebar}
          mobileMenuOpen={mobileMenuOpen}
          closeMobileMenu={closeMobileMenu}
          profileMenuOpen={profileMenuOpen}
          toggleProfileMenu={toggleProfileMenu}
        />

        {/* main content Area fixed sidebar */}
        <div
          className={`flex-1 flex flex-col min-h-screen ${
            sidebarExpanded ? "md:ml-64" : "md:ml-16"
          } transition-all duration-300`}
        >
          {/* header - sticky positioning */}
          <div className="sticky top-0 z-30">
            <Topbar
              openMobileMenu={openMobileMenu}
              profileMenuOpen={profileMenuOpen}
              toggleProfileMenu={toggleProfileMenu}
            />
          </div>

          {/* main content */}
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
