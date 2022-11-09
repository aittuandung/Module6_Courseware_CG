import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMerchantManagementComponent } from './detail-merchant-management.component';

describe('DetailMerchantManagementComponent', () => {
  let component: DetailMerchantManagementComponent;
  let fixture: ComponentFixture<DetailMerchantManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMerchantManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailMerchantManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
