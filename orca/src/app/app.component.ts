import { Component } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component-mobile.css'],
})

export class AppComponent {

    userMenu: boolean;
    onlyGuts: boolean;

    constructor(router: Router) {
        router.events.forEach((event: Event) => {
            if(event instanceof NavigationStart ){
                this.onlyGuts = event.url === '/login';
                this.userMenu = event.url === '/user-home';
            }         
        });
    }
}
