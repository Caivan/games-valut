import { baseTokens } from './baseTokens';
import type { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  name: 'light',
  colors: {
    primary: '#004E89', // Deep Sapphire
    primaryHover: '#006BB3',
    secondary: '#8C3F63', // Mulberry Wine
    secondaryHover: '#A84D78',
    background: '#F9FAFB', // Soft White
    surface: '#FFFFFF',
    surfaceMuted: '#F3F4F6', // subtle light gray for panels/cards
    textPrimary: '#1B1B1B', // Almost Black
    textSecondary: '#3E4C59', // Muted Charcoal
    border: '#D1D5DB',
    success: '#0F766E', // Emerald Green
    warning: '#B45309', // Amber
    error: '#B91C1C', // Crimson
    danger: '#DC2626', // Vivid Red — destructive actions
    info: '#1E3A8A', // Navy Blue
    accent: '#7C3AED', // Royal Purple
    accentHover: '#6D28D9',
    overlay: 'rgba(0,0,0,0.4)', // Backdrop overlay
  },
  ...baseTokens,
};
