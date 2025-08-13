import { useContext, useEffect, useState } from 'react';
import { Button, Typography } from '@games-vault/gamesvault-ui';
import {
  StyledHeader,
  StyledFilterContainer,
  StyledSearchInput,
  FiltersSection,
} from './filterBar.styles';
import { FilterContext } from '../../context/filterContext';
import { useDebounce } from '../../hooks';
import AppliedFilters from '../apppliedFilters/AppliedFilters';

function FilterBar({
  existingProviders,
  existingTypes,
}: {
  existingProviders?: string[];
  existingTypes?: string[];
}) {
  const { filter, setFilter } = useContext(FilterContext);
  const [searchInput, setSearchInput] = useState(filter.search || '');
  const debouncedSearchInput = useDebounce(searchInput, 300);

  useEffect(() => {
    setFilter(prevFilter => ({
      ...prevFilter,
      search: debouncedSearchInput.trim(),
      page: 1,
    }));
  }, [debouncedSearchInput, setFilter]);

  useEffect(() => {
    setSearchInput(filter.search || '');
  }, [filter.search]);

  return (
    <StyledHeader>
      <StyledFilterContainer>
        <StyledSearchInput
          type="text"
          placeholder="Search games..."
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
        />
      </StyledFilterContainer>
      <AppliedFilters
        existingProviders={existingProviders}
        existingTypes={existingTypes}
      />
      <FiltersSection>
        <Button
          size="small"
          onClick={() => setFilter({ ...filter, page: filter.page - 1 })}
          disabled={filter.page <= 1}
        >
          {'<'}
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
          {'>'}
        </Button>
      </FiltersSection>
    </StyledHeader>
  );
}

export default FilterBar;
