import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {AppSettings} from "./AppSettings";
import 'rxjs/add/operator/map';
import {Map} from "../model/map.model";

@Injectable()
export class MapService {

  constructor(private http: HttpClient) {
  }

  getAllMaps(): Observable<Map[]> {
    return this.http.get(AppSettings.REST_ENDPOINT + "/map").map((res: any) => {
      return res._embedded.maps.map((m) => {
        return this.mapMap(m);
      });
    });
  }

  mapMap(data: any): Map {
    const result = new Map();
    result.publicId = data.publicId;
    result.createdAt = data.createdAt;
    result.name = data.name;
    result.title = data.title;
    return result;
  }
}
