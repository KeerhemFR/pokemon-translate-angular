import { Component } from '@angular/core';

import * as pokemon from '../../../data/pokemon.json';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  pokemon = pokemon;
  searchText: string = '';
}
