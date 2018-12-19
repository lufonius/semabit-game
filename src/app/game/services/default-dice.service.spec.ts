import { TestBed } from '@angular/core/testing';

import { DefaultDiceService } from './default-dice.service';

describe('DefaultDiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DefaultDiceService = TestBed.get(DefaultDiceService);
    expect(service).toBeTruthy();
  });
});
