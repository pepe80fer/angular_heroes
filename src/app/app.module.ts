import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Servicios
import { HeroesService } from './servicios/heroes.service';

// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BodyComponent } from './component/body/body.component';
import { FooterComponent } from './component/footer/footer.component';
import { AboutComponent } from './component/about/about.component';
import { HeroesComponent } from './component/heroes/heroes.component';
import { HomeComponent } from './component/home/home.component';
import { HeroeComponent } from './component/heroe/heroe.component';
import { BuscarComponent } from './component/buscar/buscar.component';
import { HeroeTarjetaComponent } from './component/heroe-tarjeta/heroe-tarjeta.component';
import { CapitalizadoPipe } from './pipes/capitalizado_pipe';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { PipesComponent } from './component/pipes/pipes.component';
import { ContrasenaPipe } from './pipes/contrasena.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    AboutComponent,
    HeroesComponent,
    HomeComponent,
    HeroeComponent,
    BuscarComponent,
    HeroeTarjetaComponent,
    CapitalizadoPipe,
    DomSeguroPipe,
    PipesComponent,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
