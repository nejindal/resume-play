import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JenkinsCardComponent } from './jenkins-card.component';

describe('JenkinsCardComponent', () => {
  let component: JenkinsCardComponent;
  let fixture: ComponentFixture<JenkinsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JenkinsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JenkinsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
