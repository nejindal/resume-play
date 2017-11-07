import { Component, OnInit, Input } from '@angular/core';
import {PermissionsModalComponent} from './../permissions-modal/permissions-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input('jenkinsArray') private jenkinsArray : any;
  user="Neha Jindal";
  constructor() { }

  ngOnInit() {
  }

  openPermissionsModal(){
    console.log("Opening Permissions Modal...");
  }

}
