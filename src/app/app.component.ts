import { Component, OnDestroy } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import {HeaderComponent} from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnDestroy{
  title = 'app';
  subscription : Subscription;
  
  constructor(){
  }
  ngOnInit(){

    console.log("onInit");
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
