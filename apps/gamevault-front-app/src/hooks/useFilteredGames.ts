import { useEffect, useState } from 'react';
import type { FilterState } from '../context/filterContext';
import useGamesData from './useGameData';

function useFilteredGames() {
  const [filter, setFilter] = useState<FilterState>({
    page: 1,
    pageSize: 6,
    isNew: false,
  });
  const {
    games,
    loading,
    error,
    hasMore: hasMoreBackend,
    totalPages,
  } = useGamesData(filter);

  useEffect(() => {
    setFilter(prevFilter => ({
      ...prevFilter,
      hasMore: hasMoreBackend,
      totalPages,
    }));
  }, [hasMoreBackend, totalPages]);

  // Frontend Filter games based on new property, which is a boolean not changing too often.
  // This is a simple filter to demonstrate the concept. Of having some frontend filtering.
  // For backend filtering (search and rest of query params) we use the getGames service.
  const filteredGames = games.filter(
    game => (filter.isNew && game.isNew) || !filter.isNew
  );

  return { filteredGames, loading, error, filter, setFilter };
}

export default useFilteredGames;
