import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowlistSellerComponent } from './showlist-seller.component';

describe('ShowlistSellerComponent', () => {
  let component: ShowlistSellerComponent;
  let fixture: ComponentFixture<ShowlistSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowlistSellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowlistSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
