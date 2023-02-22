import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, input: string): any {
    if (input) {
      return value
        .filter((val: any) =>
          /*val.nameFr.toLowerCase().includes(input.toLocaleLowerCase()) ||
            val.nameEn.toLowerCase().includes(input.toLocaleLowerCase()) ||
            val.nameJp.includes(input)*/
          val.name.toLowerCase().includes(input.toLowerCase())
        )
        .slice(0, 10);
    } else {
      return value.slice(0, 10);
    }
  }
}
