import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './components/information/information.component';
import { PrincipalRoutingModule } from './principal-routing.module';
import { GlobalModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    InformationComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    GlobalModule
  ]
})
export class PrincipalModule { }
