import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('theme-transition');
    root.dataset.theme = theme;
    const removeTransitionClass = () => {
      setTimeout(() => {
        document.documentElement.classList.remove('theme-transition');
      }, 500);
    };
    removeTransitionClass();
  }, [theme]);

  const contextValue = {
    theme,
    setTheme,
    nextTheme,
  };
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
