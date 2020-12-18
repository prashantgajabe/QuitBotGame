import { TestBed } from '@angular/core/testing';

import { PicworddbSerService } from './picworddb-ser.service';

describe('PicworddbSerService', () => {
  let service: PicworddbSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PicworddbSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
