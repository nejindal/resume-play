import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Horizon from '@horizon/client';

@Injectable()
export class StepsService {

  constructor(private http : HttpClient) { }

  getSteps(jenkinsName : string, pipeline: string){
    return this.http.get('http://localhost:3000/pipeline/steps');
  }

  postSteps(jenkinsName : string, pipeline: string, jobId: string, steps: any[]){
    console.log("Steps "  + steps);
    const horizon = Horizon({host: 'localhost:8181'});
    const step = horizon("messages");
    const body = {jenkinsName: jenkinsName, pipeline: pipeline, jobId: jobId, steps: steps};
    step.store(body);
    /*
    console.log("body " + body);
    this.http.post('http://localhost:3000/pipeline/steps',body).subscribe(res => console.log(res));
    */
  }

}
