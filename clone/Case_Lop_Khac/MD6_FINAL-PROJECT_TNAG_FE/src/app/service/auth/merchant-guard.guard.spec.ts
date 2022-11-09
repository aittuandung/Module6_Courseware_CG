import { TestBed } from '@angular/core/testing';

import { MerchantGuardGuard } from './merchant-guard.guard';

describe('MerchantGuardGuard', () => {
  let guard: MerchantGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MerchantGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
