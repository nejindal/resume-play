import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject }    from 'rxjs/Subject';
import {RdbClientService} from './rdb-client.service';

@Injectable()
export class JenkinsService {

  //private jenkinsArray: JenkinsDetailsComponent[] = [];
  //private jenkinsSubject = new Subject<JenkinsDetailsComponent>();
  private table = "jenkins";
  //jenkinsSubject$ = this.jenkinsSubject.asObservable();
  

  constructor(private http : HttpClient, private rdbClientService: RdbClientService) { }

  
  getJenkinsDetails(){
    return this.http.get('http://localhost:3000/jenkins');
    
  }

  postJenkinsDetails(doc){
    this.rdbClientService.insert(this.table,doc);
  }

}
