import React, { type Dispatch, type SetStateAction } from 'react';

const DEFAULT_PAGE_SIZE = 6;
const DEFAULT_INITIAL_PAGE = 1;

export interface FilterState {
  page: number;
  pageSize: number;
  search?: string;
  providers?: string[];
  isNew: boolean;
  types?: string[];
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
    isNew: false,
  },
  setFilter: () => {},
});
