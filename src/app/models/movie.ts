export interface Movie {
  fees: Fees;
  status: null;
  externalId: ExternalID;
  rating: Rating;
  votes: Rating;
  backdrop: Backdrop;
  movieLength: number;
  images: Images;
  productionCompanies: ProductionCompany[];
  spokenLanguages: SpokenLanguage[];
  id: number;
  type: SequelsAndPrequelType;
  name: string;
  description: string;
  distributors: Distributors;
  premiere: Premiere;
  slogan: string;
  year: number;
  budget: Budget;
  poster: Backdrop;
  facts: Fact[];
  genres: Country[];
  countries: Country[];
  videos: Videos;
  seasonsInfo: any[];
  persons: Person[];
  lists: any[];
  typeNumber: number;
  alternativeName: string;
  ageRating: number;
  enName: null;
  names: Country[];
  ratingMpaa: string;
  updateDates: any[];
  updatedAt: Date;
  imagesInfo: Images;
  shortDescription: string;
  technology: Technology;
  ticketsOnSale: boolean;
  sequelsAndPrequels: SequelsAndPrequel[];
  similarMovies: SequelsAndPrequel[];
  logo: Logo;
  watchability: Watchability;
  top10: null;
  top250: null;
  audience: Audience[];
  deletedAt: null;
  isSeries: boolean;
  seriesLength: null;
  totalSeriesLength: null;
}

export interface Audience {
  count: number;
  country: string;
}

export interface Backdrop {
  url: null | string;
  previewUrl: null | string;
}

export interface Budget {
  value: number;
  currency: string;
}

export interface Country {
  name: string;
}

export interface Distributors {
  distributor: string;
  distributorRelease: null;
}

export interface ExternalID {
  kpHD: string;
  imdb: string;
  tmdb: number;
}

export interface Fact {
  value: string;
  type: FactType;
  spoiler: boolean;
}

export enum FactType {
  Blooper = 'BLOOPER',
  Fact = 'FACT',
}

export interface Fees {
  world: Budget;
  russia: Budget;
  usa: Budget;
}

export interface Images {
  framesCount: number;
}

export interface Logo {
  url: string;
}

export interface Person {
  id: number;
  photo: string;
  name: string;
  enName: null | string;
  description?: null | string;
  profession: string;
  enProfession: string;
}

export interface Premiere {
  world: Date;
  russia: Date;
}

export interface ProductionCompany {
  name: string;
  url: null | string;
  previewUrl: null | string;
}

export interface Rating {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number | null;
}

export interface SequelsAndPrequel {
  id: number;
  name: string;
  enName: null;
  alternativeName: string;
  type: SequelsAndPrequelType;
  poster: Backdrop;
}

export enum SequelsAndPrequelType {
  Movie = 'movie',
}

export interface SpokenLanguage {
  name: string;
  nameEn: string;
}

export interface Technology {
  hasImax: boolean;
  has3D: boolean;
}

export interface Videos {
  trailers: Trailer[];
  teasers: any[];
}

export interface Trailer {
  url: string;
  name: string;
  site: string;
  type: string;
}

export interface Watchability {
  items: Item[];
}

export interface Item {
  name: string;
  logo: Logo;
  url: string;
}
