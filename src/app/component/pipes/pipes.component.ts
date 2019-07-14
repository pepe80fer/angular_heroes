import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  activar = true;
  textoBoton: string;

  constructor() {
    this.cambiaTextoBoton();
  }

  ngOnInit() {
  }

  cambiaTextoBoton() {
    this.textoBoton = (this.activar) ? 'Mostrar' : 'Ocultar';
  }

}
