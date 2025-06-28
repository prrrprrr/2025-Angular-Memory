import { TestBed } from '@angular/core/testing';

import { HighscoresAPIService } from './highscores-api.service';

describe('HighscoresAPIService', () => {
  let service: HighscoresAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HighscoresAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
