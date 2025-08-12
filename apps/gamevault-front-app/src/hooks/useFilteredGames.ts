import { useState } from "react";
import type { FilterState } from "../context/filterContext";
import useGamesData from "./useGameData";

function useFilteredGames() {
  const { games, loading, error } = useGamesData();
  const [filter, setFilter] = useState<FilterState>({
    search: null,
    isNew: false,
    type: null,
    provider: null,
  });

  const filteredGames = games.filter(game => {
    if (filter.search && filter.search?.trim() !== '') {
      const searchTerm = filter.search?.toLowerCase();
      const matchesSearch =
        game.title?.toLowerCase().includes(searchTerm) ||
        game.provider?.name?.toLowerCase().includes(searchTerm) ||
        game.slug?.toLowerCase().includes(searchTerm);

      if (!matchesSearch) return false;
    }

    if (filter.isNew && !game.isNew) {
      return false;
    }

    return true;
  });

  return { filteredGames, loading, error, filter, setFilter };
}

export default useFilteredGames;
