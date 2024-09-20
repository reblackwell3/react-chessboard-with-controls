import { ReactNode } from 'react';
import { ThemeContext, getStylesForTheme } from './ThemeContext'; // Import ThemeContext from the correct file

interface ThemeProviderProps {
  children?: ReactNode;
  theme: 'light' | 'dark';
}

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  const { customDarkSquareStyle, customLightSquareStyle } =
    getStylesForTheme(theme);

  return (
    <ThemeContext.Provider
      value={{ customDarkSquareStyle, customLightSquareStyle }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
