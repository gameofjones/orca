import { Component, OnInit, NgZone } from '@angular/core';
import { AppComponent } from '../app.component';
import { Menu, Item, SubItem } from '../menu-model'
import { slideInOut } from '../animations/slideInOut';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['../app.component.css', './menu.component.css', './menu.component-mobile.css'],
    animations: [ slideInOut ]
})

export class MenuComponent implements OnInit {

    public menu: Menu;
    public burger: boolean = false;
    public isMobile: boolean = false;
    public activeItem: Item = null;

    constructor(ngZone: NgZone) {

        this.checkMobile();

        window.onresize = (e) =>
        {
            ngZone.run(() => this.checkMobile());
        };

        this.menu = {
          items: [
              {
                label: 'Get a Card',
                subItems: null,
                isActive: !this.isMobile,
                link: 'get-a-card'
              },
              {
                label: 'Have a Card',
                isActive: !this.isMobile,
                link: null,
                subItems: [
                    {
                        label: 'Registered Cards',
                        link: 'registered-cards'
                    },
                    {
                        label: 'Unregistered Cards',
                        link: ''
                    }                                                         
                ]
              },
              {
                label: 'Customer Service',
                isActive: !this.isMobile,
                link: null,
                subItems: [
                    {
                        label: 'Pierce Transit',
                        link: ''
                    },
                    {
                        label: 'Washington State Ferries',
                        link: ''
                    },
                    {
                        label: 'Sound Transit',
                        link: ''
                    },
                    {
                        label: 'ORCA Regional Call Center',
                        link: ''
                    },
                    {
                        label: 'Everett Transit',
                        link: ''
                    },
                    {
                        label: 'King County',
                        link: ''
                    },
                    {
                        label: 'Washington State Ferries',
                        link: ''
                    },
                    {
                        label: 'ORCA To-Go',
                        link: ''
                    },
                ]
              },
              {
                label: 'FAQ',
                isActive: !this.isMobile,
                link: null,
                subItems: [
                    {
                        label: 'Add Value',
                        link: ''
                    },
                    {
                        label: 'About Your Card',
                        link: ''
                    },
                    {
                        label: 'Lost Card',
                        link: ''
                    },
                    {
                        label: 'Fare',
                        link: ''
                    },
                    {
                        label: 'Glossary',
                        link: ''
                    }                                               
                ]
              }
          ]
      }
    }

    ngOnInit() {
 
    }

    // todo: if resizing then set flags isActive accordingly
    checkMobile() {
        this.isMobile = (window.innerWidth < 770) ? true : false;
    }

    // todo: collapse all on route change
    collapseAll() {
        for (var i = 0; i < this.menu.items.length; i++) {
            var item: Item = this.menu.items[i];
            item.isActive = false;
        }
    }

    burgerClick(event) {
        this.burger = !this.burger;

        if (this.burger == false) {
            this.collapseAll();
        }
    }

    menuItemClick(item) {
        if (this.activeItem != null && this.activeItem != item) {
            this.activeItem.isActive = false;
        }

        this.activeItem = item;
        item.isActive = !item.isActive;
    }
}
