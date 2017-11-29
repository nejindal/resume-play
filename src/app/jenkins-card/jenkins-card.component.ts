import { Component, OnInit, Input } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

import {PipelineService} from './../services/pipeline.service';

@Component({
  selector: 'app-jenkins-card',
  templateUrl: './jenkins-card.component.html',
  styleUrls: ['./jenkins-card.component.css'],
  animations:[
    trigger('flipCardTrigger',[
      state('front',style({
        transform: 'rotateY(0)'
      })),
      state('back',style({
        transform: 'rotateY(180deg)'
      })),
      transition('front => back', animate('500ms ease-in')),
      transition('back => front', animate('500ms ease-out'))
    ])
  ]
})
export class JenkinsCardComponent implements OnInit {

  @Input('jenkinsCard') private jenkins : any;
  cardFace: string = 'front';
  
  constructor(private pipelineService : PipelineService) { }

  ngOnInit() {
  }

  toggleCard(){
    console.log("toggle me");
    this.cardFace = this.cardFace == 'front'? 'back' : 'front';
  }

  getJenkinsPipelines(selectedJenkins){
    //this.pipelineService.getJenkinsPipelines(selectedJenkinsUrl);
  }

}
