import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { RememberPasswordComponent } from './components/remember-password/remember-password.component';

const routes: Routes = [
    {path: '', redirectTo:'login', pathMatch:'full'},
    {path:'login', component: SignInComponent },
    {path:'registro', component: SingUpComponent },
    {path:'recuperar', component: RememberPasswordComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule {}
