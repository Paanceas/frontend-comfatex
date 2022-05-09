import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './components/information/information.component';
import { PrincipalRoutingModule } from './principal-routing.module';
import { GlobalModule } from 'src/app/components/components.module';
import { NgChartsModule } from 'ng2-charts';
import { UsersComponent } from './components/users/users.component';



@NgModule({
  declarations: [
    InformationComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    GlobalModule,
    NgChartsModule
  ]
})
export class PrincipalModule { }
