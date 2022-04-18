import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { InformationComponent } from './components/information/information.component';

const routes: Routes = [
    {path:'', component: InformationComponent },
    {path:'comfatex', component: InformationComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PrincipalRoutingModule {}
