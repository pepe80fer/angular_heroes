import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  private heroes: Heroe[];
  private termino: string;

  @Input() heroe: Heroe;
  @Input() index: number;

  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService,
               private router: Router ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( param => {
      this.termino = param.termino;
      this.heroes = this._heroesService.buscarHeroes(param.termino);
      console.log(this.heroes);
    });
  }

  verHeroe(idx: number) {
    this.router.navigate( ['/heroe', idx] );
  }

}
