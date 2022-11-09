import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSellerWaitConfirmComponent } from './order-seller-wait-confirm.component';

describe('OrderSellerWaitConfirmComponent', () => {
  let component: OrderSellerWaitConfirmComponent;
  let fixture: ComponentFixture<OrderSellerWaitConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSellerWaitConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderSellerWaitConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
