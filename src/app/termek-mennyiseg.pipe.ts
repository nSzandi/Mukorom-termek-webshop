import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'termekAr'
})
export class TermekMennyisegPipe implements PipeTransform {
  transform(nev: string): string {
    return `${nev} / db`;
  }
}
