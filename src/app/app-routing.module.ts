import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PipelinesComponent } from './pipelines/pipelines.component';
import { JenkinsListComponent } from './jenkins-list/jenkins-list.component';

const appRoutes: Routes = [
  { path: 'jenkins/:id/pipelines', component: PipelinesComponent},
  { path: 'jenkins', component: JenkinsListComponent},
  { path: '', redirectTo: '/jenkins', pathMatch: 'full'} 
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports:[
    RouterModule.forRoot(
      appRoutes
    ),
  ]

})
export class AppRoutingModule { }

export const routingComponents = [PipelinesComponent]; 
