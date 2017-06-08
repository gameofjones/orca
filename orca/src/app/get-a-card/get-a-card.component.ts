import { Component, OnInit, OnChanges, trigger, transition, style, animate, state } from '@angular/core';

@Component({
    selector: 'app-get-a-card',
    templateUrl: './get-a-card.component.html',
    styleUrls: ['../app.component.css', './get-a-card.component.css'],
    animations: [
      trigger('flyInOut', [
          state('in', style({transform: 'translateX(0)'})),
          transition('void => *', [
              style({transform: 'translateX(-100%)'}),
              animate(100)
          ]),
          transition('* => void', [
              animate(100, style({transform: 'translateX(100%)'}))
          ])
      ])
    ]
    
})
export class GetACardComponent implements OnInit {

    imageLoaded: boolean = false;

    constructor() { }

    ngOnInit() {
    }

    onLoad(id) {
        this.imageLoaded = true;
    }
}
