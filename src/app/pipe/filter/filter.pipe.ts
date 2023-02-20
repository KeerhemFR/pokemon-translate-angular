import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, input: string): any {
    console.log('pipe value', value);
    console.log('input value', input);
    if (input) {
      return value.filter(
        (val: any) =>
          val.nameFr.toLowerCase().includes(input) ||
          val.nameEn.toLowerCase().includes(input) ||
          val.nameJp.includes(input)
      );
    } else {
      return value;
    }
  }
}
