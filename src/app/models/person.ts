export interface Person {
  id: number;
  age: number;
  birthPlace: List[];
  birthday: Date;
  countAwards: number;
  createdAt: Date;
  death: Date;
  deathPlace: any[];
  enName: string;
  facts: List[];
  growth: number;
  movies: Movie[];
  name: string;
  photo: string;
  profession: List[];
  sex: string;
  spouses: Spouse[];
  updatedAt: Date;
}

export interface List {
  value: string;
}

export interface Movie {
  id: number;
  name: null | string;
  alternativeName: null | string;
  rating: number | null;
  general: boolean;
  description: null | string;
  enProfession: EnProfession;
}

export enum EnProfession {
  Actor = 'actor',
  Cameo = 'cameo',
  Design = 'design',
  Director = 'director',
  Operator = 'operator',
  Producer = 'producer',
  Uncredited = 'uncredited',
  Writer = 'writer',
}

export interface Spouse {
  id: number;
  name: null;
  divorced: boolean;
  children: number;
  relation: string;
}
