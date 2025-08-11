import { useState } from 'react';


import {
  Button,
  Card,
  ThemeProvider,
  Typography,
  type ThemeModeType,
} from '@games-vault/gamesvault-ui';

function App() {
  const [theme, setTheme] = useState<ThemeModeType>('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="display" color="primary">
        Welcome to Games Vault
      </Typography>
      <Typography variant="headline" as="h1" color="primary">
        The Ultimate Gaming Experience
      </Typography>
      <Card variant="muted" padding="large" radius="xl" >
        <Typography variant="subtitle">Explore Your Favorite Games</Typography>
        <Typography variant="body" color="secondary">
          Discover a vast collection of games across various genres. Join the community and start your gaming journey today!
        </Typography>
        <Button onClick={() => toggleTheme()}>Toggle Theme</Button>
      </Card>
      <Card variant="default" padding="medium" radius="lg" interactive>
        <Typography variant="subtitle">Card Title</Typography>
        <Typography variant="body" color="secondary">
          This is some card content that demonstrates the card component.
        </Typography>
      </Card>
      <h1>hello world</h1>
    </ThemeProvider>
  );
}

export default App;
