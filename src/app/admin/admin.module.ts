import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateMapComponent} from "./create-map/create-map.component";
import {ManageMapComponent} from "./manage-map/manage-map.component";
import {AdminRoutingModule} from "./admin-routing.module";

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    CreateMapComponent,
    ManageMapComponent]
})
export class AdminModule {
}
