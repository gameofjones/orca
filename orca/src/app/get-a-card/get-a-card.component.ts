import { Component, OnInit, OnChanges, trigger, transition, style, animate, state, keyframes } from '@angular/core';

@Component({
    selector: 'app-get-a-card',
    templateUrl: './get-a-card.component.html',
    styleUrls: ['../app.component.css', './get-a-card.component.css'],
    animations: [
      trigger('flyIn', [
          state('in', style({ transform: 'translateY(0)' })),
          transition('void => *', [
              style({transform: 'translateY(30%)'}),
              animate(1000, keyframes([
                  style({ opacity: 0, transform: 'translateY(30%)', offset: 0 }),
                  style({ opacity: 1, transform: 'translateY(-15px)',  offset: 0.3 }),
                  style({ opacity: 1, transform: 'translateY(0)',     offset: 1.0})
              ]))
          ])
      ])
    ]
    
})
export class GetACardComponent implements OnInit {

    imageLoaded: boolean = false;
    // keeps track of subsequent image loading
    imageDelay: Array<boolean> = [false, false];

    constructor() {
        this.imageDelay = [false, false];
     }

    ngOnInit() {
    }

    onImageLoad() {
      // triggers first animation
        this.imageLoaded = true;
    }

    animateNext(imageNumber) {
        // store global property here accurately reference it
        var imageDelay = this.imageDelay;
        // trigger animation of the next card
        setTimeout(function () { imageDelay[imageNumber] = true; }, 50)
    }
}
