import type { DefaultTheme } from 'styled-components';
import { darkTheme } from './darkTheme';
import { lightTheme } from './lightTheme';

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      primary: string;
      primaryHover: string;
      surface: string;
      surfaceMuted: string;
      secondary: string;
      secondaryHover: string;
      background: string;
      textPrimary: string;
      textSecondary: string;
      info: string;
      accent: string;
      accentHover: string;
      success: string;
      error: string;
      danger: string;
      border: string;
      warning: string;
      overlay: string;
    };
    typography: {
      fontFamily: string;
      sizes: {
        headline: string;
        subtitle: string;
        body: string;
        caption: string;
        label: string;
      };
      weights: {
        regular: number;
        medium: number;
        semibold: number;
        bold: number;
      };
      lineHeights: {
        headline: number;
        subtitle: number;
        body: number;
        caption: number;
        label: number;
      };
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    radii: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}

export const ThemeMode = {
  LIGHT: 'light',
  DARK: 'dark',
};

export type ThemeModeType = (typeof ThemeMode)[keyof typeof ThemeMode];

export const themeMap: Record<ThemeModeType, DefaultTheme> = {
  [ThemeMode.LIGHT]: lightTheme,
  [ThemeMode.DARK]: darkTheme,
};
