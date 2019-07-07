import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  nombre:string;
  apellido:string;

  constructor() { 
    this.nombre = "Giovanni";
    this.apellido = "Neuta";
  }

  ngOnInit() {
  }

}
