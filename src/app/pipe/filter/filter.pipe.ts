import { Pipe, PipeTransform } from '@angular/core';

import { PokemonNames } from 'src/app/interface/pokemon/pokemon';

@Pipe({
  name: 'filter',
})

/**
 * Custom pipe to filter displayed value depending the input of the user
 */
export class FilterPipe implements PipeTransform {
  transform(value: PokemonNames[], input: string): any {
    // If the user enter an input, it will filter all value matching user input and will only display the first 10
    if (input) {
      return value
        .filter(
          (val: PokemonNames) =>
            val.nameFr.name.toLowerCase().includes(input.toLowerCase()) ||
            val.nameEn.name.toLowerCase().includes(input.toLowerCase()) ||
            val.nameJp.name.includes(input)
        )
        .slice(0, 10);
    } else {
      // Return all the data if no input from the user
      return value.slice(0, 10);
    }
  }
}
