import { TestBed } from '@angular/core/testing';

import { FoodMerchantService } from './food-merchant.service';

describe('FoodMerchantService', () => {
  let service: FoodMerchantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodMerchantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
