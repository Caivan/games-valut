import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      primary: string;
      surface: string;
      surfaceMuted: string;
      textPrimary: string;
      textSecondary: string;
      accent: string;
      danger: string;
      border: string;
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
        normal: number;
        medium: number;
        semibold: number;
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
  }
}
