import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSellerCancelComponent } from './order-seller-cancel.component';

describe('OrderSellerCancelComponent', () => {
  let component: OrderSellerCancelComponent;
  let fixture: ComponentFixture<OrderSellerCancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSellerCancelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderSellerCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
