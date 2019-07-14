import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activo: boolean = true): string {
    let salida = '';
    if ( activo ) {
      for ( let i of value) {
        salida += '*';
      }
    } else {
      salida = value;
    }
    return salida;
  }

}
