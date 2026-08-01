import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Inicializamos leyendo de localStorage o por defecto 'dark'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('cuadrapro_theme');
    return savedTheme ? savedTheme : 'dark';
  });

  useEffect(() => {
    // Aplicamos el tema al HTML
    document.documentElement.setAttribute('data-theme', theme);
    // Guardamos la preferencia en localStorage
    localStorage.setItem('cuadrapro_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
