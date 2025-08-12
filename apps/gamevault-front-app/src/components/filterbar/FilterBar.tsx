import { useContext, useEffect, useState } from 'react';
import { Button, Typography } from '@games-vault/gamesvault-ui';
import {
  StyledHeader,
  StyledFilterContainer,
  StyledSearchInput,
  CloseButton,
  FilterTag,
  FiltersSection,
} from './filterBar.styles';
import { FilterContext } from '../../context/filterContext';

function FilterBar() {
  const { filter, setFilter } = useContext(FilterContext);
  const [searchInput, setSearchInput] = useState(filter.search || '');

  useEffect(() => {
    setFilter(prevFilter => ({ ...prevFilter, search: searchInput.trim() }));
  }, [searchInput, setFilter]);

  const toggleNew = () => {
    setFilter({ ...filter, isNew: !filter.isNew });
  };

  return (
    <StyledHeader>
      <StyledFilterContainer>
        <Typography variant="subtitle">Filter</Typography>
        <StyledSearchInput
          type="text"
          placeholder="Search games..."
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
        />
        <Button
          size="small"
          onClick={toggleNew}
          variant={filter.isNew ? 'primary' : 'secondary'}
        >
          {filter.isNew ? 'All' : 'New'}
        </Button>
      </StyledFilterContainer>
      <FiltersSection>
        {filter.search && (
          <FilterTag>
            <Typography variant="caption">{filter.search}</Typography>
            <CloseButton onClick={() => setSearchInput('')}>x</CloseButton>
          </FilterTag>
        )}
        {filter.isNew && (
          <>
            <FilterTag>
              <Typography variant="caption">New</Typography>
              <CloseButton onClick={toggleNew}>x</CloseButton>
            </FilterTag>
          </>
        )}
        {filter.providers && (
          <span>Provider: {filter.providers.join(', ')}</span>
        )}
        {filter.types && <span>Type: {filter.types.join(', ')}</span>}
      </FiltersSection>
      <FiltersSection>
        <Button
          size="small"
          onClick={() => setFilter({ ...filter, page: filter.page - 1 })}
          disabled={filter.page <= 1}
        >
          Previous
        </Button>
        <Typography variant="caption" color="secondary">
          {`Page ${filter.page}`}
        </Typography>
        <Button
          size="small"
          onClick={() => setFilter({ ...filter, page: filter.page + 1 })}
          disabled={
            !filter.hasMore || filter.page + 1 > (filter.totalPages ?? 1)
          }
        >
          Next
        </Button>
      </FiltersSection>
    </StyledHeader>
  );
}

export default FilterBar;
