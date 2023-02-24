import { Component, OnInit } from '@angular/core';

import { PokemonService } from 'src/app/services/pokemon/pokemon.service';

import {
  PokemonUrl,
  PokemonNames,
  ApiNames,
} from 'src/app/interface/pokemon/pokemon';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [PokemonService],
})
export class SearchComponent implements OnInit {
  searchText: string = '';
  receivedPokemon: PokemonUrl[] = [];
  pokemonNames: PokemonNames[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemon();
    console.log('pokemon', this.pokemonNames);
  }

  /**
   * Call pokemon api to have needed URL for all pokemon data
   *
   * @function pokemonService.getPokemon call getPokemon observable function to treat data return by api
   * @var {PokemonUrl[]} receivedPokemon save result of api call
   * @function getPokemonNames treat returned data to retrieve pokemon names in all languages
   */
  getPokemon(): void {
    this.pokemonService
      .getPokemon()
      .subscribe(
        (data) => (
          (this.receivedPokemon = data.results),
          this.getPokemonNames(this.receivedPokemon)
        )
      );
  }

  /**
   * Fill the pokemonNames variable so we can load all name and access pokemon details through search interface
   *
   * @param {PokemonUrl[]} data data including URL to access the information we want to save
   * @function pokemonService.getPokemonById load an URL link to a specific pokemon to retrieve its details
   * @var {PokemonNames[]} pokemonNames variable saving all pokemon names in wanted languages
   */
  async getPokemonNames(data: PokemonUrl[]): Promise<void> {
    // Map all data and get the data from the stored URL
    await data.map((item: PokemonUrl) => {
      // Load the URL containing details data about the pokemon
      this.pokemonService.getPokemonById(item.url).subscribe((detail: any) =>
        // Load the URL concerning species retrieved inside the details data about the pokemon
        this.pokemonService
          .getPokemonById(detail.species.url)
          .subscribe((specie: any) => {
            // Check the names entry inside each pokemon species data and save the data concerning pokemon
            // names in english, french, and japanese
            this.pokemonNames.push({
              id: specie.id,
              nameFr: specie.names.find(
                (naming: ApiNames) =>
                  naming.language.name === 'fr' && naming.name
              ),
              nameEn: specie.names.find(
                (naming: ApiNames) =>
                  naming.language.name === 'en' && naming.name
              ),
              nameJp: specie.names.find(
                (naming: ApiNames) =>
                  (naming.language.name === 'ja-Hrkt' ||
                    naming.language.name === 'ja') &&
                  naming.name
              ),
            });
          })
      );
    });
  }
}
