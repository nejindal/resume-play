import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterJenkinsUrlComponent } from './register-jenkins-url/register-jenkins-url.component';

import {JenkinsService} from './services/jenkins.service';
import {PipelineService} from './services/pipeline.service';
import {StepsService} from './services/steps.service';
import {RdbClientService} from './services/rdb-client.service';
import {Horizon} from './services/rdb-service.manager';

import { StepsComponent } from './steps/steps.component';
import { AnimationComponent } from './animation/animation.component';
import { JenkinsCardComponent } from './jenkins-card/jenkins-card.component';
import { HeaderComponent } from './header/header.component';
import { PermissionsModalComponent } from './permissions-modal/permissions-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterJenkinsUrlComponent,
    StepsComponent,
    AnimationComponent,
    JenkinsCardComponent,
    HeaderComponent,
    PermissionsModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [JenkinsService, StepsService, RdbClientService, Horizon, PipelineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
