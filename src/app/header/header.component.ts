import {Component, Input, OnInit} from '@angular/core';
import {OAuthServiceService} from "../services/o-auth-service.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  oAuthService: OAuthServiceService;

  constructor(oAuthService: OAuthServiceService) {
    this.oAuthService = oAuthService;
  }

  @Input() private _mapName: string;

  ngOnInit() {
  }


  get mapName(): string {
    return this._mapName || "Mapirium";
  }
}
