import { renderHook, act } from '@testing-library/react-hooks';
import { useQueryState, UseQueryStateOptions, UseQueryStateReturn } from 'next-usequerystate';
import useRickAndMortyApi from '../hooks/useRickAndMortyApi';

// Mock fetch function
const mockFetchPromise = Promise.resolve({
  json: () => Promise.resolve({ results: [{}] })
});
const mockFetch = jest.fn().mockImplementation(() => mockFetchPromise);
global.fetch = mockFetch;

// Mock useQueryState
jest.mock('next-usequerystate', () => ({
  ...jest.requireActual('next-usequerystate'),
  useQueryState: jest.fn()
}));

describe('useRickAndMortyApi', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetches data with the provided ID', async () => {
    (useQueryState as jest.Mock).mockReturnValue([null, jest.fn()] as UseQueryStateReturn<
      number | null,
      number
    >);
    const { result, waitForNextUpdate } = renderHook(() => useRickAndMortyApi(1));

    await waitForNextUpdate();

    expect(result.current.loading).toBeFalsy();
    expect(global.fetch).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character/1');
  });

  it('fetches data with the provided page', async () => {
    (useQueryState as jest.Mock).mockReturnValue([2, jest.fn()] as UseQueryStateReturn<
      number | null,
      number
    >);
    const { result, waitForNextUpdate } = renderHook(() => useRickAndMortyApi());

    await waitForNextUpdate();

    expect(result.current.loading).toBeFalsy();
    expect(result.current.data.results).toHaveLength(0); // Modify this based on your actual data
    expect(global.fetch).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character?page=2');
  });

  // Add more tests for error handling, multiple scenarios, etc.
});
