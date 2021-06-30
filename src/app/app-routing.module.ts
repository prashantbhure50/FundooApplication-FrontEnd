import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './Pages/forgot-password/forgot-password.component';
import { LoginComponent } from './Pages/Login/login.component';
import { RegisterComponent } from './Pages/register/register.component';


const routes: Routes = [
  { path:'login',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  {path:'ForgotPassword',component:ForgotPasswordComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
