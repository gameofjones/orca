import {Observable} from 'rxjs/Rx';

import { Component, OnInit, Input, Output, ChangeDetectorRef, EventEmitter, NgZone } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['../app.component.css', './menu.component.css', './menu.component-mobile.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})

export class MenuComponent implements OnInit {

  public subPage: boolean = false;
  private sub: any;


  title: string = 'default';


  constructor(private router:Router, private zone:NgZone, private cdRef:ChangeDetectorRef) {
      
      /*this.sub = router.events.subscribe(event => {
          console.log('page change: ' + event.url)
        
          this.test.title = "orca";
          console.log('we ran: ' + this.subPage)
      });*/
  }

  getRecentDetections(): void {
        this.router.events.subscribe((event) => {
          if(event instanceof NavigationStart) {
              /*if(event.url = '/user-home') {

                setTimeout(function() {
                    this.subPage = true;
                    console.log(this.subPage);
                }.bind(this), 0);  

              }*/



              //this.zone.run(() => { // <== added
                  console.log('page change: ' + event.url)
        
                  this.title = "orca";
                  console.log('we ran: ' + this.title)
                  setTimeout(()=>{}, 0);
              //});
          }
      });
    }

  ngOnInit() {
      this.getRecentDetections();

  }

  ngOnDestroy() {
      //this.sub.unsubscribe();
  }

  clicked(event) {
      console.log('hello');
  }
}
