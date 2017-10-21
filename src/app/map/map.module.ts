import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MapComponent} from "./map/map.component";
import {MapRoutingModule} from "./map-routing.module";
import {CoreModule} from "../core/core.module";

@NgModule({
  imports: [
    CommonModule,
    MapRoutingModule,
    CoreModule
  ],
  declarations: [MapComponent]
})
export class MapModule { }
