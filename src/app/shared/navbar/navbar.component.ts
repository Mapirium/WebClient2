import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  /** Text, welcher als Title angezeigt werden soll */
  @Input() title = "Mapirium";

  constructor() { }

  ngOnInit() {
  }

}
