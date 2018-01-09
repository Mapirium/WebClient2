import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MapService} from "../../core/services/map.service";
import {Map} from "../../core/model/map.model";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  mapId: string;

  map: Map;

  constructor(private route: ActivatedRoute,
              private mapService: MapService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.loadMap(params['mapId']);
      }
    )
  }

  loadMap(mapId){
    this.mapId = mapId;

    // Daten zur Karten laden
    this.mapService.getMapById(this.mapId).subscribe(
      map => {
        this.map = map;
      },
      error => {
        console.log(`Fehler beim Laden: ${error}`);
      }
    );
  }

}
