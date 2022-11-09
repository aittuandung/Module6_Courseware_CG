import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMerchantWaitConfirmComponent } from './order-merchant-wait-confirm.component';

describe('OrderMerchantWaitConfirmComponent', () => {
  let component: OrderMerchantWaitConfirmComponent;
  let fixture: ComponentFixture<OrderMerchantWaitConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderMerchantWaitConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderMerchantWaitConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
