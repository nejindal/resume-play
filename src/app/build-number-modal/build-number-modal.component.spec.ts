import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildNumberModalComponent } from './build-number-modal.component';

describe('BuildNumberModalComponent', () => {
  let component: BuildNumberModalComponent;
  let fixture: ComponentFixture<BuildNumberModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildNumberModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildNumberModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
