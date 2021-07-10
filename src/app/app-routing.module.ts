import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './Pages/dash-board/dash-board.component';
import { ForgotPasswordComponent } from './Pages/forgot-password/forgot-password.component';
import { LoginComponent } from './Pages/Login/login.component';
import { NotesComponent } from './Pages/notes/notes.component';
import { RegisterComponent } from './Pages/register/register.component';


const routes: Routes = [
  { path:'login',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  {path:'ForgotPassword',component:ForgotPasswordComponent},
  {path:'DashBoard',component:DashBoardComponent},

  {path:'notes',component:NotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
