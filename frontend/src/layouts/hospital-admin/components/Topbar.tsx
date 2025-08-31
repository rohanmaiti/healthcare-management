import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Menu, Bell, Sun, Moon, User, LogOut } from "lucide-react";
import { menuItems } from "../constants";
import useThemeClasses from "../../../theme/useThemeClasses";
import ThemeContext from "../../../theme/context";
import { useAppDispatch } from "../../../store/hooks";
import { logout } from "../../../store/slices/auth.slice";

interface TopbarProps {
  openMobileMenu: () => void;
  profileMenuOpen: boolean;
  toggleProfileMenu: () => void;
}

const Topbar: React.FC<TopbarProps> = ({
  openMobileMenu,
  profileMenuOpen,
  toggleProfileMenu,
}) => {
  const location = useLocation();
  const themeClasses = useThemeClasses();
  const themeContext = useContext(ThemeContext);
  
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  if (!themeContext) {
    throw new Error("Topbar must be used within a ThemeProvider");
  }

  const { toggleTheme, isDark } = themeContext;

  const currentMenuItem = menuItems.find(
    (item) => item.route === location.pathname
  );

  return (
    <header
      className={`px-4 py-3 ${themeClasses.bg.topbar} ${themeClasses.border.primary}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Mobile menu button */}
          <button
            onClick={openMobileMenu}
            className={`lg:hidden p-2 rounded-lg transition-colors ${themeClasses.button.ghost}`}
          >
            <Menu className="h-5 w-5" />
          </button>

          <h1 className={`text-xl font-semibold ${themeClasses.text.primary}`}>
            {currentMenuItem?.label || "Dashboard"}
          </h1>
        </div>

        <div className="flex items-center space-x-3">
          {/* Notifications */}
          <button
            className={`relative p-2 rounded-lg transition-colors ${themeClasses.button.ghost}`}
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-all duration-200 ${themeClasses.bg.hover}`}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <div className="relative w-5 h-5 transition-transform duration-200">
              {isDark ? (
                <Sun className="h-5 w-5 text-yellow-500 animate-pulse" />
              ) : (
                <Moon className={`h-5 w-5 ${themeClasses.text.secondary}`} />
              )}
            </div>
          </button>

          {/* Profile Menu (Mobile) */}
          <div className="lg:hidden relative" data-profile-menu>
            <button
              onClick={toggleProfileMenu}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold ${themeClasses.accent.primary}`}
            >
              A
            </button>

            {profileMenuOpen && (
              <div
                className={`absolute top-full right-0 mt-2 w-48 rounded-lg shadow-lg py-1 ${themeClasses.bg.card} ${themeClasses.border.primary} border`}
              >
                <button
                  className={`w-full flex items-center px-3 py-2 text-sm transition-colors ${themeClasses.button.ghost}`}
                >
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </button>
                <button
                  className={`w-full flex items-center px-3 py-2 text-sm transition-colors ${themeClasses.button.ghost}`}
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
