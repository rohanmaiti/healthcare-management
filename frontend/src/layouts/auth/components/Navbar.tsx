import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Hospital, Menu, X, Sun, Moon } from "lucide-react";
import useThemeClasses from "../../../theme/useThemeClasses";
import { useThemeContext } from "../../../theme/useTheme";
import useAuth from "../useAuth";
import { navItems } from "../contants";

export const Navbar = () => {
  const themeClasses = useThemeClasses();
  const { toggleTheme, isDark } = useThemeContext();

  const { scrolled, mobileMenuOpen, setMobileMenuOpen } = useAuth();

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? `${themeClasses.bg.topbar} ${
                themeClasses.border.primary
              } border-b backdrop-blur-md shadow-lg ${
                isDark ? "shadow-blue-900/20" : "shadow-green-500/10"
              }`
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className={`p-2 rounded-lg ${themeClasses.accent.gradient}`}>
                <Hospital className="w-6 h-6 text-white" />
              </div>
              <span
                className={`text-xl font-bold ${themeClasses.text.primary}`}
              >
                Medisync
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`${themeClasses.text.secondary} hover:${themeClasses.text.accent} transition-colors duration-200`}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.a>
              ))}

              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${themeClasses.bg.hover} ${themeClasses.text.secondary} transition-colors`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isDark ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </motion.button>

              {/* Auth Buttons */}
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <motion.button
                    className={`px-4 py-2 rounded-lg ${themeClasses.button.ghost} transition-colors`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Login
                  </motion.button>
                </Link>
                <Link to="/signup">
                  <motion.button
                    className={`px-4 py-2 rounded-lg ${themeClasses.button.primary} transition-colors`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Sign Up
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <motion.button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${themeClasses.bg.hover} ${themeClasses.text.secondary}`}
                whileTap={{ scale: 0.9 }}
              >
                {isDark ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </motion.button>
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg ${themeClasses.bg.hover} ${themeClasses.text.secondary}`}
                whileTap={{ scale: 0.9 }}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden ${themeClasses.bg.topbar} ${themeClasses.border.primary} border-t backdrop-blur-md`}
            >
              <div className="px-4 py-4 space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block ${themeClasses.text.secondary} hover:${themeClasses.text.accent} transition-colors`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 space-y-2">
                  <Link to="/login" className="block">
                    <button
                      className={`w-full px-4 py-2 rounded-lg ${themeClasses.button.ghost} text-center`}
                    >
                      Login
                    </button>
                  </Link>
                  <Link to="/signup" className="block">
                    <button
                      className={`w-full px-4 py-2 rounded-lg ${themeClasses.button.primary} text-center`}
                    >
                      Sign Up
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};
