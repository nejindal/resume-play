import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PipelineService {

  private pipelinesArray: String[] = [];
  constructor(private http: HttpClient) {
    
   }

   getJenkinsPipelines(jenkinsUrl : string){
    const url = jenkinsUrl + '/api/json?tree=jobs[name,url]&pretty=true';
    console.log("Url - "+ url);
    console.log(this.getPipelines(url,""));
  }

   getPipelines(url: string, pipelineName: string){
    let jenkinsItemsArray: any = [];
    this.http.get(url)
    .subscribe(data => {
      jenkinsItemsArray = data['jobs'];
      this.getFolders(jenkinsItemsArray,pipelineName);
    });
    return this.pipelinesArray;
  }

   getFolders(jenkinsItemsArray: any, pipelineName: string){
     let pipelineNameTemp = pipelineName;
     for(let jenkinsItem of jenkinsItemsArray){
        if(jenkinsItem['_class'] == "com.cloudbees.hudson.plugins.folder.Folder"){
          pipelineNameTemp = pipelineName.concat(jenkinsItem['name'] + '/');
          this.getPipelines(jenkinsItem['url']+ 'api/json?tree=jobs[name,url]&pretty=true',pipelineNameTemp);
        }else{
          if(jenkinsItem['_class'] == "org.jenkinsci.plugins.workflow.job.WorkflowJob"){
              pipelineNameTemp = pipelineName.concat(jenkinsItem['name']);
              jenkinsItem['name'] = pipelineNameTemp;
              this.pipelinesArray.push(jenkinsItem);
          }
        }
     }
   }

}
