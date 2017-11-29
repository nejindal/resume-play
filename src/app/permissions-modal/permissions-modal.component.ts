import { Component, OnInit, Input } from '@angular/core';
import {RdbClientService} from './../services/rdb-client.service';

@Component({
  selector: 'app-permissions-modal',
  templateUrl: './permissions-modal.component.html',
  styleUrls: ['./permissions-modal.component.css']
})
export class PermissionsModalComponent implements OnInit {

  jenkinsArray =  [];
  user_ldap = "praverma";
  private jenkinsUsers: any;
  private selectedJenkins: any;
  selected: boolean = false;
  save: boolean = false;
  dropDownString: string = "Select your Jenkins Instance";

  private ldap: string;
  private tooltipTitle: string;

  constructor(private rdbClientService : RdbClientService) { }

  ngOnInit() {
    this.rdbClientService.watch('jenkins_and_users')
    .map(results => results.filter((item: Array<Object>) => item['users'].find(x => x.ldap===this.user_ldap)))
    .subscribe(results => {this.jenkinsArray = results; console.log(this.jenkinsArray)}, err => console.error(err),() => console.log("Results fetched"));
  }

  showUsersAndPermissions(selectedJenkins: any){
    this.selected = true;
    this.save = false;
    this.selectedJenkins = selectedJenkins;
    this.dropDownString = selectedJenkins.jenkins_url;
    //arrays and objects are passed as reference in javascript so we are using 
    //slice() method to create a shallow copy of this array
    this.jenkinsUsers = this.selectedJenkins.users.slice();
  }

  toggleSelection(){
    this.selected = false;
    this.save = false;
    this.dropDownString = "Select your Jenkins Instance";
  }

  addLDAP(){
    console.log(this.ldap);
    if(this.ldap){
      this.jenkinsUsers.push({"ldap": this.ldap, "permission_read": true, "permission_write": true});
      this.ldap="";
    }else{
      this.tooltipTitle = "Please enter a valid ldap";
      console.log("Please enter a valid ldap");
    }
  }

  removeLDAP(user: any){
    console.log("Removing LDAP User " + user);
    this.jenkinsUsers.find((x,i)=> {if(x.ldap === user.ldap){
      this.jenkinsUsers.splice(i,1);
    }});
  }

  saveChanges(){
    this.selectedJenkins.users = this.jenkinsUsers;
    console.log(this.selectedJenkins);
    this.rdbClientService.updateOrInsert('jenkins_and_users',this.selectedJenkins);
    this.save = true;
  }

}
