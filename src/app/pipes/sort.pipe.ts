import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any[], prop: string[], order: number): any[] {

    // Check if is not null
    if (!value || !prop || !order) return value;

    return value.sort((a: any, b: any) => {
      // We go for each property followed by path
      prop.forEach(property => {
        a = a[property];
        b = b[property];
      })

      // Order * (-1): We change our order
      return a > b ? order : order * (- 1);
    })
  }
  

}
