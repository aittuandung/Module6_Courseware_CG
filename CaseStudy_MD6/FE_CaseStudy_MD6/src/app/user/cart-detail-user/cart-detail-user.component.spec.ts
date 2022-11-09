import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDetailUserComponent } from './cart-detail-user.component';

describe('CartDetailUserComponent', () => {
  let component: CartDetailUserComponent;
  let fixture: ComponentFixture<CartDetailUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartDetailUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartDetailUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
