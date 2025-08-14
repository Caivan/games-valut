import { Typography } from '@games-vault/gamesvault-ui';
import { FilterContext } from '../context/filterContext';
import { useFilteredGames } from '../hooks';

import GamesList from '../components/gamesList/GamesList';
import FilterBar from '../components/filterbar/FilterBar';
import AppliedFilters from '../components/apppliedFilters/AppliedFilters';

function HomePage() {
  const {
    filteredGames,
    loading,
    error,
    filter,
    setFilter,
    existingProviders,
    existingTypes,
  } = useFilteredGames();

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      <FilterBar/>
      <AppliedFilters
        existingProviders={existingProviders}
        existingTypes={existingTypes}
      />
      <GamesList games={filteredGames} renderSkeleton={loading} />
      {error && (
        <Typography variant="body" color="secondary">
          Error: {error}
        </Typography>
      )}
      {!loading && filteredGames.length === 0 && (
        <Typography variant="display" color="secondary">
          No games found matching your criteria.
        </Typography>
      )}
    </FilterContext.Provider>
  );
}

export default HomePage;
