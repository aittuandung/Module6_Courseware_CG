import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMerchantCompletedComponent } from './order-merchant-completed.component';

describe('OrderMerchantCompletedComponent', () => {
  let component: OrderMerchantCompletedComponent;
  let fixture: ComponentFixture<OrderMerchantCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderMerchantCompletedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderMerchantCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
