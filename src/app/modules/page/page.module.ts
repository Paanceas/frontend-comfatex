import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialComponent } from './components/initial/initial.component';
import { PageRoutingModule } from './page-routing.module';
import { GlobalModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [
    InitialComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    GlobalModule
  ]
})
export class PageModule { }
