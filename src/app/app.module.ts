import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { DeportesComponent } from './departamentos/deportes/deportes.component';
import { ModaComponent } from './departamentos/moda/moda.component';
import { ElectronicosComponent } from './departamentos/electronicos/electronicos.component';
import { MusicaComponent } from './departamentos/musica/musica.component';
import { BellezaComponent } from './departamentos/belleza/belleza.component';
import { HogarComponent } from './departamentos/hogar/hogar.component';
import { NinosComponent } from './departamentos/ninos/ninos.component';
import { ComidaComponent } from './departamentos/comida/comida.component';
import { LibrosComponent } from './departamentos/libros/libros.component'

//import { HttpService } from './services/HttpService/http-service.service';

@NgModule({
  declarations: [
    AppComponent,NavbarComponent, DeportesComponent, ModaComponent, ElectronicosComponent, MusicaComponent, BellezaComponent, HogarComponent, NinosComponent, ComidaComponent, LibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
