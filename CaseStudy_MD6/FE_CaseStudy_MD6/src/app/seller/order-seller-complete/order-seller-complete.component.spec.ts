import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSellerCompleteComponent } from './order-seller-complete.component';

describe('OrderSellerCompleteComponent', () => {
  let component: OrderSellerCompleteComponent;
  let fixture: ComponentFixture<OrderSellerCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSellerCompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderSellerCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
