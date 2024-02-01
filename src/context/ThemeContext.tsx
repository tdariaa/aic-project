import React from 'react';
import PropTypes from 'prop-types';

interface ThemeContextInterface {
  theme: boolean;
  toggleTheme: () => void;
}

interface ThemeContextProps {
  children: React.ReactNode;
}

export const ThemeContext = React.createContext<ThemeContextInterface>({
  theme: true,
  toggleTheme: () => {},
});

export const ThemeContextProvider: React.FC<ThemeContextProps> = ({ children }) => {
  const [theme, setTheme] = React.useState(true);
  const toggleTheme = React.useCallback(() => {
    setTheme(!theme);
  }, [theme]);

  const value = React.useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node,
};
