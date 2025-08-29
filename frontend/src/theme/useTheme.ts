import { useContext, useEffect, useState } from "react";
import { type Theme, type ThemeContextType } from "./context";
import ThemeContext from "./context";

// Custom hook to use theme context
export const useTheme = () => {
  const [theme, setThemeState] = useState<Theme>(() => {
     try {
      // Get saved theme from localStorage
      const savedTheme = localStorage.getItem('theme') as Theme | null;
      return savedTheme ?? 'light';
    } catch (error) {
      console.warn('Failed to read theme from localStorage:', error);
      return 'light';
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    try {
      localStorage.setItem("theme", theme);
      root.classList.remove("light", "dark");
      root.classList.add(theme);
      root.style.colorScheme = theme;
    } catch (error) {
      console.warn("Failed to apply theme:", error);
    }
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === "light" ? "dark" : "light"));
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const value: ThemeContextType = {
    theme,
    toggleTheme,
    setTheme,
    isDark: theme === "dark",
  };

  return {
    theme,
    setThemeState,
    toggleTheme,
    value,
    isDark: theme === "dark",
  };
};

// Hook to use theme context (for components)
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
