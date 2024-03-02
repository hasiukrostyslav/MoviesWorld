import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) throw new Error('useTheme has to be used within ThemeProvider');

  const theme = context.theme;
  const toggleDarkMode = context.toggleDarkMode;

  return { theme, toggleDarkMode };
}

export default useTheme;
