import React, { type ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { themeMap, type ThemeModeType } from './theme';

interface ThemeProviderProps {
  children: ReactNode;
  theme?: ThemeModeType;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme = 'LIGHT',
}) => {
  return (
    <StyledThemeProvider theme={themeMap[theme]}>
      {children}
    </StyledThemeProvider>
  );
};
