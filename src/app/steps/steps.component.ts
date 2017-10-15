import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {

  private stepId : string;
  private stepJenkinsId : string;
  private stepName: string;
  private stepDurationInMillis : string;
  private stepStatus : string;
  private stepState : string;
  private stepNextId: string[];


  constructor() { }

  ngOnInit() {
  }

}
