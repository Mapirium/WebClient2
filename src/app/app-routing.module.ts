import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'map', loadChildren: './map/map.module#MapModule'},
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  {path: '**', redirectTo: 'welcome'}, // default route

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
