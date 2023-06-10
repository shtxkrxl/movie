export interface MovieList {
  docs: Movie[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface Movie {
  id: number;
  alternativeName: null | string;
  countries: Country[];
  description: string;
  enName: null;
  externalId: ExternalID;
  genres: Country[];
  movieLength: number | null;
  name: string;
  names: Name[];
  poster: Poster;
  rating: Rating;
  shortDescription: null | string;
  type: Type;
  votes: Rating;
  year: number;
  logo?: Logo;
  watchability: Watchability;
  releaseYears?: ReleaseYear[];
}

export interface Country {
  name: string;
}

export interface ExternalID {
  kpHD: null | string;
  imdb?: null | string;
  tmdb?: number;
}

export interface Logo {
  url: null | string;
}

export interface Name {
  name: string;
  language?: string;
  type?: null | string;
}

export interface Poster {
  url: string;
  previewUrl: string;
}

export interface Rating {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number | null;
}

export interface ReleaseYear {
  start: number;
  end: number | null;
}

export enum Type {
  Movie = 'movie',
  TvSeries = 'tv-series',
}

export interface Watchability {
  items: Item[] | null;
}

export interface Item {
  name: string;
  logo: Logo;
  url: string;
}
