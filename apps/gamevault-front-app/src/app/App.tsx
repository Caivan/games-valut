import { useState } from 'react';

import { ThemeProvider, type ThemeModeType } from '@games-vault/gamesvault-ui';
import { AppContainer, MainContent } from './app.styles';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import { Header } from '../components';
import HomePage from '../pages/HomePage';
import { ThemeContext } from '../context/themeContext';

function App() {
  const [theme, setTheme] = useState<ThemeModeType>('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ currentTheme: theme, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Header />
          <MainContent>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </MainContent>
        </AppContainer>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
