import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'page',
    loadChildren: () => import('./modules/page/page.module').then(m => m.PageModule)
  },
  {
    path: 'ingreso',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  { path: '', redirectTo:'/page', pathMatch:'full'},
  { path: '**', redirectTo:'/page', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
