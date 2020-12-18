import { TestBed } from '@angular/core/testing';

import { CategoriesSerService } from './categories-ser.service';

describe('CategoriesSerService', () => {
  let service: CategoriesSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
