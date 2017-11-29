import { Component, OnInit } from '@angular/core';
import {RdbClientService} from './../services/rdb-client.service';

@Component({
  selector: 'app-register-jenkins-url',
  templateUrl: './register-jenkins-url.component.html',
  styleUrls: ['./register-jenkins-url.component.css'],
  providers: []
})
export class RegisterJenkinsUrlComponent implements OnInit {

  private jenkins_name: string;
  private jenkins_url: string;
  private table = "jenkins";

  constructor(private rdbClientService : RdbClientService) { }

  ngOnInit() {
  }

  newJenkinsServer(){
    var doc = {jenkins_name: this.jenkins_name, jenkins_url: this.jenkins_url};
    this.rdbClientService.insert(this.table,doc);
  }

}
