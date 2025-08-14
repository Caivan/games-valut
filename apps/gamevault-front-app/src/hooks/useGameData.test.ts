/**
 * @vitest-environment jsdom
 */
import { renderHook, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import useGamesData from './useGameData';

describe('useGamesData', () => {
  const defaultParams = {
    page: 1,
    pageSize: 10,
    search: '',
    types: [],
    providers: [],
  };

  beforeEach(() => {
    // Reset any state if needed
  });

  it('should initialize with loading state', () => {
    const { result } = renderHook(() => useGamesData(defaultParams));

    expect(result.current.loading).toBe(true);
    expect(result.current.games).toEqual([]);
    expect(result.current.error).toBe(null);
    expect(result.current.totalCount).toBe(0);
    expect(result.current.totalPages).toBe(0);
    expect(result.current.hasMore).toBe(false);
    expect(result.current.existingProviders).toEqual([]);
    expect(result.current.existingTypes).toEqual([]);
  });

  it('should fetch games successfully', async () => {
    const { result } = renderHook(() => useGamesData(defaultParams));

    await waitFor(
      () => {
        expect(result.current.loading).toBe(false);
      },
      { timeout: 2000 }
    );

    expect(result.current.games).toHaveLength(10);
    expect(result.current.error).toBe(null);
    expect(result.current.totalCount).toBeGreaterThan(0);
    expect(result.current.totalPages).toBeGreaterThan(0);
    expect(result.current.existingProviders).toContain('NetEnt');
    expect(result.current.existingProviders).toContain('Microgaming');
    expect(result.current.existingTypes).toContain('slots');
    expect(result.current.existingTypes).toContain('table');
  });

  it('should filter games by search term', async () => {
    const { result } = renderHook(() =>
      useGamesData({ ...defaultParams, search: 'Starburst' })
    );

    await waitFor(
      () => {
        expect(result.current.loading).toBe(false);
      },
      { timeout: 2000 }
    );

    expect(result.current.games).toHaveLength(1);
    expect(result.current.games[0].title).toBe('Starburst');
    expect(result.current.totalCount).toBe(1);
  });

  it('should filter games by provider', async () => {
    const { result } = renderHook(() =>
      useGamesData({ ...defaultParams, providers: ['NetEnt'] })
    );
    await waitFor(
      () => {
        expect(
          result.current.games.every(game => game.provider.name === 'NetEnt')
        ).toBe(true);
        expect(result.current.games.length).toBeGreaterThan(0);
      },
      { timeout: 2000 }
    );
  });

  it('should filter games by type', async () => {
    const { result } = renderHook(() =>
      useGamesData({ ...defaultParams, types: ['live'] })
    );
    await waitFor(
      () => {
        expect(result.current.games.every(game => game.type === 'live')).toBe(
          true
        );
        expect(result.current.games.length).toBeGreaterThan(0);
      },
      { timeout: 2000 }
    );
  });

  it('should handle pagination correctly', async () => {
    const { result } = renderHook(() => useGamesData({ page: 2, pageSize: 5 }));

    await waitFor(
      () => {
        expect(result.current.games).toHaveLength(5);
        expect(result.current.totalPages).toBeGreaterThan(1);
        expect(result.current.hasMore).toBe(true);
      },
      { timeout: 2000 }
    );
  });

  it('should handle multiple filters simultaneously', async () => {
    const { result } = renderHook(() =>
      useGamesData({
        ...defaultParams,
        types: ['slots'],
        providers: ['NetEnt'],
        search: 'Star',
      })
    );

    await waitFor(() => {
      if (result.current.games.length > 0) {
        expect(
          result.current.games.every(
            game =>
              game.type === 'slots' &&
              game.provider.name === 'NetEnt' &&
              (game.title.toLowerCase().includes('star') ||
                game.tags?.some(tag => tag.toLowerCase().includes('star')))
          )
        ).toBe(true);
      }
    });
  });

  it('should calculate total pages correctly', async () => {
    const pageSize = 5;
    const { result } = renderHook(() =>
      useGamesData({ ...defaultParams, pageSize })
    );

    const expectedTotalPages = Math.ceil(result.current.totalCount / pageSize);
    expect(result.current.totalPages).toBe(expectedTotalPages);
  });

  it('should set hasMore correctly for last page', async () => {
    const { result } = renderHook(() =>
      useGamesData({ ...defaultParams, page: 10, pageSize: 5 })
    );

    expect(result.current.hasMore).toBe(false);
  });

  it('should return empty results for non-matching search', async () => {
    const { result } = renderHook(() =>
      useGamesData({ ...defaultParams, search: 'NonExistentGame' })
    );

    expect(result.current.games).toHaveLength(0);
    expect(result.current.totalCount).toBe(0);
    expect(result.current.hasMore).toBe(false);
  });

  it('should maintain provider and type metadata regardless of filters', async () => {
    const { result } = renderHook(() =>
      useGamesData({ ...defaultParams, types: ['slots'] })
    );
    await waitFor(
      () => {
        expect(result.current.existingProviders).toContain('NetEnt');
        expect(result.current.existingProviders).toContain('Microgaming');
        expect(result.current.existingProviders).toContain('Evolution Gaming');
        expect(result.current.existingProviders).toContain('Pragmatic Play');

        expect(result.current.existingTypes).toContain('slots');
        expect(result.current.existingTypes).toContain('table');
        expect(result.current.existingTypes).toContain('live');
        expect(result.current.existingTypes).toContain('instant');
      },
      { timeout: 2000 }
    );
  });
});
