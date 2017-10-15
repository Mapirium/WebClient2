import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CreateMapComponent} from "./create-map/create-map.component";
import {ManageMapComponent} from "./manage-map/manage-map.component";

const advancedRoutes: Routes = [

  {path: 'create', component: CreateMapComponent},
  {path: 'manage', component: ManageMapComponent},

];

@NgModule({
  imports: [
    RouterModule.forChild(advancedRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
