import { TestBed } from '@angular/core/testing';

import { ProjectgetService } from './projectget.service';

describe('ProjectgetService', () => {
  let service: ProjectgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
