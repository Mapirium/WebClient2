import {Component, Input, OnInit} from '@angular/core';
import {OAuthService} from "../../core/services/o-auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  oAuthService: OAuthService;

  constructor(oAuthService: OAuthService) {
    this.oAuthService = oAuthService;
  }

  @Input() private _mapName: string;

  ngOnInit() {
  }


  get mapName(): string {
    return this._mapName || "Mapirium";
  }
}
