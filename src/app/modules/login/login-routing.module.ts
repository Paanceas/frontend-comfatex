import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
    {path:'', component: SignInComponent },
    {path:'login', component: SignInComponent },
    {path:'**', component:SignInComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule {}
