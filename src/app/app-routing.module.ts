import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeportesComponent } from './components/departamentos/deportes/deportes.component'; 
import { ElectronicosComponent } from './components/departamentos/electronicos/electronicos.component';
import { ModaComponent } from './components/departamentos/moda/moda.component';
import { MusicaComponent } from './components/departamentos/musica/musica.component';
import { BellezaComponent } from './components/departamentos/belleza/belleza.component';
import { HogarComponent } from './components/departamentos/hogar/hogar.component';
import { NinosComponent } from './components/departamentos/ninos/ninos.component';
import { ComidaComponent } from './components/departamentos/comida/comida.component';
import { LibrosComponent } from './components/departamentos/libros/libros.component';
import { VideojuegosComponent } from './components/departamentos/videojuegos/videojuegos.component';
import { ConfiguracionComponent } from './components/propiedades-user/configuracion/configuracion.component';
import { DashboardComponent } from './components/propiedades-user/dashboard/dashboard.component';
import { VentasComponent } from './components/ventas/ventas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'login', loadChildren: () => import('./components/Sign/login/login.module').then(m => m.LoginModule)},
  { path: 'register', loadChildren: () => import('./components/Sign/register/register.module').then(m => m.RegisterModule) },
  { path: 'search', loadChildren: () => import('./components/search/search.module').then(m => m.SearchModule) },
  { path: 'deportes', component: DeportesComponent },
  { path: 'moda', component: ModaComponent },
  { path: 'electronicos', component: ElectronicosComponent },
  { path: 'musica', component: MusicaComponent },
  { path: 'belleza', component: BellezaComponent },
  { path: 'hogar', component: HogarComponent },
  { path: 'niños', component: NinosComponent },
  { path: 'comida', component: ComidaComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'videojuegos', component: VideojuegosComponent },
  { path: 'configuracion', component: ConfiguracionComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'confirmarVenta', component: VentasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
