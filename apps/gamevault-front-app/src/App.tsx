import { useState } from 'react';
import './App.css';

import {
  Button,
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
      <div className="card">
        <Button onClick={() => toggleTheme()}>Toggle Theme</Button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </ThemeProvider>
  );
}

export default App;
