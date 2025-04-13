import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forint'
})
export class ForintPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    // Ellenőrizzük, hogy a bemeneti érték szám-e
    if (!isNaN(Number(value))) {
      // Ha szám, akkor formázzuk forint formátumra
      const numberValue = Number(value);
      return numberValue.toLocaleString('hu-HU', { style: 'currency', currency: 'HUF', minimumFractionDigits: 1 });
    }
    return null;
  }

}
