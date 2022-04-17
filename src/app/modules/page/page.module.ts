import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialComponent } from './components/initial/initial.component';
import { PageRoutingModule } from './page-routing.module';
import { GlobalModule } from 'src/app/components/components.module';
import { StoreComponent } from './components/store/store.component';
import { DetailsProductComponent } from './components/details-product/details-product.component';

@NgModule({
  declarations: [
    InitialComponent,
    StoreComponent,
    DetailsProductComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    GlobalModule
  ]
})
export class PageModule { }
