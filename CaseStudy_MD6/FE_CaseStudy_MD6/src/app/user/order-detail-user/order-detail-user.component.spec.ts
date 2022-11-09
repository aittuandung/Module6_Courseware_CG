import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailUserComponent } from './order-detail-user.component';

describe('OrderDetailUserComponent', () => {
  let component: OrderDetailUserComponent;
  let fixture: ComponentFixture<OrderDetailUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDetailUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
