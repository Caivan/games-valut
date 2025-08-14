import type { Provider, Game, GamesResponse } from '../types';
import type { GetGamesParams } from '../types/getGamesParams';

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
  {
    id: generateId(),
    title: 'Book of Ra',
    thumbnail: 'https://example.com/book-of-ra-thumb.jpg',
    provider: mockProviders[0],
    type: 'slots',
    slug: 'book-of-ra',
    isNew: false,
    tags: ['Ancient', 'Egypt', 'Adventure'],
  },
  {
    id: generateId(),
    title: 'Live Baccarat',
    thumbnail: 'https://example.com/live-baccarat-thumb.jpg',
    provider: mockProviders[2],
    type: 'live',
    slug: 'live-baccarat',
    isNew: true,
    tags: ['Live Dealer', 'Cards', 'High Stakes'],
  },
  {
    id: generateId(),
    title: 'Lucky Numbers',
    thumbnail: 'https://example.com/lucky-numbers-thumb.jpg',
    provider: mockProviders[3],
    type: 'instant',
    slug: 'lucky-numbers',
    isNew: false,
    tags: ['Numbers', 'Lottery', 'Quick Play'],
  },
  {
    id: generateId(),
    title: 'European Roulette',
    thumbnail: 'https://example.com/european-roulette-thumb.jpg',
    provider: mockProviders[1],
    type: 'table',
    slug: 'european-roulette',
    isNew: false,
    tags: ['Roulette', 'Classic', 'European'],
  },
  {
    id: generateId(),
    title: "Gonzo's Quest",
    thumbnail: 'https://example.com/gonzos-quest-thumb.jpg',
    provider: mockProviders[0],
    type: 'slots',
    slug: 'gonzos-quest',
    isNew: false,
    tags: ['Adventure', 'Aztec', 'Avalanche'],
  },
  {
    id: generateId(),
    title: 'Live Blackjack VIP',
    thumbnail: 'https://example.com/live-blackjack-vip-thumb.jpg',
    provider: mockProviders[2],
    type: 'live',
    slug: 'live-blackjack-vip',
    isNew: true,
    tags: ['Live Dealer', 'VIP', 'High Limit'],
  },
  {
    id: generateId(),
    title: 'Diamond Strike',
    thumbnail: 'https://example.com/diamond-strike-thumb.jpg',
    provider: mockProviders[3],
    type: 'instant',
    slug: 'diamond-strike',
    isNew: true,
    tags: ['Diamonds', 'Strike', 'Instant Win'],
  },
  {
    id: generateId(),
    title: 'Fruit Fiesta',
    thumbnail: 'https://example.com/fruit-fiesta-thumb.jpg',
    provider: mockProviders[1],
    type: 'slots',
    slug: 'fruit-fiesta',
    isNew: false,
    tags: ['Fruits', 'Classic', 'Colorful'],
  },
  {
    id: generateId(),
    title: 'Craps Master',
    thumbnail: 'https://example.com/craps-master-thumb.jpg',
    provider: mockProviders[1],
    type: 'table',
    slug: 'craps-master',
    isNew: false,
    tags: ['Dice', 'Classic', 'Vegas Style'],
  },
  {
    id: generateId(),
    title: 'Lightning Roulette',
    thumbnail: 'https://example.com/lightning-roulette-thumb.jpg',
    provider: mockProviders[2],
    type: 'live',
    slug: 'lightning-roulette',
    isNew: true,
    tags: ['Live Dealer', 'Lightning', 'Multipliers'],
  },
  {
    id: generateId(),
    title: 'Treasure Hunt',
    thumbnail: 'https://example.com/treasure-hunt-thumb.jpg',
    provider: mockProviders[3],
    type: 'instant',
    slug: 'treasure-hunt',
    isNew: false,
    tags: ['Treasure', 'Adventure', 'Hidden'],
  },
  {
    id: generateId(),
    title: 'Wolf Gold',
    thumbnail: 'https://example.com/wolf-gold-thumb.jpg',
    provider: mockProviders[3],
    type: 'slots',
    slug: 'wolf-gold',
    isNew: true,
    tags: ['Wildlife', 'Desert', 'Money Respin'],
  },
];

export const getGames = async (
  params: GetGamesParams = {}
): Promise<GamesResponse> => {
  const {
    page = 1,
    pageSize = 10,
    search,
    providers,
    types,
    sort,
    favorites,
  } = params;

  // Simulate a network request
  return new Promise(resolve => {
    setTimeout(() => {
      let filteredGames = [...mockGames];
      // Filter by search term (title or tags)
      if (search) {
        const searchTerm = search.toLowerCase();
        filteredGames = filteredGames.filter(
          game =>
            game.title.toLowerCase().includes(searchTerm) ||
            game.tags?.some(tag => tag.toLowerCase().includes(searchTerm))
        );
      }

      // Filter by providers
      if (providers && providers.length > 0) {
        filteredGames = filteredGames.filter(game =>
          providers.includes(game.provider.name)
        );
      }

      // Filter by types
      if (types && types.length > 0) {
        filteredGames = filteredGames.filter(game => types.includes(game.type));
      }

      // Filter by favorites (for now, just return games - implement favorites logic as needed)
      if (favorites) {
        // TODO: Implement favorites filtering based on user's favorite games
        // This would typically check against a user's favorites list
      }

      // Sort games
      if (sort) {
        switch (sort) {
          case 'new':
            filteredGames.sort((a, b) => Number(b.isNew) - Number(a.isNew));
            break;
          case 'az':
            filteredGames.sort((a, b) => a.title.localeCompare(b.title));
            break;
          case 'popular':
          default:
            break;
        }
      }

      // Pagination
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const paginatedGames = filteredGames.slice(startIndex, endIndex);

      const response: GamesResponse = {
        data: paginatedGames,
        pagination: {
          page,
          pageSize,
          total: filteredGames.length,
          hasMore: endIndex < filteredGames.length,
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
