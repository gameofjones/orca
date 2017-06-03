import { Component, OnInit } from '@angular/core';
import { Card, Transaction } from './models';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['../app.component.css', './user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  public cards: Array<Card> = [];
  public transactions: Array<Transaction> = [];

  constructor() { }

  ngOnInit() {
      this.retrieveCards();
      this.retrieveTransactions();
  }


  // will eventually pull from some json (hopefully)
  retrieveCards(): void {
      let card1: Card = {
          number: 11942700,
          name: 'Personal',
          status: true,
          balance: 16.00
      }

      let card2: Card = {
          number: 11942712,
          name: 'Guests',
          status: false,
          balance: 24.75
      }
      
      this.cards.push(card1);
      this.cards.push(card2);
  }

  // will eventually pull from some json (hopefully)
  retrieveTransactions(): void {
    let txNumber = 751;

      for(var i=0; i<5; i++) {
          let transaction: Transaction = {
              cardNumber: 11942700,
              date: new Date().toDateString() + ' ' + new Date().toLocaleTimeString(),
              location: 'KCM, KCM-BUS-7122',
              transaction: txNumber,
              amount: 2.71
          }

          this.transactions.push(transaction);
          txNumber--;
      }
  }
}
