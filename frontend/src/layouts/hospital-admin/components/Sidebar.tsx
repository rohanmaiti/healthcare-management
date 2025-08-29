import { Link, useLocation } from "react-router-dom";
import { Menu, Heart, User, LogOut } from "lucide-react";
import { menuItems } from "../constants";
import useThemeClasses from "../../../theme/useThemeClasses";

interface SidebarProps {
  sidebarExpanded: boolean;
  toggleSidebar: () => void;
  mobileMenuOpen: boolean;
  closeMobileMenu: () => void;
  profileMenuOpen: boolean;
  toggleProfileMenu: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  sidebarExpanded,
  toggleSidebar,
  mobileMenuOpen,
  closeMobileMenu,
  profileMenuOpen,
  toggleProfileMenu,
}) => {
  const location = useLocation();
  const themeClasses = useThemeClasses();

  return (
    <div
      className={`flex flex-col transition-all duration-300 min-h-screen ${
        themeClasses.bg.sidebar
      } ${themeClasses.border.primary} ${
        sidebarExpanded ? "w-64" : "w-16"
      } ${
        mobileMenuOpen
          ? "fixed inset-y-0 left-0 z-50"
          : "hidden lg:flex lg:fixed lg:top-0 lg:left-0 lg:h-full lg:z-40"
      }`}
    >
      {/* Menu Toggle Section */}
      <div
        className={`flex items-center p-4 pb-0 ${
          themeClasses.border.primary
        } ${sidebarExpanded ? "justify-between" : "justify-center"}`}
      >
        {/* Close button for mobile */}
        {/* <div className="lg:hidden">
          <button
            onClick={closeMobileMenu}
            className={`p-2 rounded-lg transition-colors ${themeClasses.button.ghost}`}
          >
            <X className="h-5 w-5" />
          </button>
        </div> */}

        {/* Menu toggle button */}
        <button
          onClick={toggleSidebar}
          className={`p-2 rounded-lg transition-colors group ${
            themeClasses.button.ghost
          } ${mobileMenuOpen ? "lg:block" : ""}`}
        >
          <Menu className="h-5 w-5" />
          {!sidebarExpanded && (
            <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
              Expand Menu
            </div>
          )}
        </button>

        {/* Logo/Title when expanded */}
        {sidebarExpanded && (
          <div className="flex items-center space-x-3">
            <div
              className={`w-8 h-8 rounded-xl flex items-center justify-center ${themeClasses.accent.gradient}`}
            >
              <Heart className="h-4 w-4 text-white" /> 
            </div>
            <div>
              <h1 className={`text-lg font-bold ${themeClasses.text.accent}`}>
                MediSync
              </h1>
              <p className={`text-xs ${themeClasses.text.muted}`}>
                Hospital Admin
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-2 py-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.route;

          return (
            <div key={item.id} className="relative group">
              <Link
                to={item.route}
                className={`w-full flex items-center px-3 py-3 rounded-lg font-medium transition-all duration-200 ${
                  isActive
                    ? themeClasses.menuItem.active
                    : themeClasses.menuItem.inactive
                } ${!sidebarExpanded ? "justify-center" : ""}`}
                onClick={closeMobileMenu}
              >
                <Icon
                  className={`h-5 w-5 ${
                    sidebarExpanded ? "mr-3" : ""
                  } transition-colors duration-200 flex-shrink-0`}
                />
                {sidebarExpanded && (
                  <span className="transition-opacity duration-200 truncate">
                    {item.label}
                  </span>
                )}
              </Link>

              {!sidebarExpanded && (
                <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                  {item.label}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* User Profile Section */}
      <div className={`p-3 ${themeClasses.border.primary} border-t`}>
        <div className="relative" data-profile-menu>
          <button
            onClick={toggleProfileMenu}
            className={`w-full flex items-center p-2.5 rounded-lg transition-colors ${
              themeClasses.bg.hover
            } ${!sidebarExpanded ? "justify-center" : ""}`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0 ${themeClasses.accent.primary}`}
            >
              A
            </div>
            {sidebarExpanded && (
              <div className="ml-3 flex-1 text-left">
                <p
                  className={`text-sm font-medium ${themeClasses.text.primary}`}
                >
                  Admin User
                </p>
                <p className={`text-xs ${themeClasses.text.muted}`}>
                  Administrator
                </p>
              </div>
            )}
          </button>

          {profileMenuOpen && sidebarExpanded && (
            <div
              className={`absolute bottom-full mb-2 left-0 right-0 rounded-lg shadow-lg py-1 ${themeClasses.bg.card} ${themeClasses.border.primary} border`}
            >
              <button
                className={`w-full flex items-center px-3 py-2 text-sm transition-colors ${themeClasses.button.ghost}`}
              >
                <User className="h-4 w-4 mr-2" />
                Profile
              </button>
              <button
                className={`w-full flex items-center px-3 py-2 text-sm transition-colors ${themeClasses.button.ghost}`}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            </div>
          )}

          {/* Tooltip for collapsed profile */}
          {!sidebarExpanded && (
            <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 group">
              Admin User
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
