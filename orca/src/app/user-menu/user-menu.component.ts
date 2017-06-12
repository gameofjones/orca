import { Component, OnInit, NgZone } from '@angular/core';
import { Menu, Item, SubItem } from '../menu-model';
import { slideInOut } from '../animations/slideInOut';

@Component({
    selector: 'app-user-menu',
    templateUrl: '../menu/menu.component.html',
    styleUrls: ['../app.component.css', '../menu/menu.component.css', '../menu/menu.component-mobile.css', './user-menu.component.css'],
    animations: [ slideInOut ]
})
export class UserMenuComponent implements OnInit {

    public menu: Menu;
    public burger: boolean = false;
    public isMobile: boolean = false;

    constructor(ngZone: NgZone) {
        this.checkMobile();

        window.onresize = (e) =>
        {
            ngZone.run(() => this.checkMobile());
        };
        
        this.menu = {
            items: [
                {
                    label: 'Hi, Kiah ▾',
                    subItems: [
                        {
                            label: 'Account Details',
                            link: ''
                        },
                        {
                            label: 'Manage Cards',
                            link: ''
                        },
                        {
                            label: 'Transaction History',
                            link: ''
                        },
                        {
                            label: 'Logout',
                            link: ''
                        }                                                              
                    ]
                }
            ]
        }
    }

    ngOnInit() {
    }

    checkMobile() {
        this.isMobile = (window.innerWidth < 750) ? true : false
    }

    handleBurger(event) {
        this.burger = !this.burger;
    }
}
