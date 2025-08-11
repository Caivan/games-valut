import { Typography } from '@games-vault/gamesvault-ui';
import GamesList from '../components/gamesList/GamesList';
import useGamesData from '../hooks/useGameData';

function HomePage() {
  const { games, loading, error } = useGamesData();
  return (
    <section>
      <Typography variant="subtitle">Games List</Typography>
      <GamesList
        games={games.filter(game => game.isNew)}
        renderSkeleton={loading}
      />
      {loading && (
        <>
          <Typography variant="body">Loading...</Typography>
        </>
      )}
      {error && (
        <Typography variant="body" color="secondary">
          Error: {error}
        </Typography>
      )}
    </section>
  );
}

export default HomePage;
