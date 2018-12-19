import { TestBed } from '@angular/core/testing';

import { DefaultGameService } from './default-game.service';

describe('DefaultGameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DefaultGameService = TestBed.get(DefaultGameService);
    expect(service).toBeTruthy();
  });
});
