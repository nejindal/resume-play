import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PipelineService {

  private pipelinesArray: Object[] = [];
  constructor(private http: HttpClient) {
    
   }

   
   getJenkinsPipelines(jenkinsUrl : string){
    const url = jenkinsUrl + '/api/json?tree=jobs[name,url]&pretty=true';
    this.pipelinesArray = [];
    this.getPipelines(url,"");
    return this.pipelinesArray;
  }

   getPipelines(url: string, pipelineName: string){
    let jenkinsItemsArray: any = [];
    this.http.get(url).subscribe(data => {
      jenkinsItemsArray = data['jobs'];
      this.getFolders(jenkinsItemsArray,pipelineName);
    });
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
              this.sort();
          }
        }
     }
   }

   sort(){
      this.pipelinesArray.sort(function(a: any,b: any){
          var strA = a['name'].toLowerCase();
          var strB = b['name'].toLowerCase();
          if (strA < strB){ //sort string ascending
            return -1;
          } 
          if (strA > strB){
            return 1;
          }
          return 0; //default return value (no sorting)
      })
   }

}
