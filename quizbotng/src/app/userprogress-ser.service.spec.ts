import { TestBed } from '@angular/core/testing';

import { UserprogressSerService } from './userprogress-ser.service';

describe('UserprogressSerService', () => {
  let service: UserprogressSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserprogressSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
