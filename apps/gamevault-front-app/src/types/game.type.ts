import type { Provider } from './provider.type';

export type GameType = 'slots' | 'table' | 'live' | 'instant';

export interface Game {
  id: string;
  title: string;
  thumbnail: string;
  provider: Provider;
  type: GameType;
  slug: string;
  isNew?: boolean;
  tags?: string[];
}
