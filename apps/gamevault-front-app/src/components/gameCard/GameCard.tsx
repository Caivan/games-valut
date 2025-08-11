import { Card, Typography, Button } from '@games-vault/gamesvault-ui';
import type { Game } from '../../types';
import { Badge, GameImage, GameMeta } from './gameCard.styles';

interface GameCardProps {
  game: Game;
}

function GameCard({ game }: GameCardProps) {
  return (
    <Card interactive>
      <GameImage>{game.title}</GameImage>

      <GameMeta>
        <Typography variant="subtitle">{game.title}</Typography>
        {game.isNew && <Badge>New</Badge>}
      </GameMeta>

      <Typography variant="caption" color="secondary">
        {game.provider.name}
      </Typography>

      <Typography variant="body" color="secondary">
        {game.tags?.join(', ')}
      </Typography>

      <Button variant="secondary" fullWidth>
        View Details
      </Button>
    </Card>
  );
}

export default GameCard;
