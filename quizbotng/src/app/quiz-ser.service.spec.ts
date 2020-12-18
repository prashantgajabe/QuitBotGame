import { TestBed } from '@angular/core/testing';

import { QuizSerService } from './quiz-ser.service';

describe('QuizSerService', () => {
  let service: QuizSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
