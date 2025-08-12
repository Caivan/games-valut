import { Spacer, Typography } from '@games-vault/gamesvault-ui';
import GamesList from '../components/gamesList/GamesList';
import { FilterContext } from '../context/filterContext';
import FilterBar from '../components/filterbar/FilterBar';
import useFilteredGames from '../hooks/useFilteredGames';

function HomePage() {
  const { filteredGames, loading, error, filter, setFilter } =
    useFilteredGames();

  return (
    <section>
      <FilterContext.Provider value={{ filter, setFilter }}>
        <FilterBar />
        <Spacer size="md" />
        <Typography variant="subtitle">
          Games List {filter.isNew && '(New Games)'}
          {filter.search && `(Search: "${filter.search}")`}
        </Typography>
        {loading && <Typography variant="caption">Loading...</Typography>}
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
    </section>
  );
}

export default HomePage;
