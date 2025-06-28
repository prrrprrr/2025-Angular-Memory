import { TestBed } from '@angular/core/testing';

import { HighScoresServiceService } from './high-scores-service.service';

describe('HighScoresServiceService', () => {
  let service: HighScoresServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HighScoresServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
