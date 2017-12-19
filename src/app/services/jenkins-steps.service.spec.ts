import { TestBed, inject } from '@angular/core/testing';

import { JenkinsStepsService } from './jenkins-steps.service';

describe('JenkinsStepsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JenkinsStepsService]
    });
  });

  it('should be created', inject([JenkinsStepsService], (service: JenkinsStepsService) => {
    expect(service).toBeTruthy();
  }));
});
