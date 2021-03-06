import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MapService} from "./services/map.service";
import {HttpClientModule} from "@angular/common/http";
import {OAuthService} from "./services/o-auth.service";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [MapService, OAuthService]
})
export class CoreModule { }
