import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {RdbClientService} from './../services/rdb-client.service';
import {PipelineService} from './../services/pipeline.service';
import {DataService} from './../services/data.service';

@Component({
  selector: 'app-pipelines',
  templateUrl: './pipelines.component.html',
  styleUrls: ['./pipelines.component.css']
})
export class PipelinesComponent implements OnInit {

  db_table: string = "jenkins_and_users";
  selectedJenkins: any = {};
  private pipelinesArray: String[] = [];
  pipelines_count: any;
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

}
