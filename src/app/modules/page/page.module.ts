import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialComponent } from './components/initial/initial.component';
import { PageRoutingModule } from './page-routing.module';

@NgModule({
  declarations: [
    InitialComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule
  ]
})
export class PageModule { }
