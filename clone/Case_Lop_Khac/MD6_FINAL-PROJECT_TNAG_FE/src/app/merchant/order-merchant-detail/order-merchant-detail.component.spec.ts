import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMerchantDetailComponent } from './order-merchant-detail.component';

describe('OrderMerchantDetailComponent', () => {
  let component: OrderMerchantDetailComponent;
  let fixture: ComponentFixture<OrderMerchantDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderMerchantDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderMerchantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
