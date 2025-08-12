import React, { type Dispatch, type SetStateAction } from 'react';

const DEFAULT_PAGE_SIZE = 6;
const DEFAULT_INITIAL_PAGE = 1;

export interface FilterState {
  page: number;
  pageSize: number;
  search: string | null;
  provider: string | null;
  isNew: boolean;
  type: 'slots' | 'table' | 'live' | 'instant' | null;
  hasMore?: boolean;
  totalPages?: number;
}

export interface FilterContextType {
  filter: FilterState;
  setFilter: Dispatch<SetStateAction<FilterState>>;
}

export const FilterContext = React.createContext<FilterContextType>({
  filter: {
    page: DEFAULT_INITIAL_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
    search: '',
    provider: null,
    isNew: false,
    type: null,
  },
  setFilter: () => {},
});
