export interface NameAndUrl {
  name: string;
  url: string;
}

export interface Location {
  created: string;
  dimension: string;
  id: string;
  name: string;
  residents: string[];
  type: string;
  url: string;
}

export interface Episode {
  air_date: string;
  characters: string[];
  created: string;
  episode: string;
  id: string;
  name: string;
  url: string;
}

export interface NameAndUrl {
  name: string;
  url: string;
}

export interface Info {
  count: number;
  next?: string;
  pages: number;
  prev?: string;
}

export interface Character {
  id: string;
  name: string;
  image: string;
  created: string;
  episode: Episode[] | string[];
  gender: string;
  location: Location | NameAndUrl;
  origin: Location | NameAndUrl;
  species: 'Female' | 'Male' | 'Genderless' | 'unknown';
  status: 'Alive' | 'Dead' | 'unknown';
  type: string;
  url: string;
}

export interface ResponseData {
  info: Info;
  results: Character[];
}
