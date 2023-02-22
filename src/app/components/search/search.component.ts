import { Component, OnInit } from '@angular/core';

import * as pokemon from '../../../data/pokemon.json';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';

import { PokemonUrl } from 'src/app/interface/pokemon/pokemon';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [PokemonService],
})
export class SearchComponent implements OnInit {
  pokemon: {
    pokemon: {
      id: number;
      nameEn: string;
      nameFr: string;
      nameJp: string;
      type1: string;
      type2: string | null;
      generation: number;
    }[];
  } = pokemon;
  searchText: string = '';
  receivedPokemon: PokemonUrl[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    this.pokemonService
      .getPokemon()
      .subscribe((data) => (this.receivedPokemon = data.results));
  }
}
