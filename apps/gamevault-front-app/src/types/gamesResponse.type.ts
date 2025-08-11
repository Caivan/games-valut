import type { Game } from './game.type';
import type { Provider } from './provider.type';
import type { GameType } from './game.type';

export interface GamesResponse {
  data: Game[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    hasMore: boolean;
  };
  meta: {
    providers: Provider[];
    types: GameType[];
  };
}
