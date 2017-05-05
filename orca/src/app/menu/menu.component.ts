import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['../app.component.css', './menu.component.css', './menu.component-mobile.css']
})
export class MenuComponent implements OnInit {

  subPage: boolean = false;

    constructor(router:Router) {
        router.events.forEach((event) => {
          if(event instanceof NavigationStart) {
              event.url !== '/' ? this.subPage = true : this.subPage = false;
          }
        });
    }

  ngOnInit() {
  }

  clicked(event) {
      console.log('hello');
  }
}
