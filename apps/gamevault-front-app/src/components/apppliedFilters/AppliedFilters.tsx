import { useContext } from 'react';
import { FilterContext } from '../../context/filterContext';
import {
  FiltersSection,
  FilterTag,
  CloseElement,
} from './appliedFilters.styles';
import { Spacer, Typography } from '@games-vault/gamesvault-ui';

function AppliedFilters({
  existingProviders,
  existingTypes,
}: {
  existingProviders?: string[];
  existingTypes?: string[];
}) {
  const { filter, setFilter } = useContext(FilterContext);

  const toggleNew = () => {
    setFilter(prev => ({ ...prev, isNew: !prev.isNew }));
  };

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
          : [...currentArray, value]
      };
    });
  };

  return (
    <>
      <Spacer size="md" /> 
      <Typography variant="caption" color="secondary">
        Search and New
      </Typography>
      <FiltersSection>
        {filter.search && (
          <FilterTag onClick={() => setNewFilter('search', '')}>
            <Typography variant="caption">{filter.search}</Typography>
            <CloseElement>x</CloseElement>
          </FilterTag>
        )}
        <FilterTag onClick={toggleNew}>
          <Typography variant="caption">New</Typography>
          {filter.isNew && <CloseElement>x</CloseElement>}
        </FilterTag>
      </FiltersSection>
      <Spacer size="md" />
      <Typography variant="caption" color="secondary">
        Types
      </Typography>
      <FiltersSection>
        {existingTypes &&
          existingTypes.length > 0 &&
          existingTypes.map(type => (
            <FilterTag key={type} onClick={() => toggleArrayFilter('types', type)}>
              <Typography variant="caption">{type}</Typography>
              {filter.types?.includes(type) && <CloseElement>x</CloseElement>}
            </FilterTag>
          ))}
      </FiltersSection>
        <Spacer size="md" /> 
      <Typography variant="caption" color="secondary">
        Providers
      </Typography>
      <FiltersSection>
        {existingProviders &&
          existingProviders.length > 0 &&
          existingProviders.map(provider => (
            <FilterTag
              key={provider}
              onClick={() => toggleArrayFilter('providers', provider)}
            >
              <Typography variant="caption">{provider}</Typography>
              {filter.providers?.includes(provider) && <CloseElement>x</CloseElement>}
            </FilterTag>
          ))}
      </FiltersSection>
      
    </>
  );
}

export default AppliedFilters;
