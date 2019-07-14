import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalizado'})
export class CapitalizadoPipe implements PipeTransform {
  transform(value: string): string {
    const ARREGLO = value.split(' ');
    // Recorrer cada palabra
    for (let i = 0; i < ARREGLO.length; i++) {
      ARREGLO[i] = ARREGLO[i].toLowerCase();
      ARREGLO[i] = ARREGLO[i].charAt(0).toUpperCase() + ARREGLO[i].slice(1);
    }
    return ARREGLO.join(' ');
  }
}
