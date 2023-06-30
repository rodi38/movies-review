import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { UserLoginComponent } from "./Components/user-login/user-login.component";
import { NgModule } from "@angular/core";
import { RedirectRouteComponent } from "./Components/redirect-route/redirect-route.component";
import { MovieCatalogComponent } from "./Components/movie-catalog/movie-catalog.component";


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
    path: 'movies',
    component: MovieCatalogComponent,
    title: 'all movies',
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routeConfig)],
  exports: [RouterModule]
})


export class RouteConfig {};
