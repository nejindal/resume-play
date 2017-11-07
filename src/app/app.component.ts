import { Component, OnDestroy } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import {RdbClientService} from './services/rdb-client.service';
import {JenkinsCardComponent} from './jenkins-card/jenkins-card.component';
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
  jenkinsArray =  [];
  
  constructor(private rdbClientService : RdbClientService){
  }
  ngOnInit(){

    console.log("onInit");
    this.rdbClientService.fetch('jenkins_and_users')
    .map(results => results.filter((item: Array<Object>) => item['users'].indexOf('nejindal')!=-1))
    .subscribe(results => {this.jenkinsArray = results; console.log(this.jenkinsArray)}, err => console.error(err),() => console.log("Results fetched"));
    /*
    this.jenkinsService.getJenkinsDetails().subscribe(res => {this.jenkinsArray = res['data'], console.log(this.jenkinsArray)});
    this.subscription = this.jenkinsService.jenkinsSubject$.subscribe( data => {this.jenkinsArray.push(data); console.log(this.jenkinsArray)}, err => console.log(err));
    
    
    this.pipelineService.getJenkinsPipelines("https://id-prod.ci.corp.adobe.com:12001");
    */
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
