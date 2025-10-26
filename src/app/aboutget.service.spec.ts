import { TestBed } from '@angular/core/testing';

import { aboutgetService } from './aboutget.service';

describe('AboutgetService', () => {
  let service: aboutgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(aboutgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
