import { TestBed } from '@angular/core/testing';

import { UserbaseSerService } from './userbase-ser.service';

describe('UserbaseSerService', () => {
  let service: UserbaseSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserbaseSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
