import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';
import { Button, Typography } from '@games-vault/gamesvault-ui';
import { StyledHeader } from './header.styles';

function Header() {
  const { toggleTheme, currentTheme } = useContext(ThemeContext);

  return (
    <StyledHeader>
      <Typography variant="headline">Games Vault</Typography>
      <Button size='small' onClick={() => toggleTheme()}>
        {currentTheme === 'light' ? 'Dark' : 'Light'}
      </Button>
    </StyledHeader>
  );
}

export default Header;
