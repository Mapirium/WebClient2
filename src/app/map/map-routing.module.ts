import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MapComponent} from "./map/map.component";

const advancedRoutes: Routes = [

  {path: '', component: MapComponent},
  {path: ':mapId', component: MapComponent},

];

@NgModule({
  imports: [
    RouterModule.forChild(advancedRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MapRoutingModule { }
