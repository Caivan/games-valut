import { useContext, useState } from 'react';
import { Button, Typography } from '@games-vault/gamesvault-ui';
import {
  StyledHeader,
  StyledFilterContainer,
  StyledSearchInput,
} from './filterBar.styles';
import { FilterContext } from '../../context/filterContext';

function FilterBar() {
  const { filter, setFilter } = useContext(FilterContext);
  const [searchInput, setSearchInput] = useState(filter.search || '');
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFilter({ ...filter, search: searchInput });
  };

  const toggleNew = () => {
    setFilter({ ...filter, isNew: !filter.isNew });
  };

  return (
    <StyledHeader>
      <Typography variant="headline">Games Vault</Typography>
      <StyledFilterContainer>
        <StyledSearchInput
          type="text"
          placeholder="Search games..."
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
        />
        <Button onClick={handleSearchSubmit}>Search</Button>
        <Button
          onClick={toggleNew}
          variant={filter.isNew ? 'primary' : 'secondary'}
        >
          {filter.isNew ? 'Show All' : 'New Only'}
        </Button>
      </StyledFilterContainer>
    </StyledHeader>
  );
}

export default FilterBar;
