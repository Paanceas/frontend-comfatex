import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavComponent
  ],
  exports: [
    FooterComponent,
    NavComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
})
export class GlobalModule { }
