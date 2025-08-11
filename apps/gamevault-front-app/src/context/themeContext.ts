import React from 'react';
import type { ThemeModeType } from '@games-vault/gamesvault-ui';

export const ThemeContext = React.createContext({
  currentTheme: 'light' as ThemeModeType,
  toggleTheme: () => {},
});
