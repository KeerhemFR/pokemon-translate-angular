import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemonUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1008';

  constructor(private http: HttpClient) {}

  getPokemon() {
    return this.http.get<any>(this.pokemonUrl);
  }
}
