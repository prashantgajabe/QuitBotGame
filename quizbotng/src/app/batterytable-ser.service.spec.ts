import { TestBed } from '@angular/core/testing';

import { BatterytableSerService } from './batterytable-ser.service';

describe('BatterytableSerService', () => {
  let service: BatterytableSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatterytableSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
