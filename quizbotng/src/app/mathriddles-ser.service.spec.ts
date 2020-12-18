import { TestBed } from '@angular/core/testing';

import { MathriddlesSerService } from './mathriddles-ser.service';

describe('MathriddlesSerService', () => {
  let service: MathriddlesSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathriddlesSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
