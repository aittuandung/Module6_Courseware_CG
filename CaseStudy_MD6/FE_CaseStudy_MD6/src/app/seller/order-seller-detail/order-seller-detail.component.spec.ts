import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSellerDetailComponent } from './order-seller-detail.component';

describe('OrderSellerDetailComponent', () => {
  let component: OrderSellerDetailComponent;
  let fixture: ComponentFixture<OrderSellerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSellerDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderSellerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
