import { useContext } from 'react';
import { FilterContext } from '../../context/filterContext';
import { FiltersSection } from './appliedFilters.styles';
import { Spacer, Typography } from '@games-vault/gamesvault-ui';
import FilterTag from '../filterTag/FilterTag';

function AppliedFilters({
  existingProviders,
  existingTypes,
}: {
  existingProviders?: string[];
  existingTypes?: string[];
}) {
  const { filter, setFilter } = useContext(FilterContext);

  const setNewFilter = (
    paramName: string,
    value: string | number | boolean
  ) => {
    setFilter(prev => ({ ...prev, page: 1, [paramName]: value }));
  };

  const toggleArrayFilter = (
    arrayKey: 'providers' | 'types',
    value: string
  ) => {
    setFilter(prev => {
      const currentArray = prev[arrayKey] || [];
      const isValuePresent = currentArray.includes(value);

      return {
        ...prev,
        page: 1,
        [arrayKey]: isValuePresent
          ? currentArray.filter(item => item !== value)
          : [...currentArray, value],
      };
    });
  };

  return (
    <>
      <FiltersSection>
        {filter.search && (
          <FilterTag
            value={filter.search}
            showClose
            onClick={() => setNewFilter('search', '')}
          />
        )}
      </FiltersSection>
      <FiltersSection>
        <Typography variant="caption" color="secondary">
          Types
        </Typography>
        {existingTypes &&
          existingTypes.length > 0 &&
          existingTypes.map(type => (
            <FilterTag
              key={type}
              value={type}
              showClose={filter.types?.includes(type)}
              onClick={() => toggleArrayFilter('types', type)}
            />
          ))}
      </FiltersSection>
      <Spacer size="sm" />

      <FiltersSection>
        <Typography variant="caption" color="secondary">
          Providers
        </Typography>
        {existingProviders &&
          existingProviders.length > 0 &&
          existingProviders.map(provider => (
            <FilterTag
              key={provider}
              showClose={filter.providers?.includes(provider)}
              value={provider}
              onClick={() => toggleArrayFilter('providers', provider)}
            />
          ))}
      </FiltersSection>
    </>
  );
}

export default AppliedFilters;
