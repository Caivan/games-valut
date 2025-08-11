import { Card, Typography, Button } from "@games-vault/gamesvault-ui";
import type { Game } from "../../types";
import { Badge, GameGrid, GameImage, GameMeta } from "./gamesList.styles";

interface GamesListProps {
  games: Game[];
}

function GamesList({ games }: GamesListProps) {

  return (
    <GameGrid>
      {games.map(game => (
        <Card key={game.id} interactive>
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
      ))}
    </GameGrid>
  );
}

export default GamesList;
