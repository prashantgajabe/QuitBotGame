import { TestBed } from '@angular/core/testing';

import { PicwordlistSerService } from './picwordlist-ser.service';

describe('PicwordlistSerService', () => {
  let service: PicwordlistSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PicwordlistSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
