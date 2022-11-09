import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMerchantCancelComponent } from './order-merchant-cancel.component';

describe('CancelComponent', () => {
  let component: OrderMerchantCancelComponent;
  let fixture: ComponentFixture<OrderMerchantCancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderMerchantCancelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderMerchantCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
