import type { Preview } from '@storybook/react-vite';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../src/styles/themes';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
    Provider: ThemeProvider,
  }),
];

export default preview;
