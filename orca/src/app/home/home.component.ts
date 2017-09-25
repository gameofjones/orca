import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.css', './home.component.css']
})
export class HomeComponent implements OnInit {

    @ViewChild('tapVideo')tapVideo;

    heroText = "ORCA gets you moving";

    heroSubText = "By bus, train, or ferry - it's the simple way to get there. Getting a card is easy. Then just add value, tap, and ride with ORCA.";

    getStarted = "Get Started";

    cashPass = "Use like cash to pay your fare. Store up to $300 on your ORCA card.";

    addValue = "Add value online, at ticket vending machines, or at partipating retailers.";

    trackTransfer = "Your card tracks different fares and transfers automatically for a smoother transit.";

    orca = "One Regional Card for All";

    howTo = "Tap your card at the ORCA card reader located on the transit or nearest turnstile. If you are traveling by light rail or ferry, tap your card after exiting once you have reached your destination.";

    video = "Video: See how it works";

    displayVideo = false;

  constructor() { }

  ngOnInit() {

  }

  iclicked() {
    console.log('i member')
  }

  openVideo() {
      this.displayVideo = true;
  }

  closeVideo() {
      this.displayVideo = false;
      this.tapVideo.nativeElement.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*')
  }
}
