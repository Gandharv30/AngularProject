import { TestBed } from '@angular/core/testing';

import { BuyerSerService } from './buyer-ser.service';

describe('BuyerSerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuyerSerService = TestBed.get(BuyerSerService);
    expect(service).toBeTruthy();
  });
});
