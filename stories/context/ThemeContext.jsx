import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { lightTheme, darkTheme, typography, spacing, borderRadius, animation, breakpoints, zIndex } from '../tokens/design-tokens';

/**
 * Theme Context for managing light/dark mode
 */
const ThemeContext = createContext();

/**
 * Custom hook to use theme context
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

/**
 * Theme Provider component
 */
export const ThemeProvider = ({ children, initialTheme = 'light', storageKey = 'theme-preference' }) => {
  const [theme, setTheme] = useState(initialTheme);
  const [isSystemTheme, setIsSystemTheme] = useState(false);

  // Get the current theme tokens
  const getThemeTokens = (themeName) => {
    const baseTokens = {
      typography,
      spacing,
      borderRadius,
      animation,
      breakpoints,
      zIndex,
    };

    return themeName === 'dark'
      ? { ...baseTokens, ...darkTheme, name: 'dark' }
      : { ...baseTokens, ...lightTheme, name: 'light' };
  };

  const tokens = getThemeTokens(theme);

  // Initialize theme from storage or system preference
  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (stored === 'system' || !stored) {
      setIsSystemTheme(true);
      setTheme(systemPrefersDark ? 'dark' : 'light');
    } else if (stored) {
      setIsSystemTheme(false);
      setTheme(stored);
    }
  }, [storageKey]);

  // Listen for system theme changes when using system theme
  useEffect(() => {
    if (!isSystemTheme) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [isSystemTheme]);

  // Apply theme to document root
  useEffect(() => {
    const root = document.documentElement;
    const themeTokens = getThemeTokens(theme);
    
    // Apply CSS custom properties
    const applyTokens = (obj, prefix = '') => {
      Object.entries(obj).forEach(([key, value]) => {
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
          applyTokens(value, `${prefix}${key}-`);
        } else {
          const cssVar = `--${prefix}${key}`;
          root.style.setProperty(cssVar, value);
        }
      });
    };

    // Clear existing theme variables
    Array.from(root.style).forEach(property => {
      if (property.startsWith('--')) {
        root.style.removeProperty(property);
      }
    });

    // Apply new theme tokens
    applyTokens(themeTokens.colors, 'color-');
    applyTokens(themeTokens.shadows, 'shadow-');
    applyTokens(themeTokens.typography.fontSizes, 'font-size-');
    applyTokens(themeTokens.typography.fontWeights, 'font-weight-');
    applyTokens(themeTokens.typography.lineHeights, 'line-height-');
    applyTokens(themeTokens.spacing, 'spacing-');
    applyTokens(themeTokens.borderRadius, 'border-radius-');

    // Set theme class on body for CSS selectors
    document.body.className = document.body.className.replace(/theme-\w+/g, '');
    document.body.classList.add(`theme-${theme}`);
    
    // Set data attribute for easier CSS targeting
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  // Theme switching functions
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setIsSystemTheme(false);
    localStorage.setItem(storageKey, newTheme);
  };

  const setLightTheme = () => {
    setTheme('light');
    setIsSystemTheme(false);
    localStorage.setItem(storageKey, 'light');
  };

  const setDarkTheme = () => {
    setTheme('dark');
    setIsSystemTheme(false);
    localStorage.setItem(storageKey, 'dark');
  };

  const setSystemTheme = () => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(systemPrefersDark ? 'dark' : 'light');
    setIsSystemTheme(true);
    localStorage.setItem(storageKey, 'system');
  };

  const contextValue = {
    // Current theme state
    theme,
    tokens,
    isSystemTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light',
    
    // Theme switching functions
    toggleTheme,
    setLightTheme,
    setDarkTheme,
    setSystemTheme,
    
    // Utility functions
    getColor: (colorPath) => {
      const path = colorPath.split('.');
      let value = tokens.colors;
      for (const key of path) {
        value = value?.[key];
        if (value === undefined) break;
      }
      return value;
    },
    
    getShadow: (shadowKey) => tokens.shadows[shadowKey],
    
    getSpacing: (spacingKey) => tokens.spacing[spacingKey],
    
    // CSS variable getter
    getCSSVar: (varName) => `var(--${varName})`,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  initialTheme: PropTypes.oneOf(['light', 'dark']),
  storageKey: PropTypes.string,
};

/**
 * HOC to inject theme props into components
 */
export const withTheme = (Component) => {
  const ThemedComponent = (props) => {
    const theme = useTheme();
    return <Component {...props} theme={theme} />;
  };
  
  ThemedComponent.displayName = `withTheme(${Component.displayName || Component.name})`;
  return ThemedComponent;
};