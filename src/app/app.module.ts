import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { DeportesComponent } from './components/departamentos/deportes/deportes.component';
import { ModaComponent } from './components/departamentos/moda/moda.component';
import { ElectronicosComponent } from './components/departamentos/electronicos/electronicos.component';
import { MusicaComponent } from './components/departamentos/musica/musica.component';
import { BellezaComponent } from './components/departamentos/belleza/belleza.component';
import { HogarComponent } from './components/departamentos/hogar/hogar.component';
import { NinosComponent } from './components/departamentos/ninos/ninos.component';
import { ComidaComponent } from './components/departamentos/comida/comida.component';
import { LibrosComponent } from './components/departamentos/libros/libros.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './components/Sign/login/login.module';
import { RegisterModule } from './components/Sign/register/register.module';
import { SearchComponent } from './components/search/search.component';
import { VideojuegosComponent } from './components/departamentos/videojuegos/videojuegos.component';
import { ConfiguracionComponent } from './components/propiedades-user/configuracion/configuracion.component';
import { DashboardComponent } from './components/propiedades-user/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DeportesComponent,
    ModaComponent,
    ElectronicosComponent,
    MusicaComponent,
    BellezaComponent,
    HogarComponent,
    NinosComponent,
    ComidaComponent,
    LibrosComponent,
    VideojuegosComponent,
    ConfiguracionComponent,
    DashboardComponent
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
