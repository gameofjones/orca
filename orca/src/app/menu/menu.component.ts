import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Menu, Item, SubItem } from '../menu-model'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['../app.component.css', './menu.component.css', './menu.component-mobile.css'],
})

export class MenuComponent implements OnInit {

    public menu: Menu;

    constructor() {
        this.menu = {
          items: [
              {
                label: 'Get a Card',
                subItems: null
              },
              {
                label: 'Have a Card',
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

    clicked(event) {

    }
}
