import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JenkinsListComponent } from './jenkins-list.component';

describe('JenkinsListComponent', () => {
  let component: JenkinsListComponent;
  let fixture: ComponentFixture<JenkinsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JenkinsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JenkinsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
