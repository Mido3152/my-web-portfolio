import { TestBed } from '@angular/core/testing';

import { BloggetService } from './blogget.service';

describe('BloggetService', () => {
  let service: BloggetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloggetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
