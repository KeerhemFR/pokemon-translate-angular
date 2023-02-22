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
