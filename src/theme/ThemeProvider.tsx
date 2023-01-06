import React, { ReactNode } from 'react';
import { ThemeContext } from './ThemeContext';
import { Theme } from './types';

interface ThemeProviderProps {
  children: ReactNode;
  theme: Theme;
}

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
