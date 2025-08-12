import React, { type Dispatch, type SetStateAction } from 'react';

export interface FilterState {
  search: string | null;
  provider: string | null;
  isNew: boolean;
  type: 'slots' | 'table' | 'live' | 'instant' | null;
}

export interface FilterContextType {
  filter: FilterState;
  setFilter: Dispatch<SetStateAction<FilterState>>;
}

export const FilterContext = React.createContext<FilterContextType>({
  filter: {
    search: '',
    provider: null,
    isNew: false,
    type: null,
  },
  setFilter: () => {},
});
