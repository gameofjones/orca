import { Component, OnInit } from '@angular/core';
import { Menu, Item, SubItem } from '../menu-model'

@Component({
  selector: 'app-user-menu',
  templateUrl: '../menu/menu.component.html',
  styleUrls: ['../app.component.css', '../menu/menu.component.css', '../menu/menu.component-mobile.css', './user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  public menu: Menu;

  constructor() {
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

}
