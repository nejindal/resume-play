import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JenkinsStepsService {

  constructor(private http : HttpClient) { }

  getStepsOfPipelineJob(pipeline, buildNumber){
    var url = this.convertToBlueOceanUrl(pipeline.url);
    var steps_url = url + "runs/" + buildNumber + "/nodes/";
    return this.http.get(steps_url);
  }

  convertToBlueOceanUrl(url){
    var baseUrl = "https://id-prod.ci.corp.adobe.com:12001/blue/rest/organizations/jenkins";
    var re = /job/gi;
    var newstr = url.replace(re, "pipelines");
    var host = /https:\/\/id-prod.ci.corp.adobe.com:12001/gi;
    var blueOceanUrl = newstr.replace(host, baseUrl);
    console.log(blueOceanUrl);
    return blueOceanUrl;
  }

}
