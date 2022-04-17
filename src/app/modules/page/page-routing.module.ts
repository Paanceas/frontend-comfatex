import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { InitialComponent } from './components/initial/initial.component';
import { StoreComponent } from './components/store/store.component';
import { DetailsProductComponent } from './components/details-product/details-product.component';

const routes: Routes = [
    {path:'', component: InitialComponent },
    {path:'inicio', component: InitialComponent },
    {path:'tienda', component: StoreComponent },
    {path:'detalle', component: DetailsProductComponent },
    {path:'**', redirectTo:'/inicio', pathMatch:'full'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageRoutingModule {}
