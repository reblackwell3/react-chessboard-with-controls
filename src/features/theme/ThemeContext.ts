import { createContext, useContext } from 'react';

// Define the shape of the context
interface ThemeContextType {
  customDarkSquareStyle: { backgroundColor: string };
  customLightSquareStyle: { backgroundColor: string };
}

// Create the context with an initial value of null
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom hook for easy theme access
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Factory method to set styles based on theme
export const getStylesForTheme = (theme: 'light' | 'dark') => {
  if (theme === 'dark') {
    return {
      customDarkSquareStyle: { backgroundColor: '#838387' },
      customLightSquareStyle: { backgroundColor: '#e1e1e3' },
    };
  } else {
    return {
      customDarkSquareStyle: { backgroundColor: '#b58863' },
      customLightSquareStyle: { backgroundColor: '#f0d9b5' },
    };
  }
};

export default ThemeContext;
