import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {OAuthServiceService} from "./services/o-auth-service.service";
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [OAuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
