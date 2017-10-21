import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MapComponent} from "./map/map.component";
import {MapRoutingModule} from "./map-routing.module";
import {CoreModule} from "../core/core.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    MapRoutingModule,
    CoreModule,
    SharedModule
  ],
  declarations: [MapComponent]
})
export class MapModule { }
