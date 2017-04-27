import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component-mobile.css']
})

export class AppComponent {
    displayMenu: boolean = true;
    displayFooter: boolean = true;

    constructor(router:Router) {
        router.events.forEach((event) => {
          if(event instanceof NavigationStart) {
              console.log(event);

              if (event.url === '/login') {
                  this.displayMenu = false;
                  this.displayFooter = false;
              } else {
                  this.displayMenu = true;
                  this.displayFooter = true;
              }
          }
          // NavigationEnd
          // NavigationCancel
          // NavigationError
          // RoutesRecognized
        });
    }
}
