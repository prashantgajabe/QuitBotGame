import { TestBed } from '@angular/core/testing';

import { QuizhascategoriesSerService } from './quizhascategories-ser.service';

describe('QuizhascategoriesSerService', () => {
  let service: QuizhascategoriesSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizhascategoriesSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
