import { useEffect, useState } from 'react';
import { getGames } from '../services/games.service';
import type { Game } from '../types';

function useGamesData() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true);
        const fetchedGames = await getGames(1, 6);
        setGames(fetchedGames.data);
      } catch (error) {
        console.error('Error fetching games:', error);
        setGames([]);
        setError('Failed to fetch games');
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  return { games, loading, error };
}

export default useGamesData;
