import { baseTokens } from './baseTokens';
import type { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  name: 'dark',
  colors: {
    primary: '#60A5FA', // Bright Sky Blue
    primaryHover: '#3B82F6',
    secondary: '#D884A5', // Soft Rose-Mauve
    secondaryHover: '#E9A7C1',
    background: '#111827', // Rich Charcoal
    surface: '#1F2937', // Darker Card Background
    surfaceMuted: '#1C1C22', // soft charcoal for panels/cards
    textPrimary: '#F9FAFB', // Almost White
    textSecondary: '#D1D5DB', // Light Gray
    border: '#374151',
    success: '#34D399', // Bright Emerald
    warning: '#FBBF24', // Amber Yellow
    error: '#F87171', // Soft Red
    danger: '#EF4444', // Vibrant Red — destructive actions
    info: '#93C5FD', // Soft Sky Blue
    accent: '#A78BFA', // Soft Lavender-Purple
    accentHover: '#8B5CF6',
    overlay: 'rgba(0,0,0,0.6)',
  },
  ...baseTokens,
};
