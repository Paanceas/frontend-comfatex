import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavComponent,
    HeaderComponent,
    SidebarComponent
  ],
  exports: [
    FooterComponent,
    NavComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule
  ],
})
export class GlobalModule { }
