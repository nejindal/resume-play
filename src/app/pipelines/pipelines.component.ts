import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {RdbClientService} from './../services/rdb-client.service';
import {PipelineService} from './../services/pipeline.service';
import {DataService} from './../services/data.service';
import {BuildNumberModalComponent} from './../build-number-modal/build-number-modal.component';

@Component({
  selector: 'app-pipelines',
  templateUrl: './pipelines.component.html',
  styleUrls: ['./pipelines.component.css'],
})
export class PipelinesComponent implements OnInit {

  db_table: string = "jenkins_and_users";
  selectedJenkins: any = {};
  private pipelinesArray: any[] = [];
  pipelines_count: any;
  path: string[] = ['name'];
  order: number = 1;
  searchText: string;
  selectedPipeline: any;

  constructor(private route: ActivatedRoute, private rdbClientService : RdbClientService, private pipelineService : PipelineService) { }

  ngOnInit() {
    this.getJenkins();
  }

  getJenkins(){
    const id = this.route.snapshot.paramMap.get('id');
    console.log("id: " + id);
    this.rdbClientService.find(this.db_table, id).subscribe(
      doc => {this.setJenkins(doc); this.getPipelines(doc);}
    );
    
  }

  setJenkins(doc){
    this.selectedJenkins = doc;
  }

  getPipelines(doc){
    var jenkins_url = doc.jenkins_url;
    this.pipelinesArray = this.pipelineService.getJenkinsPipelines(jenkins_url);
    console.log(this.pipelinesArray);
  }

  navigateToJenkinsConfigurePage(url: string){
      var http_url = url + "configure";
      window.open(http_url, "_blank");
  }

  navigateToBuildPage(url: string){
    var http_url = url + "build?delay=0sec";
    window.open(http_url, "_blank");
  }

  setSelectedPipeline(selectedPipeline: any){
      this.selectedPipeline = selectedPipeline;
  }
}
