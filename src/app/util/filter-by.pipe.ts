import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform<T>(array: Array<T>, attribute: string, value?: string, inverted: boolean = false): Array<T> {
    if (value) {
      if (inverted) {
        return array.filter(item => item[attribute] !== value);
      } 
      return array.filter(item => item[attribute] === value);
    }

    if (inverted) {
      return array.filter(item => !item[attribute]);
    }
    return array.filter(item => item[attribute]);
  }

}
