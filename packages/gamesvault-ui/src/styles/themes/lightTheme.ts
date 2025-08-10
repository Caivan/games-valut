import { baseTokens } from './baseTokens';
import type { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  name: 'light',
  colors: {
    primary: '#4E46E5',
    surface: '#FFFFFF',
    surfaceMuted: '#F7F8FA',
    textPrimary: '#1E1E1E',
    textSecondary: '#6B7280',
    accent: '#F59E0B',
    danger: '#EF4444',
    border: '#E5E7EB',
  },
  ...baseTokens,
};
