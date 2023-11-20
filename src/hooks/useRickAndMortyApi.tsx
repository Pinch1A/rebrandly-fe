import { useState, useEffect } from 'react';
import { useQueryState } from 'next-usequerystate';
import { ResponseData, Character } from '../types';

interface ReturnData {
  data: ResponseData;
  loading: boolean;
  error: any;
  fetchPage: (url: string) => void;
}
const BASE_API_URL = 'https://rickandmortyapi.com/api/character';

const useRickAndMortyApi = (id: string | number | null = null): ReturnData => {
  const [data, setData] = useState<ResponseData>({
    info: {
      count: 1,
      pages: 1
    },
    results: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useQueryState('page');

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      let apiUrl = BASE_API_URL;

      if (id) {
        apiUrl = `${BASE_API_URL}/${id}`;
      }
      if (page) {
        apiUrl = `${BASE_API_URL}?page=${page}`;
      }

      try {
        setLoading(true);
        const response = await fetch(apiUrl);
        const jsonData = await response.json();
        const dataArray: ResponseData = id
          ? {
              info: {
                count: 1,
                pages: 1,
                next: null,
                prev: null
              },
              results: [jsonData]
            }
          : jsonData;

        if (dataArray && dataArray.results.length > 0) {
          const locationDataPromises = fetchLocationData(dataArray.results);
          const originDataPromises = fetchOriginData(dataArray.results);
          const episodeDataPromises = fetchEpisodeData(dataArray.results);

          const [locationData, originData, episodeData] = await Promise.all([
            Promise.all(locationDataPromises),
            Promise.all(originDataPromises),
            Promise.all(episodeDataPromises)
          ]);

          const charactersWithData: Character[] = dataArray.results.map(
            (character: Character, index: number) => {
              const characterWithLocation = locationData[index];
              const characterWithOrigin = originData[index];
              const characterWithEpisodes = episodeData[index];

              return {
                ...character,
                ...(characterWithLocation ? { location: characterWithLocation.location } : {}),
                ...(characterWithOrigin ? { origin: characterWithOrigin.origin } : {}),
                ...(characterWithEpisodes ? { episode: characterWithEpisodes.episode } : {})
              };
            }
          );

          setData({ ...dataArray, results: charactersWithData });
        } else {
          setData(dataArray);
        }
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, page]); // Re-run effect when id changes

  const fetchPage = async (url: string): Promise<void> => {
    const query = new URLSearchParams(url.split('?')[1]);
    const page = query.get('page');
    setPage(page);
  };

  return { data, loading, error, fetchPage };
};

const fetchLocationData = (data: Character[]) => {
  return data.map(async (character: Character) => {
    if (!character.location.url) return character;
    const locationResponse = await fetch(character.location.url);
    const locationData = await locationResponse.json();

    return { ...character, location: locationData };
  });
};

const fetchOriginData = (data: Character[]) => {
  return data.map(async (character: Character) => {
    if (!character.origin.url)
      return {
        ...character,
        origin: { ...character.origin, created: '', dimension: '', id: '', residents: [], type: '' }
      };
    const originResponse = await fetch(character.origin.url);
    const originData = await originResponse.json();
    return { ...character, origin: originData };
  });
};

const fetchEpisodeData = (data: Character[]) => {
  return data.map(async (character: Character) => {
    if (!character.episode || !Array.isArray(character.episode)) return character;
    const episodeIds: string = extractIdFromUrl(character.episode as string[]).join(',') || '';
    const episodeResponse = await fetch(`https://rickandmortyapi.com/api/episode/${episodeIds}`);
    const episodeData = await episodeResponse.json();
    const episodeArray = Array.isArray(episodeData) ? episodeData : [episodeData];

    // Filter out items with undefined id
    const filteredEpisodeArray = episodeArray.filter((episode) => episode.id !== undefined);
    return { ...character, episode: episodeArray };
  });
};

const extractIdFromUrl = (urls: string[]): string[] => {
  const ids: (string | null)[] = urls.map((url) => {
    // Use a regular expression to capture the entire <number> part
    const match = url.match(/\/(\d+)$/);
    // If a match is found, return the entire captured <number> part, otherwise return null
    return match ? match[1] : null;
  });

  // Filter out null values in case there were URLs without a <number> value
  return ids.filter((id: string | null) => id !== null) as string[];
};

export default useRickAndMortyApi;
