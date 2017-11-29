import { Component, OnInit } from '@angular/core';

import {RdbClientService} from './../services/rdb-client.service';
import {JenkinsCardComponent} from './../jenkins-card/jenkins-card.component';

@Component({
  selector: 'app-jenkins-list',
  templateUrl: './jenkins-list.component.html',
  styleUrls: ['./jenkins-list.component.css']
})
export class JenkinsListComponent implements OnInit {

  jenkinsArray =  [];
  ldap = "praverma";
  
  constructor(private rdbClientService : RdbClientService) { }

  ngOnInit() {

    this.rdbClientService.watch('jenkins_and_users')
    .map(results => results.filter((item: Array<Object>) => item['users'].find(x => x.ldap===this.ldap)))
    .subscribe(results => {this.jenkinsArray = results; console.log(this.jenkinsArray)}, err => console.error(err),() => console.log("Results fetched"));

  }

}
