import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './Components/header/header.component';
import { MenuComponent } from './Components/menu/menu.component';
import { RegisterFormComponent } from './Components/register-form/register-form.component';
import { MovieCatalogComponent } from './Components/movie-catalog/movie-catalog.component';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';
import { RouteConfig } from './routes';
import { RedirectRouteComponent } from './Components/redirect-route/redirect-route.component';
import { MenuDisplayOffDirective } from './Components/menu/menu-display-off.directive';
import { MenuDisplayOnDirective } from './Components/menu/menu-display-on.directive';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [AppComponent, HeaderComponent, MenuComponent, RegisterFormComponent, MovieCatalogComponent, MovieDetailsComponent, UserLoginComponent, UserRegisterComponent, RedirectRouteComponent, MenuDisplayOffDirective, MenuDisplayOnDirective, ],
  imports: [BrowserModule, ReactiveFormsModule, RouteConfig, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

}
