import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterJenkinsUrlComponent } from './register-jenkins-url.component';

describe('RegisterJenkinsUrlComponent', () => {
  let component: RegisterJenkinsUrlComponent;
  let fixture: ComponentFixture<RegisterJenkinsUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterJenkinsUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterJenkinsUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
