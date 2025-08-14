/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useDebounce from './useDebounce';

describe('useDebounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should return the initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('initial', 500));
    
    expect(result.current).toBe('initial');
  });

  it('should debounce value updates', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 'initial', delay: 500 }
      }
    );

    expect(result.current).toBe('initial');

    // Update the value
    rerender({ value: 'updated', delay: 500 });
    
    // Value should still be the old one before delay
    expect(result.current).toBe('initial');

    // Fast forward time by 500ms
    act(() => {
      vi.advanceTimersByTime(500);
    });

    // Now the value should be updated
    expect(result.current).toBe('updated');
  });

  it('should reset the timer on rapid value changes', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 'initial', delay: 500 }
      }
    );

    // Update value multiple times rapidly
    rerender({ value: 'first', delay: 500 });
    
    act(() => {
      vi.advanceTimersByTime(200);
    });
    
    rerender({ value: 'second', delay: 500 });
    
    act(() => {
      vi.advanceTimersByTime(200);
    });
    
    rerender({ value: 'final', delay: 500 });

    // After 400ms total, should still be initial value
    expect(result.current).toBe('initial');

    // After completing the full delay from the last update
    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toBe('final');
  });

  it('should work with different data types', () => {
    // Test with number
    const { result: numberResult } = renderHook(() => useDebounce(42, 300));
    expect(numberResult.current).toBe(42);

    // Test with object
    const testObject = { name: 'test', value: 123 };
    const { result: objectResult } = renderHook(() => useDebounce(testObject, 300));
    expect(objectResult.current).toEqual(testObject);

    // Test with array
    const testArray = [1, 2, 3];
    const { result: arrayResult } = renderHook(() => useDebounce(testArray, 300));
    expect(arrayResult.current).toEqual(testArray);
  });

  it('should handle delay changes', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 'initial', delay: 500 }
      }
    );

    rerender({ value: 'updated', delay: 1000 });

    // Fast forward by 500ms (original delay)
    act(() => {
      vi.advanceTimersByTime(500);
    });

    // Should still be initial value because delay changed to 1000ms
    expect(result.current).toBe('initial');

    // Fast forward by another 500ms (total 1000ms)
    act(() => {
      vi.advanceTimersByTime(500);
    });

    // Now should be updated
    expect(result.current).toBe('updated');
  });

  it('should cleanup timeout on unmount', () => {
    const clearTimeoutSpy = vi.spyOn(global, 'clearTimeout');
    
    const { unmount } = renderHook(() => useDebounce('test', 500));
    
    unmount();
    
    expect(clearTimeoutSpy).toHaveBeenCalled();
    
    clearTimeoutSpy.mockRestore();
  });
});