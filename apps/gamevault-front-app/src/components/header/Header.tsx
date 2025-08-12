import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';
import { Button, Typography } from '@games-vault/gamesvault-ui';
import { StyledHeader } from './header.styles';

function Header() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <StyledHeader>
      <Typography variant="headline">Games Vault</Typography>
      <Button onClick={() => toggleTheme()}>Toggle Theme</Button>
    </StyledHeader>
  );
}

export default Header;
