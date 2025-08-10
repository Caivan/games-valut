import { baseTokens } from './baseTokens';
import type { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  name: 'dark',
  colors: {
    primary: '#7B74F5',
    surface: '#121212',
    surfaceMuted: '#1E1E1E',
    textPrimary: '#F0F0F0',
    textSecondary: '#A1A1AA',
    accent: '#FBBF24',
    danger: '#F87171',
    border: '#2E2E2E',
  },
  ...baseTokens,
};
