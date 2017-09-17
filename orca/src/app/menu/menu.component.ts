import { Component, OnInit, NgZone } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';
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

    constructor(router: Router, ngZone: NgZone) {

        this.checkMobile();

        router.events.forEach((event: Event) => {
            if (event instanceof NavigationStart ) {
                this.reset(event.url);
            }         
        });

        window.onresize = (e) =>
        {
            ngZone.run(() => this.reset(null));
        };

        this.menu = {
            items: [
                {
                    label: 'Get a Card',
                    subItems: null,
                    isExpanded: !this.isMobile,
                    isActive: false,
                    link: 'get-a-card'
                },
                {
                    label: 'Have a Card',
                    isExpanded: !this.isMobile,
                    isActive: false,
                    link: null,
                    subItems: [
                        {
                            label: 'Registered Cards',
                            link: 'registered-cards'
                        },
                        {
                            label: 'Unregistered Cards',
                            link: 'none'
                        }                                                         
                    ]
                },
                {
                    label: 'Customer Service',
                    isExpanded: !this.isMobile,
                    isActive: false,
                    link: null,
                    subItems: [
                        {
                            label: 'Pierce Transit',
                            link: 'none'
                        },
                        {
                            label: 'Washington State Ferries',
                            link: 'none'
                        },
                        {
                            label: 'Sound Transit',
                            link: 'none'
                        },
                        {
                            label: 'ORCA Regional Call Center',
                            link: 'none'
                        },
                        {
                            label: 'Everett Transit',
                            link: 'none'
                        },
                        {
                            label: 'King County',
                            link: 'none'
                        },
                        {
                            label: 'Washington State Ferries',
                            link: 'none'
                        },
                        {
                            label: 'ORCA To-Go',
                            link: 'none'
                        },
                    ]
                },
                {
                    label: 'FAQ',
                    isExpanded: !this.isMobile,
                    isActive: false,
                    link: null,
                    subItems: [
                        {
                            label: 'Add Value',
                            link: 'none'
                        },
                        {
                            label: 'About Your Card',
                            link: 'none'
                        },
                        {
                            label: 'Lost Card',
                            link: 'none'
                        },
                        {
                            label: 'Fare',
                            link: 'none'
                        },
                        {
                            label: 'Glossary',
                            link: 'none'
                        }                                               
                    ]
                }
            ]
        }
    }

    ngOnInit() {
 
    }

    // page load/window resize reset
    reset(route: string) {
        this.expandAll(!this.checkMobile())

        if (route) {
            // pass route without the prepended '/'
            this.checkActiveOnLoad(route.substring(1));
        }
    }

    checkMobile(): boolean {
        this.isMobile = (window.innerWidth < 770) ? true : false;
        return this.isMobile;
    }

    checkActiveOnLoad(route: string): void {
        for(var i = 0; i < this.menu.items.length; i++) {
            var menuItem: Item = this.menu.items[i];
            if (route === menuItem.link) {
                menuItem.isActive = true;
            } else {
                if (menuItem.subItems) {
                    for (var j = 0; j < menuItem.subItems.length; j++) {
                        var subItem: SubItem = menuItem.subItems[j];
                        if (route === subItem.link) {
                            menuItem.isActive = true;
                            break;
                        }
                    }
                }
            }

            if (menuItem.isActive) {
                break;
            }
        }
    }

    // expands/collapses the mobile menu sub items
    expandAll(expand: boolean): void {
        if (!expand) {
            this.burger = false;
        }

        for (var i = 0; i < this.menu.items.length; i++) {
            var item: Item = this.menu.items[i];
            item.isExpanded = expand;
        }
    }

    // hamburger click handler
    burgerClick(event) {
        this.burger = !this.burger;

        if (this.burger == false) {
            this.expandAll(false);
        }
    }

    // top level menu item click handler
    menuItemClick(item) {
        if (item) {
            // only trigger slide out on mobile
            if (this.isMobile) {
                if (this.activeItem != null && this.activeItem != item) {
                    this.activeItem.isExpanded = false;
                }

                this.activeItem = item;
                item.isExpanded = !item.isExpanded;
            }
        }

        this.changeActiveState(item);
    }

    // sub menu item click handler
    subItemClick(item: Item) {
        this.changeActiveState(item);
    }

    // controls the active state of a menu item
    changeActiveState(item: Item): void {
        if (item) {
            item.isActive = true;
        }

        for (var i = 0; i < this.menu.items.length; i++) {
            var menuItem: Item = this.menu.items[i];
            if (!item || menuItem.label !== item.label) {
                menuItem.isActive = false;
            }
        }
    }
}
