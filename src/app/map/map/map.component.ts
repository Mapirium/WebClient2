import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  mapId: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.loadMap(params['mapId']);
      }
    )
  }

  loadMap(mapId){
    this.mapId = mapId;
  }

}
