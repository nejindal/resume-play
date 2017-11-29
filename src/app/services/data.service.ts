import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  selectedJenkins: any;

  constructor() { }

  setJenkinsData(jenkins: any){
    this.selectedJenkins = jenkins;
  }

  getJenkinsData(){
    return this.selectedJenkins;
  }
}
