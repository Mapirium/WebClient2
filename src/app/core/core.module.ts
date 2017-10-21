import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MapService} from "./services/map.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [MapService]
})
export class CoreModule { }
