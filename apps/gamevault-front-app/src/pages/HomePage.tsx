import { Typography } from '@games-vault/gamesvault-ui';
import { useEffect, useState } from 'react';
import { getGames } from '../services/games.service';
import type { Game } from '../types';
import GamesList from '../components/gamesList/GamesList';


function HomePage() {
  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    getGames(1, 6)
      .then(res => {
        return res.data;
      })
      .then(data => {
        console.log(data);
        setGames(data);
      });
  }, []);

  return (
    <section>


      <Typography variant="subtitle">Games List</Typography>

      <GamesList games={games} />
    </section>
  );
}

export default HomePage;
