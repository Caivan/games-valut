import React, { type ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { themeMap, type ThemeModeType } from './theme';
import { GlobalStyles } from '../GlobalStyles';

interface ThemeProviderProps {
  children: ReactNode;
  theme?: ThemeModeType;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme = 'light',
}) => {
  return (
    <>
      <StyledThemeProvider theme={themeMap[theme]}>
        <GlobalStyles/>
        {children}
      </StyledThemeProvider>
    </>
  );
};
