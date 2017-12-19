import { Component, OnInit, Input } from '@angular/core';
import {JenkinsStepsService} from './../services/jenkins-steps.service';

@Component({
  selector: 'app-build-number-modal',
  templateUrl: './build-number-modal.component.html',
  styleUrls: ['./build-number-modal.component.css']
})
export class BuildNumberModalComponent implements OnInit {

  buildNumber: string = "";
  save: boolean = false;
  @Input() selectedPipeline: any;

  constructor(private jenkinsStepsService: JenkinsStepsService) { }

  ngOnInit() {
  }

  getPipelineSteps(){
    if(this.buildNumber != ""){
      this.jenkinsStepsService.getStepsOfPipelineJob(this.selectedPipeline, this.buildNumber).subscribe(data => console.log(data));
    }else{
      console.log("Please enter a valid Build Number");
      this.save = true;
    }
  }

  resetModalSettings(){
    this.save = false;
    this.selectedPipeline = "";
  }

}
