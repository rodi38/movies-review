import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './Components/header/header.component';
import { MenuComponent } from './Components/menu/menu.component';
import { MovieCatalogComponent } from './Components/movie-catalog/movie-catalog.component';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';
import { RouteConfig } from './routes';
import { RedirectRouteComponent } from './Components/redirect-route/redirect-route.component';
import { MenuDisplayOffDirective } from './Components/menu/menu-display-off.directive';
import { MenuDisplayOnDirective } from './Components/menu/menu-display-on.directive';
import {MatIconModule} from '@angular/material/icon';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { RegisterMovieComponent } from './Components/register-movie/register-movie.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent, HeaderComponent, MenuComponent, MovieCatalogComponent, MovieDetailsComponent, UserLoginComponent, UserRegisterComponent, RedirectRouteComponent, MenuDisplayOffDirective, MenuDisplayOnDirective, DashboardComponent, SettingsComponent, RegisterMovieComponent],
  imports: [HttpClientModule, BrowserModule, ReactiveFormsModule, RouteConfig, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

}
