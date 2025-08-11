import type { Provider, Game, GamesResponse } from '../types';

export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 9);
};

const mockProviders: Provider[] = [
  {
    id: generateId(),
    name: 'NetEnt',
    logo: 'https://example.com/netent-logo.png',
  },
  {
    id: generateId(),
    name: 'Microgaming',
    logo: 'https://example.com/microgaming-logo.png',
  },
  {
    id: generateId(),
    name: 'Evolution Gaming',
    logo: 'https://example.com/evolution-logo.png',
  },
  {
    id: generateId(),
    name: 'Pragmatic Play',
    logo: 'https://example.com/pragmatic-logo.png',
  },
];

const mockGames: Game[] = [
  {
    id: generateId(),
    title: 'Starburst',
    thumbnail: 'https://example.com/starburst-thumb.jpg',
    provider: mockProviders[0],
    type: 'slots',
    slug: 'starburst',
    isNew: false,
    tags: ['Classic', 'Gems', 'Space'],
  },
  {
    id: generateId(),
    title: 'Blackjack Classic',
    thumbnail: 'https://example.com/blackjack-thumb.jpg',
    provider: mockProviders[1],
    type: 'table',
    slug: 'blackjack-classic',
    isNew: false,
    tags: ['Cards', 'Classic', 'Strategy'],
  },
  {
    id: generateId(),
    title: 'Live Roulette',
    thumbnail: 'https://example.com/live-roulette-thumb.jpg',
    provider: mockProviders[2],
    type: 'live',
    slug: 'live-roulette',
    isNew: true,
    tags: ['Live Dealer', 'Roulette', 'Real Time'],
  },
  {
    id: generateId(),
    title: 'Scratch Gold',
    thumbnail: 'https://example.com/scratch-gold-thumb.jpg',
    provider: mockProviders[3],
    type: 'instant',
    slug: 'scratch-gold',
    isNew: true,
    tags: ['Scratch Card', 'Quick Win', 'Gold'],
  },
  {
    id: generateId(),
    title: 'Mega Fortune',
    thumbnail: 'https://example.com/mega-fortune-thumb.jpg',
    provider: mockProviders[0],
    type: 'slots',
    slug: 'mega-fortune',
    isNew: false,
    tags: ['Progressive', 'Luxury', 'Jackpot'],
  },
  {
    id: generateId(),
    title: "Poker Texas Hold'em",
    thumbnail: 'https://example.com/poker-thumb.jpg',
    provider: mockProviders[1],
    type: 'table',
    slug: 'poker-texas-holdem',
    isNew: false,
    tags: ['Poker', 'Cards', 'Tournament'],
  },
];

export const getGames = async (
  page: number = 1,
  pageSize: number = 10
): Promise<GamesResponse> => {
  // Simulate a network request
  return new Promise(resolve => {
    setTimeout(() => {
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const paginatedGames = mockGames.slice(startIndex, endIndex);

      const response: GamesResponse = {
        data: paginatedGames,
        pagination: {
          page,
          pageSize,
          total: mockGames.length,
          hasMore: endIndex < mockGames.length,
        },
        meta: {
          providers: mockProviders,
          types: ['slots', 'table', 'live', 'instant'],
        },
      };

      resolve(response);
    }, 1000);
  });
};
