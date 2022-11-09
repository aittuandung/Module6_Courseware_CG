import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDetailRestaurantComponent } from './cart-detail-restaurant.component';

describe('CartDetailRestaurantComponent', () => {
  let component: CartDetailRestaurantComponent;
  let fixture: ComponentFixture<CartDetailRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartDetailRestaurantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartDetailRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
