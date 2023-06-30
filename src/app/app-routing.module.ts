import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    title: "Main"
  },
  {
    path: 'login',
    component: UserLoginComponent,
    title: 'userLogin',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
