import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform<T>(value: Array<T>, attribute: string): Array<T> {
    if (!value) {
      return [];
    }
    return value.sort((a, b) => {
      const keyA = a[attribute];
      const keyB = b[attribute];
      return keyA - keyB;
    });
  }

}
