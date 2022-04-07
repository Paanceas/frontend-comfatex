import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { InitialComponent } from './components/initial/initial.component';

const routes: Routes = [
    {path:'', component: InitialComponent },
    {path:'inicio', component: InitialComponent },
    {path:'**', redirectTo:'/inicio', pathMatch:'full'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageRoutingModule {}
