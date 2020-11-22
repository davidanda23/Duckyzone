import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
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
=======
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './components/Sign/login/login.module';
import { RegisterModule } from './components/Sign/register/register.module';
import { SearchComponent } from './components/search/search.component';
>>>>>>> a60da903721890f71d86b0eca8e9ebe78cf6bfae


@NgModule({
  declarations: [
    AppComponent,NavbarComponent, DeportesComponent, ModaComponent, ElectronicosComponent, MusicaComponent, BellezaComponent, HogarComponent, NinosComponent, ComidaComponent, LibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
    RegisterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
