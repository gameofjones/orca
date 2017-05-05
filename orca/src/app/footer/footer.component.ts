import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['../app.component.css', './footer.component.css']
})
export class FooterComponent implements OnInit {

    privacy = "Privacy";

    termsOfUse = "Terms of Use";

    news = "News";

    businessAccounts = "Business Accounts";

    notReal = "This site is not for actual use. It is for professional development only. Please go to ";

  constructor() { }

  ngOnInit() {
  }

}
