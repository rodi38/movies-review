import { RouterModule, Routes } from "@angular/router";
import { UserLoginComponent } from "./Components/user-login/user-login.component";
import { NgModule } from "@angular/core";
import { RedirectRouteComponent } from "./Components/redirect-route/redirect-route.component";
import { MovieCatalogComponent } from "./Components/movie-catalog/movie-catalog.component";
import { UserRegisterComponent } from "./Components/user-register/user-register.component";
import { DashboardComponent } from "./Components/dashboard/dashboard.component";
import { SettingsComponent } from "./Components/settings/settings.component";
import { RegisterMovieComponent } from "./Components/register-movie/register-movie.component";


const routeConfig: Routes = [
  {
    path: '',
    component: RedirectRouteComponent,
    title: "dashboard"
  },
  {
    path: 'login',
    component: UserLoginComponent,
    title: 'userLogin',
  },
  {
    path: 'register',
    component: UserRegisterComponent,
    title: 'userRegister',
  },
  {
    path: 'movies',
    component: MovieCatalogComponent,
    title: 'all movies',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'user Dashboard',
  },
  {
    path: 'settings',
    component: SettingsComponent,
    title: 'settings',
  },
  {
    path: 'register-movie',
    component: RegisterMovieComponent,
    title: 'register movie',
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routeConfig)],
  exports: [RouterModule]
})


export class RouteConfig {};
