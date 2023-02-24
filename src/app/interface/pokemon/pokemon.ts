export interface PokemonUrl {
  name: string;
  url: string;
}

export interface PokemonApi {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonUrl[];
}

export interface ApiNames {
  language: {
    name: string;
    url: string;
  };
  name: string;
}

export interface PokemonNames {
  id: number;
  nameFr: ApiNames;
  nameEn: ApiNames;
  nameJp: ApiNames;
}
