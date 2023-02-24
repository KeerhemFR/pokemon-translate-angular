import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { PokemonApi } from 'src/app/interface/pokemon/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemonUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1008';

  constructor(private http: HttpClient) {}

  getPokemon(): Observable<PokemonApi> {
    return this.http.get<PokemonApi>(this.pokemonUrl).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  getPokemonById(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }
}
