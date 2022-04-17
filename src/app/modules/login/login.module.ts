import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { LoginRoutingModule } from './login-routing.module';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { RememberPasswordComponent } from './components/remember-password/remember-password.component';



@NgModule({
  declarations: [
    SignInComponent,
    SingUpComponent,
    RememberPasswordComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
