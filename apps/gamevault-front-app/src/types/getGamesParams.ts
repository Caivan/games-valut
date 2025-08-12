export interface GetGamesParams {
  page?: number;
  pageSize?: number;
  search?: string;
  providers?: string[];
  types?: string[];
  sort?: 'popular' | 'new' | 'az';
  favorites?: boolean;
}
