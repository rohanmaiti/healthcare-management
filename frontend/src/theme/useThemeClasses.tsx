import { useContext } from "react";
import ThemeContext from "./context";

const useThemeClasses = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeClasses must be used within a ThemeProvider");
  }
  
  const { isDark } = context;
  
  return {
    isDark,
    // background classes
    bg: {
      primary: isDark ? 'bg-slate-900' : 'bg-white',
      secondary: isDark ? 'bg-slate-800' : 'bg-gray-50',
      tertiary: isDark ? 'bg-slate-700' : 'bg-gray-100',
      card: isDark ? 'bg-slate-800' : 'bg-white',
      hover: isDark ? 'hover:bg-slate-700' : 'hover:bg-gray-50',
      sidebar: isDark ? 'bg-slate-900' : 'bg-white',
      topbar: isDark ? 'bg-slate-900' : 'bg-white',
      main: isDark ? 'bg-slate-950' : 'bg-[#F7F8FA]',
    },
    // text classes
    text: {
      primary: isDark ? 'text-white' : 'text-gray-900',
      secondary: isDark ? 'text-slate-300' : 'text-gray-600',
      muted: isDark ? 'text-slate-400' : 'text-gray-500',
      accent: isDark ? 'text-blue-400' : 'text-green-600',
      cardChange: isDark ? 'text-black' : 'text-gray-700',
    },
    // border classes
    border: {
      primary: isDark ? 'border-slate-700' : 'border-gray-200',
      secondary: isDark ? 'border-slate-600' : 'border-gray-300',
    },
    // accent colors
    accent: {
      primary: isDark ? 'bg-blue-600' : 'bg-green-600',
      secondary: isDark ? 'bg-blue-500' : 'bg-green-500',
      light: isDark ? 'bg-blue-900/30' : 'bg-green-50',
      gradient: isDark ? 'bg-gradient-to-br from-blue-500 to-blue-600' : 'bg-gradient-to-br from-green-500 to-green-600',
    },
    // button styles
    button: {
      primary: isDark 
        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
        : 'bg-green-600 hover:bg-green-700 text-white',
      secondary: isDark 
        ? 'bg-slate-700 hover:bg-slate-600 text-slate-300' 
        : 'bg-gray-200 hover:bg-gray-300 text-gray-700',
      ghost: isDark 
        ? 'hover:bg-slate-800 text-slate-300 hover:text-white' 
        : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900',
    },
    // menu item styles
    menuItem: {
      active: isDark 
        ? 'bg-blue-900/30 text-blue-400' 
        : 'bg-green-50 text-green-600',
      inactive: isDark 
        ? 'text-slate-300 hover:bg-slate-800 hover:text-white' 
        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
    }
  };
};

export default useThemeClasses;
