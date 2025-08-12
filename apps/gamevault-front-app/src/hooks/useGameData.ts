import { useCallback, useEffect, useState } from 'react';
import { getGames } from '../services/games.service';
import type { Game } from '../types';
import type { FilterState } from '../context/filterContext';
import type { GetGamesParams } from '../types/getGamesParams';

function useGamesData({
  page,
  pageSize,
  search,
  types,
  providers,
}: Pick<FilterState, 'page' | 'pageSize' | 'search' | 'types' | 'providers'>) {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(false);

  const fetchGames = useCallback(
    async ({ page, pageSize, search, types, providers }: GetGamesParams) => {
      try {
        setError(null);
        setLoading(true);
        const response = await getGames({
          page,
          pageSize,
          search,
          types,
          providers,
        } as GetGamesParams);

        setGames(response.data);
        setTotalCount(response.pagination.total || 0);
        setTotalPages(
          Math.ceil((response.pagination.total || 0) / (pageSize ?? 1))
        );
        setHasMore(response.pagination.hasMore || false);
      } catch (error) {
        console.error('Error fetching games:', error);
        setGames([]);
        setError('Failed to fetch games');
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    fetchGames({
      page,
      pageSize,
      search,
      types,
      providers,
    });
  }, [fetchGames, page, pageSize, search, types, providers]);

  return {
    games,
    loading,
    error,
    totalCount,
    totalPages,
    hasMore,
  };
}

export default useGamesData;
