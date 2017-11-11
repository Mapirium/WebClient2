import { Component, OnInit } from '@angular/core';
import {Map} from "../core/model/map.model";
import {MapService} from "../core/services/map.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  maps: Map[];

  constructor(private mapService: MapService) { }

  ngOnInit() {
    // Karten laden
    this.mapService.getAllMaps().subscribe(
      maps => {
        this.maps = maps;
      },
      error => {
        console.log(`Fehler beim Laden: ${error}`);
      }
    );
  }

}
