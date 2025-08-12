import type { Game } from '../../types';
import { GameGrid } from './gamesList.styles';
import GameCard from '../gameCard/GameCard';
import SkeletonLoader from '../skeletonLoader/SkeletonLoader';

interface GamesListProps {
  games: Game[];
  renderSkeleton?: boolean;
}

function GamesList({ games, renderSkeleton }: GamesListProps) {
  return (
    <GameGrid>
      {!renderSkeleton &&
        games.map(game => <GameCard key={game.id} game={game} />)}
      {renderSkeleton && (
        <>
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
        </>
      )}
    </GameGrid>
  );
}

export default GamesList;
