import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css', './login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
      name: '',
      password: ''
  }

  constructor() {
      
  }

  ngOnInit() {

  }
}
