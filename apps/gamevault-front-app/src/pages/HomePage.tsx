import { Button, Card, Typography } from '@games-vault/gamesvault-ui';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';

function HomePage() {
  useContext(ThemeContext);
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <Typography variant="display" color="primary">
        Welcome to Games Vault
      </Typography>
      <Typography variant="headline" as="h1" color="primary">
        The Ultimate Gaming Experience
      </Typography>
      <Card variant="muted" padding="large" radius="xl">
        <Typography variant="subtitle">Explore Your Favorite Games</Typography>
        <Typography variant="body" color="secondary">
          Discover a vast collection of games across various genres. Join the
          community and start your gaming journey today!
        </Typography>
        <Button onClick={() => toggleTheme()}>Toggle Theme</Button>
      </Card>
      <Card variant="default" padding="medium" radius="lg" interactive>
        <Typography variant="subtitle">Card Title</Typography>
        <Typography variant="body" color="secondary">
          This is some card content that demonstrates the card component.
        </Typography>
      </Card>
    </>
  );
}

export default HomePage;
