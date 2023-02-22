import { Component, OnInit } from '@angular/core';

import * as pokemon from '../../../data/pokemon.json';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [PokemonService],
})
export class SearchComponent implements OnInit {
  pokemon = pokemon;
  searchText: string = '';
  receivedPokemon: [] = [];

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
