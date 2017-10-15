import { Injectable } from '@angular/core';

@Injectable()
export class OAuthServiceService {

  constructor() { }

  isLoggedIn(){
    return false;
  }

  getUsername(){
    return "Gast";
  }
}
