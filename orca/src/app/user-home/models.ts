// card model
export class Card {
    number: number;
    name: string;
    status: boolean;
    balance: number;
}

// transaction model
export class Transaction {
    cardNumber: number;
    date: string;
    location: string;
    transaction: number;
    amount: number;
}