import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'login', loadChildren: () => import('./components/Sign/login/login.module').then(m => m.LoginModule)},
  { path: 'register', loadChildren: () => import('./components/Sign/register/register.module').then(m => m.RegisterModule) },
  { path: 'search', loadChildren: () => import('./components/search/search.module').then(m => m.SearchModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
