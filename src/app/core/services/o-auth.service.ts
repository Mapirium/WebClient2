import { Injectable } from '@angular/core';

@Injectable()
export class OAuthService {

  constructor() { }

  isLoggedIn(){
    return false;
  }

  getUsername(){
    return "Gast";
  }
}
